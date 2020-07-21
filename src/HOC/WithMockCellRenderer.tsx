import React from 'react';
import { IMockEditingContext, MockEditingContext } from '../context/MockEditingContext';
import { ICellRenderer, ICellRendererParams } from 'ag-grid-community';


export interface WithMockCellRendererProps {
    /** a boolean value indicating whether the current node is in mock-edit mode or not */
    isMockEditing: boolean;
}

interface WithMockCellRendererState {
    /** a boolean value indicating whether the current node is in mock-edit mode or not */
    isMockEditing: boolean
}

/**
 * wraps a cell renderer with the logic to identify whether it is in mock-edit mode or not whenever the cell is refreshed
 * @param WrappedComponent - The cell renderer component which should enter a mock edit mode 
 */
const WithMockCellRenderer = <P extends ICellRendererParams>(WrappedComponent: React.ComponentClass<P>): React.ComponentClass<P> => (
    class extends React.Component<P> implements ICellRenderer {
        state: WithMockCellRendererState;
        static contextType: React.Context<IMockEditingContext> = MockEditingContext;

        constructor(props: P) {
            super(props);
            this.state = {
                isMockEditing: false
            }
        }

        public refresh(): boolean {
            this.setState({ isMockEditing: this.context.mockEditingId === this.props.node.id });
            return true;
        }

        render(): React.ReactElement<P & WithMockCellRendererProps> {
            return <WrappedComponent {...this.props as P} isMockEditing={this.state.isMockEditing} />
        }
    }
);

export default WithMockCellRenderer;