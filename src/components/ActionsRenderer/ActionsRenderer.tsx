import React, { Component } from 'react';
import { ICellRenderer, RowNode, GridApi, AgEvent } from 'ag-grid-community';
import './ActionsRenderer.scss'
interface ActionsRendererProps {
    getCurrentlyEditingId: () => string,
    setCurrentlyEditingId: (id: string) => void,
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
        return true;
    }

    componentDidMount = () => {
        this.props.api.addEventListener('cellMouseOver', this.onCellMouseOver);
        this.props.api.addEventListener('cellMouseOut', this.onCellMouseOut);

        const isEditing = this.props.getCurrentlyEditingId() === this.props.node.id;
        this.setState({ editing: isEditing });

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

    startEditing = () => {
        if (this.props.getCurrentlyEditingId() !== null) {
            alert('You can only edit one task at a time');
            return;
        }

        this.setState({
            editing: true
        }, () => {
            this.props.setCurrentlyEditingId(this.props.node.id);
            this.props.api.refreshCells({ rowNodes: [this.props.node], force: true })
        })
    }

    deleteTask = () => {
        if (window.confirm('Would you like to delete this task?')) {
            this.props.deleteTask(this.props.node.id);
        }
    }

    commitChanges = (bool) => {
        const eventType = bool ? 'saveChanges' : 'cancelChanges';
        this.setState({ editing: false }, () => {
            this.props.setCurrentlyEditingId(null);
            this.props.api.dispatchEvent({ type: eventType, id: this.props.node.id });
        })
    }

    render() {
        if (!this.state.visible) {
            return null;
        }

        const editingIcons = (
            <>
                <span className="save-icon" onClick={() => this.commitChanges(true)} > <i className="far fa-save" > </i></span >
                <span className="cancel-icon" onClick={() => this.commitChanges(false)} > <i className="fas fa-undo" > </i></span >
            </>
        );

        const notEditingIcons = (
            <>
                <span className="edit-icon" onClick={this.startEditing} > <i className="fas fa-pen" > </i></span >
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
