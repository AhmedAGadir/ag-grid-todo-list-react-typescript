import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { MockEditingContext, IMockEditingContext } from '../context/MockEditingContext';


export interface IMockEditingCellRenderer<P> extends React.ComponentClass<P>, React.Component<P> {
    commitChanges: () => void,
    cancelChanges: () => void
}

interface WithMockEditingRendererState {
    mockEditing: boolean,
}

const WithMockEditingRenderer = <P extends ICellRendererParams>(CellRendererComp: IMockEditingCellRenderer<P>): React.ComponentClass<P, WithMockEditingRendererState> => {

    return class extends React.Component<P, WithMockEditingRendererState> {
        state: WithMockEditingRendererState;
        static contextType: React.Context<IMockEditingContext> = MockEditingContext;

        constructor(props: P) {
            super(props);
            this.state = {
                mockEditing: false,
            }
        }

        public refresh(): boolean {
            this.setState({ mockEditing: this.context.mockEditingId === this.props.node.id });
            return true;
        }

        public componentDidMount(): void {
            this.props.api.addEventListener('commitChanges', this.commitChanges);
            this.props.api.addEventListener('cancelChanges', this.cancelChanges);

            CellRendererComp.componentDidMount();
        }

        public componentWillUnmount(): void {
            this.props.api.removeEventListener('commitChanges', this.commitChanges);
            this.props.api.removeEventListener('cancelChanges', this.cancelChanges);

            CellRendererComp.componentWillMount();
        }

        commitChanges() {
            if (this.state.mockEditing) {
                CellRendererComp.commitChanges();
            }
        }

        cancelChanges() {
            if (this.state.mockEditing) {
                CellRendererComp.cancelChanges();
            }
        }

        render(): React.ReactElement<P> {
            return <CellRendererComp {...this.props} mockEditing={this.state.mockEditing} />
        };
    }
}

export default WithMockEditingRenderer;