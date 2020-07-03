import React, { Component, createRef } from 'react';
import { ICellRenderer, RowNode, GridApi, Column } from 'ag-grid-community';
import './TaskRenderer.scss';

interface TaskRendererProps {
    value: string,
    node: RowNode,
    api: GridApi,
    getEditingId: () => string,
    column: Column,
    getValue: () => any,
};

interface TaskRendererState {
    editing: boolean,
    inputValue: string
};


export default class TaskRenderer extends Component<TaskRendererProps, TaskRendererState> implements ICellRenderer {
    state: TaskRendererState;
    private inputRef = createRef<HTMLInputElement>();

    constructor(props: TaskRendererProps) {
        super(props);
        this.state = {
            editing: false,
            inputValue: ''
        };
    }

    refresh(): boolean {
        this.setState({ editing: this.props.getEditingId() === this.props.node.id });
        return true;
    }

    componentDidMount(): void {
        this.props.api.addEventListener('commitChanges', this.commitChanges);
        this.props.api.addEventListener('cancelChanges', this.cancelChanges);

        this.setState({
            inputValue: this.props.getValue(),
        });
    }

    componentWillUnmount(): void {
        this.props.api.removeEventListener('commitChanges', this.commitChanges);
        this.props.api.removeEventListener('cancelChanges', this.cancelChanges);
    }

    componentDidUpdate(): void {
        if (this.state.editing) {
            this.inputRef.current!.focus();
        }
    }

    commitChanges: React.MouseEventHandler = (): void => {
        if (this.state.editing) {
            this.props.node.setDataValue(this.props.column.getColId(), this.state.inputValue);
        }
    }

    cancelChanges: React.MouseEventHandler = (): void => {
        if (this.state.editing) {
            this.setState({ inputValue: this.props.getValue() });
        }
    }

    render(): React.ReactElement {
        const inputTask =
            <input
                ref={this.inputRef}
                value={this.state.inputValue}
                onChange={e => this.setState({ inputValue: e.target.value })}
                style={{ background: this.props.node.isSelected() ? '#D5F1D1' : 'whitesmoke' }
                } />

        const spanTask =
            <span className={this.props.node.isSelected() ? "strike" : ''}> {this.props.getValue()}</span>

        return (
            <div className="task-wrapper" >
                {this.state.editing ? inputTask : spanTask}
            </div>
        );
    }
}