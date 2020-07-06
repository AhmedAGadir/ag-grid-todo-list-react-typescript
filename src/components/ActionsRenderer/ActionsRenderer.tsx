import React from 'react';
import { ICellRenderer, ICellRendererParams, CellMouseOverEvent, CellMouseOutEvent, AgEvent } from 'ag-grid-community';
import { Task, IDeleteTask } from '../../interfaces';
import './ActionsRenderer.scss'

import { EditingContext, IEditingContext } from '../Grid/Grid';

interface ActionsRendererProps extends ICellRendererParams {
    deleteTask: IDeleteTask
}

interface ActionsRendererState {
    editing: boolean,
    visible: boolean
}

export default class ActionsRenderer extends React.Component<ActionsRendererProps, ActionsRendererState> implements ICellRenderer {
    state: ActionsRendererState;

    static contextType: React.Context<IEditingContext> = EditingContext;

    public constructor(props: ActionsRendererProps) {
        super(props);
        this.state = {
            editing: false,
            visible: false
        }
    }

    public refresh(): boolean {
        const editing: boolean = this.context.editingId === this.props.node.id;
        this.setState({ editing });
        return true;
    }

    public componentDidMount(): void {
        this.props.api.addEventListener('cellMouseOver', this.onCellMouseOver);
        this.props.api.addEventListener('cellMouseOut', this.onCellMouseOut);

    }

    public componentWillUnmount(): void {
        this.props.api.removeEventListener('cellMouseOver', this.onCellMouseOver);
        this.props.api.removeEventListener('cellMouseOut', this.onCellMouseOut);
    }

    private onCellMouseOver = (params: CellMouseOverEvent): void => {
        if (params.node.id === this.props.node.id) {
            const visible: boolean = true;
            this.setState({ visible });
        }
    }

    private onCellMouseOut = (params: CellMouseOutEvent): void => {
        if (params.node.id === this.props.node.id) {
            if (this.state.editing) {
                return;
            }
            const visible: boolean = false;
            this.setState({ visible });
        }
    }

    private editTask: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        if (this.context.editingId !== null) {
            alert('You can only edit one task at a time');
            return;
        }
        const nodeId: string = this.props.node.id;
        this.context.setEditingId(nodeId);
    }

    private deleteTask: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        if (window.confirm('Would you like to delete this task?')) {
            const task: Task = this.props.data;
            this.props.deleteTask(task);
        }
    }

    private commitChanges: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        const commitChangesEvent: AgEvent = { type: 'commitChanges' };
        this.props.api.dispatchEvent(commitChangesEvent);
        setTimeout(() => this.context.setEditingId(null), 0);
    }

    private cancelChanges: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        const cancelChangesEvent: AgEvent = { type: 'cancelChanges' };
        this.props.api.dispatchEvent(cancelChangesEvent);
        setTimeout(() => this.context.setEditingId(null), 0);
    }

    public render(): React.ReactElement {
        if (!this.state.visible) {
            return null;
        }

        const editingIcons = (
            <>
                <span className="save-icon" onClick={this.commitChanges} > <i className="far fa-save" > </i></span >
                <span className="cancel-icon" onClick={this.cancelChanges} > <i className="fas fa-undo" > </i></span >
            </>
        );

        const notEditingIcons = (
            <>
                <span className="edit-icon" onClick={this.editTask} > <i className="fas fa-pen" > </i></span >
                <span className="delete-icon" onClick={this.deleteTask} > <i className="fas fa-trash" > </i></span >
            </>
        );

        return (
            <div className="actions-wrapper" >
                {this.state.editing ? editingIcons : notEditingIcons}
            </div>
        )
    }
}
