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

    /** bind the completed state variable to the nodes selection status */
    public componentDidMount(): void {
        const isNodeSelected: boolean = this.props.node.isSelected();
        this.setState({ completed: isNodeSelected });
    }

    /** update the nodes selection status upon checking and refresh the node */
    private completeToDo: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        this.props.node.setSelected(true);
        const refreshCellsParams: RefreshCellsParams = {
            rowNodes: [this.props.node],
            force: true
        };
        this.props.api.refreshCells(refreshCellsParams);
    }

    /** update the nodes selection status upon un-checking and refresh the node */
    private uncompleteToDo: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        this.props.node.setSelected(false);
        const refreshCellsParams: RefreshCellsParams = { rowNodes: [this.props.node], force: true };
        this.props.api.refreshCells(refreshCellsParams);
    }

    /** update the completed state variable after each refresh of the node */
    public refresh(): boolean {
        const isNodeSelected: boolean = this.props.node.isSelected();
        this.setState({ completed: isNodeSelected })
        return true;
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