import React, { Component } from 'react';
import { ICellRenderer, RowNode, GridApi } from 'ag-grid-community';
import './ActionsRenderer.scss'
interface ActionsRendererProps {
    getEditingId: () => string,
    setEditingId: (id: string) => void,
    deleteTask: (id: string) => void,
    api: GridApi,
    node: RowNode,
}

interface ActionsRendererState {
    editing: boolean,
    visible: boolean
}

export default class ActionsRenderer extends Component<ActionsRendererProps, ActionsRendererState> implements ICellRenderer {
    state: ActionsRendererState;

    constructor(props: ActionsRendererProps) {
        super(props);
        this.state = {
            editing: false,
            visible: false
        }
    }

    refresh() {
        this.setState({ editing: this.props.getEditingId() === this.props.node.id });
        return true;
    }

    componentDidMount = () => {
        this.props.api.addEventListener('cellMouseOver', this.onCellMouseOver);
        this.props.api.addEventListener('cellMouseOut', this.onCellMouseOut);

    }

    componentWillUnmount = () => {
        this.props.api.removeEventListener('cellMouseOver', this.onCellMouseOver);
        this.props.api.removeEventListener('cellMouseOut', this.onCellMouseOut);
    }

    onCellMouseOver = params => {
        if (params.node.id === this.props.node.id) {
            this.setState({ visible: true });
        }
    }

    onCellMouseOut = params => {
        if (params.node.id === this.props.node.id) {
            if (this.state.editing) {
                return;
            }
            this.setState({ visible: false });
        }
    }

    editTask = () => {
        if (this.props.getEditingId() !== null) {
            alert('You can only edit one task at a time');
            return;
        }
        this.props.setEditingId(this.props.node.id);
    }

    deleteTask = () => {
        if (window.confirm('Would you like to delete this task?')) {
            this.props.deleteTask(this.props.node.id);
        }
    }

    commitChanges = () => {
        this.props.api.dispatchEvent({ type: 'commitChanges' });
        setTimeout(() => this.props.setEditingId(null), 0);
    }

    cancelChanges = () => {
        this.props.api.dispatchEvent({ type: 'cancelChanges' });
        setTimeout(() => this.props.setEditingId(null), 0);
    }

    render() {
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
