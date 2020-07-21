import React from 'react';
import { ICellRenderer, ICellRendererParams, RefreshCellsParams } from 'ag-grid-community';
import './CheckboxRenderer.scss';

interface CheckboxRendererProps extends ICellRendererParams { }

interface CheckboxRendererState {
    /** a boolean value indicating whether the toDo is complete or not (selected) */
    completed: boolean
}

/** renders a span element which looks like a HTML checkbox element. the checked attribute is bound to the nodes selection status  */
export default class CompletedRenderer extends React.Component<CheckboxRendererProps, CheckboxRendererState> implements ICellRenderer {
    state: CheckboxRendererState;

    public constructor(props: CheckboxRendererProps) {
        super(props);
        this.state = {
            completed: false
        };
    }

    public refresh(): boolean {
        const isNodeSelected: boolean = this.props.node.isSelected();
        this.setState({ completed: isNodeSelected })
        return true;
    }

    public componentDidMount(): void {
        const isNodeSelected: boolean = this.props.node.isSelected();
        this.setState({ completed: isNodeSelected });
    }

    private completeToDo: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        this.props.node.setSelected(true);
        const refreshCellsParams: RefreshCellsParams = { rowNodes: [this.props.node], force: true };
        this.props.api.refreshCells(refreshCellsParams);
    }

    private uncompleteToDo: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        this.props.node.setSelected(false);
        const refreshCellsParams: RefreshCellsParams = { rowNodes: [this.props.node], force: true };
        this.props.api.refreshCells(refreshCellsParams);
    }

    public render(): React.ReactElement {
        const completedIcon = (
            <span
                className="completed-icon"
                onClick={this.uncompleteToDo}>
                <i className="far fa-check-square" ></i>
            </span>
        );

        const uncompletedIcon = (
            <span
                className="uncompleted-icon"
                onClick={this.completeToDo}>
                <i className="far fa-square" ></i>
            </span>
        )

        return (
            <div className="checkbox-wrapper">
                {this.state.completed ? completedIcon : uncompletedIcon}
            </div>
        )
    }
}