import React from 'react';
import { IMockEditingContext, MockEditingContext } from '../context/MockEditingContext';
import { ICellRendererParams } from 'ag-grid-community';
import { IMockCellEditor } from '../interfaces/mockCellEditor';

export interface WithMockCellEditorProps {
    /** a boolean value indicating whether the current node is in mock-edit mode or not */
    isMockEditing: boolean;
}

interface WithMockCellEditorState {
    /** a boolean value indicating whether the current node is in mock-edit mode or not */
    isMockEditing: boolean
}

/**
 * wraps a mock-editor with the logic to identify whether it is in mock-edit mode or not whenever the cell is refreshed
 * @param WrappedComponent - The cell renderer component which should enter a mock edit mode 
 */
const WithMockCellEditor = <P extends ICellRendererParams>(WrappedComponent: React.ComponentClass<P>): React.ComponentClass<P> => (
    class extends React.Component<P> implements IMockCellEditor {
        state: WithMockCellEditorState;
        private wrappedComponentRef: React.RefObject<React.Component<P> & IMockCellEditor>;
        static contextType: React.Context<IMockEditingContext> = MockEditingContext;

        constructor(props: P) {
            super(props);
            this.state = {
                isMockEditing: false
            };
            this.wrappedComponentRef = React.createRef<React.Component<P> & IMockCellEditor>();
        }

        public refresh(): boolean {
            this.setState({ isMockEditing: this.context.mockEditingId === this.props.node.id });
            return true;
        }

        /** @returns the colId and value of the updated mock editor */
        public getValue(): [any, any] {
            return this.wrappedComponentRef.current.getValue();
        }

        /** calls reset on the mock editor */
        public reset(): void {
            this.wrappedComponentRef.current.reset();
        }


        render(): React.ReactElement<P & WithMockCellEditorProps> {
            return <WrappedComponent {...this.props as P} isMockEditing={this.state.isMockEditing} ref={this.wrappedComponentRef} />
        }
    }
);

export default WithMockCellEditor;
