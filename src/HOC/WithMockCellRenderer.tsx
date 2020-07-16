import React from 'react';
import { IMockEditingContext, MockEditingContext } from '../context/MockEditingContext';
import { ICellRenderer, ICellRendererParams } from 'ag-grid-community';


export interface WithMockCellRendererProps {
    mockEditing: boolean;
}

interface WithMockCellRendererState {
    mockEditing: boolean
}

const WithMockCellRenderer = <P extends ICellRendererParams>(WrappedComponent: React.ComponentClass<P>): React.ComponentClass<P> => (
    class extends React.Component<P> implements ICellRenderer {
        state: WithMockCellRendererState;
        static contextType: React.Context<IMockEditingContext> = MockEditingContext;

        constructor(props: P) {
            super(props);
            this.state = {
                mockEditing: false
            }
        }

        public refresh(): boolean {
            this.setState({ mockEditing: this.context.mockEditingId === this.props.node.id });
            return true;
        }

        render(): React.ReactElement<P & WithMockCellRendererProps> {
            return <WrappedComponent {...this.props as P} mockEditing={this.state.mockEditing} />
        }
    }
);

export default WithMockCellRenderer;