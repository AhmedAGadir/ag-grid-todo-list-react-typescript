import React from 'react';
import { ICellRenderer, ICellRendererParams, RefreshCellsParams } from 'ag-grid-community';
import './CheckboxRenderer.scss';

interface CheckboxRendererProps extends ICellRendererParams { }

interface CheckboxRendererState {
    completed: boolean
}

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

    private completeTask: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        this.props.node.setSelected(true);
        const refreshCellsParams: RefreshCellsParams = { rowNodes: [this.props.node], force: true };
        this.props.api.refreshCells(refreshCellsParams);
    }

    private uncompleteTask: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        this.props.node.setSelected(false);
        const refreshCellsParams: RefreshCellsParams = { rowNodes: [this.props.node], force: true };
        this.props.api.refreshCells(refreshCellsParams);
    }

    public render(): React.ReactElement {
        const completedIcon = (
            <span
                className="completed-icon"
                onClick={this.uncompleteTask}>
                <i className="far fa-check-square" ></i>
            </span>
        );

        const uncompletedIcon = (
            <span
                className="uncompleted-icon"
                onClick={this.completeTask}>
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