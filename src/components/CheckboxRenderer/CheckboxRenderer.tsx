import React, { Component } from 'react';
import { ICellRenderer, RowNode, GridApi, ICellRendererParams } from 'ag-grid-community';
import './CheckboxRenderer.scss';

interface CheckboxRendererProps {
    node: RowNode,
    api: GridApi,
}

interface CheckboxRendererState {
    completed: boolean
}

export default class CompletedRenderer extends Component<CheckboxRendererProps, CheckboxRendererState> implements ICellRenderer {
    state: CheckboxRendererState;

    constructor(props: CheckboxRendererProps) {
        super(props);
        this.state = { completed: false };
    }

    refresh = (params: ICellRendererParams): boolean => {
        this.setState({ completed: params.node.isSelected() })
        return true;
    }

    componentDidMount(): void {
        const isNodeSelected = this.props.node.isSelected();
        this.setState({ completed: isNodeSelected });
    }

    completeTask: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        this.props.node.setSelected(true);
        this.props.api.refreshCells({ rowNodes: [this.props.node], force: true });
    }

    uncompleteTask: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        this.props.node.setSelected(false);
        this.props.api.refreshCells({ rowNodes: [this.props.node], force: true });
    }

    render(): React.ReactElement {
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