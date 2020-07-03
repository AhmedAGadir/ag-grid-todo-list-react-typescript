import React, { Component, createRef } from 'react';
import { ICellRenderer, RowNode, GridApi, Column } from 'ag-grid-community';
import './TaskRenderer.scss';
import { IGetEditingId } from '../../App';

interface TaskRendererProps {
    value: string,
    node: RowNode,
    api: GridApi,
    getEditingId: IGetEditingId,
    column: Column,
    getValue: () => any,
};

interface TaskRendererState {
    editing: boolean,
    value: string
};


export default class TaskRenderer extends Component<TaskRendererProps, TaskRendererState> implements ICellRenderer {
    state: TaskRendererState;
    private inputRef = createRef<HTMLInputElement>();

    constructor(props: TaskRendererProps) {
        super(props);
        this.state = {
            editing: false,
            value: ''
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
            value: this.props.getValue(),
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

    commitChanges: Function = (): void => {
        if (this.state.editing) {
            this.props.node.setDataValue(this.props.column.getColId(), this.state.value);
        }
    }

    cancelChanges: Function = (): void => {
        if (this.state.editing) {
            this.setState({ value: this.props.getValue() });
        }
    }

    inputChangedHandler: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ value: event.target.value });
    }

    render(): React.ReactElement {
        const isSelected: boolean = this.props.node.isSelected();

        const inputTask =
            <input
                ref={this.inputRef}
                value={this.state.value}
                onChange={this.inputChangedHandler}
                style={{ background: isSelected ? '#D5F1D1' : 'whitesmoke' }
                } />

        const spanTask =
            <span className={isSelected ? "strike" : ''}> {this.state.value}</span>

        return (
            <div className="task-wrapper" >
                {this.state.editing ? inputTask : spanTask}
            </div>
        );
    }
}