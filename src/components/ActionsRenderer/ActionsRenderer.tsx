import React from 'react';
import { ICellRenderer, ICellRendererParams, CellMouseOverEvent, CellMouseOutEvent, AgEvent } from 'ag-grid-community';
import { ToDo, IDeleteToDo } from '../../interfaces';
import './ActionsRenderer.scss'

import { MockEditingContext, IMockEditingContext } from '../../context/MockEditingContext';

interface ActionsRendererProps extends ICellRendererParams {
    deleteToDo: IDeleteToDo
}

interface ActionsRendererState {
    mockEditing: boolean,
    visible: boolean
}

export default class ActionsRenderer extends React.Component<ActionsRendererProps, ActionsRendererState> implements ICellRenderer {
    state: ActionsRendererState;

    static contextType: React.Context<IMockEditingContext> = MockEditingContext;

    public constructor(props: ActionsRendererProps) {
        super(props);
        this.state = {
            mockEditing: false,
            visible: false
        }
    }

    public refresh(): boolean {
        const mockEditing: boolean = this.context.mockEditingId === this.props.node.id;
        this.setState({ mockEditing });
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
            if (this.state.mockEditing) {
                return;
            }
            const visible: boolean = false;
            this.setState({ visible });
        }
    }

    private editToDo: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        if (this.context.mockEditingId !== null) {
            alert('You can only edit one todo at a time');
            return;
        }
        const nodeId: string = this.props.node.id;
        this.context.setMockEditingId(nodeId);
    }

    private deleteToDo: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        if (window.confirm('Would you like to delete this todo?')) {
            const toDo: ToDo = this.props.data;
            this.props.deleteToDo(toDo);
        }
    }

    private commitChanges: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        const commitChangesEvent: AgEvent = { type: 'commitChanges' };
        this.props.api.dispatchEvent(commitChangesEvent);
        setTimeout(() => this.context.setMockEditingId(null), 0);
    }

    private cancelChanges: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        const cancelChangesEvent: AgEvent = { type: 'cancelChanges' };
        this.props.api.dispatchEvent(cancelChangesEvent);
        setTimeout(() => this.context.setMockEditingId(null), 0);
    }

    public render(): React.ReactElement {
        if (!this.state.visible) {
            return null;
        }

        const mockEditingIcons = (
            <>
                <span className="save-icon" onClick={this.commitChanges} > <i className="far fa-save" > </i></span >
                <span className="cancel-icon" onClick={this.cancelChanges} > <i className="fas fa-undo" > </i></span >
            </>
        );

        const nonMockEditingIcons = (
            <>
                <span className="edit-icon" onClick={this.editToDo} > <i className="fas fa-pen" > </i></span >
                <span className="delete-icon" onClick={this.deleteToDo} > <i className="fas fa-trash" > </i></span >
            </>
        );

        return (
            <div className="actions-wrapper" >
                {this.state.mockEditing ? mockEditingIcons : nonMockEditingIcons}
            </div>
        )
    }
}
