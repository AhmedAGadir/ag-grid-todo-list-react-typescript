import React, { Component } from 'react';
import { ICellRenderer } from 'ag-grid-community';
import './ActionsRenderer.scss'

interface ActionsRendererProps {
    getCurrentlyEditingId: any,
    setCurrentlyEditingId: any,
    api: any,
    node: any,
    deleteToDo: any
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

    refresh(params) {
        return true;
    }

    componentDidMount = () => {
        let currentlyEditingId = this.props.getCurrentlyEditingId();
        this.setState({ editing: currentlyEditingId === this.props.node.id })


        this.props.api.addEventListener('cellMouseOver', params => {
            if (params.node.id === this.props.node.id) {
                this.setState({ visible: true });
            }
        })

        this.props.api.addEventListener('cellMouseOut', params => {
            if (params.node.id === this.props.node.id) {
                if (this.state.editing) {
                    return;
                }
                this.setState({ visible: false });
            }
        })
    }

    saveChanges = () => {
        this.setState({ editing: false }, () => {
            this.props.setCurrentlyEditingId(null);
            this.props.api.dispatchEvent({ type: 'saveChanges', id: this.props.node.id });
        })
    }

    cancelChanges = () => {
        this.setState({ editing: false }, () => {
            this.props.setCurrentlyEditingId(null);
            this.props.api.dispatchEvent({ type: 'cancelChanges', id: this.props.node.id });
        })
    }

    startEditing = () => {
        if (this.props.getCurrentlyEditingId() !== null) {
            alert('You can only edit one task at a time');
            return;
        }

        this.setState({ editing: true }, () => {
            this.props.setCurrentlyEditingId(this.props.node.id);
            this.props.api.refreshCells({ rowNodes: [this.props.node], force: true })
        })
    }

    deleteToDo = () => {
        if (window.confirm('Would you like to delete this task?')) {
            this.props.deleteToDo(this.props.node.id)
        }
    }

    render() {
        if (!this.state.visible) {
            return null;
        }

        let component;

        if (this.state.editing) {
            component = (
                <>
                    <span className="save-icon" onClick={this.saveChanges} > <i className="far fa-save" > </i></span >
                    <span className="cancel-icon" onClick={this.cancelChanges} > <i className="fas fa-undo" > </i></span >
                </>
            )
        } else {
            component = (
                <>
                    <span className="edit-icon" onClick={this.startEditing} > <i className="fas fa-pen" > </i></span >
                    <span className="delete-icon" onClick={this.deleteToDo} > <i className="fas fa-trash" > </i></span >
                </>
            )
        }


        return (
            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%' }
            }>
                {component}
            </div>
        )
    }
}
