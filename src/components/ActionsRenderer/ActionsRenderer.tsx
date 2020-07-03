import React from 'react';
import { ICellRenderer, RowNode, GridApi, CellMouseOverEvent, CellMouseOutEvent, AgEvent } from 'ag-grid-community';
import './ActionsRenderer.scss'
import { IGetEditingId, ISetEditingId, IDeleteTask } from '../../App';

interface ActionsRendererProps {
    getEditingId: IGetEditingId,
    setEditingId: ISetEditingId,
    deleteTask: IDeleteTask,
    api: GridApi,
    node: RowNode,
}

interface ActionsRendererState {
    editing: boolean,
    visible: boolean
}

export default class ActionsRenderer extends React.Component<ActionsRendererProps, ActionsRendererState> implements ICellRenderer {
    state: ActionsRendererState;

    constructor(props: ActionsRendererProps) {
        super(props);
        this.state = {
            editing: false,
            visible: false
        }
    }

    refresh(): boolean {
        const editing: boolean = this.props.getEditingId() === this.props.node.id;
        this.setState({ editing });
        return true;
    }

    componentDidMount(): void {
        this.props.api.addEventListener('cellMouseOver', this.onCellMouseOver);
        this.props.api.addEventListener('cellMouseOut', this.onCellMouseOut);

    }

    componentWillUnmount(): void {
        this.props.api.removeEventListener('cellMouseOver', this.onCellMouseOver);
        this.props.api.removeEventListener('cellMouseOut', this.onCellMouseOut);
    }

    onCellMouseOver = (params: CellMouseOverEvent): void => {
        if (params.node.id === this.props.node.id) {
            const visible: boolean = true;
            this.setState({ visible });
        }
    }

    onCellMouseOut = (params: CellMouseOutEvent): void => {
        if (params.node.id === this.props.node.id) {
            if (this.state.editing) {
                return;
            }
            const visible: boolean = false;
            this.setState({ visible });
        }
    }

    editTask: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        if (this.props.getEditingId() !== null) {
            alert('You can only edit one task at a time');
            return;
        }
        const nodeId: string = this.props.node.id;
        this.props.setEditingId(nodeId);
    }

    deleteTask: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        if (window.confirm('Would you like to delete this task?')) {
            const nodeId: string = this.props.node.id;
            this.props.deleteTask(nodeId);
        }
    }

    commitChanges: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        const commitChangesEvent: AgEvent = { type: 'commitChanges' };
        this.props.api.dispatchEvent(commitChangesEvent);
        setTimeout(() => this.props.setEditingId(null), 0);
    }

    cancelChanges: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        const cancelChangesEvent: AgEvent = { type: 'cancelChanges' };
        this.props.api.dispatchEvent(cancelChangesEvent);
        setTimeout(() => this.props.setEditingId(null), 0);
    }

    render(): React.ReactElement {
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
