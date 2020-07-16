import React from 'react';
import { IMockEditingContext, MockEditingContext } from '../context/MockEditingContext';
import { ICellRendererParams } from 'ag-grid-community';
import { IMockCellEditor } from '../interfaces/mockCellEditor';

export interface WithMockCellEditorProps {
    mockEditing: boolean;
}

interface WithMockCellEditorState {
    mockEditing: boolean
}

const WithMockCellEditor = <P extends ICellRendererParams>(WrappedComponent: React.ComponentClass<P>): React.ComponentClass<P> => (
    class extends React.Component<P> implements IMockCellEditor {
        state: WithMockCellEditorState;
        private wrappedComponentRef: React.RefObject<any>;
        static contextType: React.Context<IMockEditingContext> = MockEditingContext;

        constructor(props: P) {
            super(props);
            this.state = {
                mockEditing: false
            };
            this.wrappedComponentRef = React.createRef<any>();
        }

        public refresh(): boolean {
            this.setState({ mockEditing: this.context.mockEditingId === this.props.node.id });
            return true;
        }

        public getValue(): [string, any] {
            return this.wrappedComponentRef.current.getValue();
        }

        public reset(): void {
            return this.wrappedComponentRef.current.reset();
        }


        render(): React.ReactElement<P & WithMockCellEditorProps> {
            return <WrappedComponent {...this.props as P} mockEditing={this.state.mockEditing} ref={this.wrappedComponentRef} />
        }
    }
);

export default WithMockCellEditor;