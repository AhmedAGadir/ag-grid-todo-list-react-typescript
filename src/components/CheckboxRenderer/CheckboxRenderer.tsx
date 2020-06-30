import React, { Component } from 'react';
import { ICellRenderer, RowNode, GridApi, RefreshCellsParams } from 'ag-grid-community';
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

    refresh = (params) => {
        this.setState({ completed: params.node.isSelected() })
        return false;
    }

    componentDidMount = () => {
        const isNodeSelected = this.props.node.isSelected();
        this.setState({ completed: isNodeSelected });
    }

    setCompleted = bool => {
        this.setState({
            completed: bool
        }, () => {
            this.props.node.setSelected(bool);
            this.props.api.refreshCells({ rowNodes: [this.props.node], force: true });
        })
    }

    render() {
        const completedIcon = (
            <span
                className="completed-icon"
                onClick={() => this.setCompleted(false)}>
                <i className="far fa-check-square" ></i>
            </span>
        );

        const uncompletedIcon = (
            <span
                className="uncompleted-icon"
                onClick={() => this.setCompleted(true)}>
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