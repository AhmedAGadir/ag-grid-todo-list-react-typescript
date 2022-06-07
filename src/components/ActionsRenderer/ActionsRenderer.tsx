import React from 'react';
import { ICellRenderer, ICellRendererParams, CellMouseOverEvent, CellMouseOutEvent } from 'ag-grid-community';
import { ToDo, IDeleteToDo } from '../../interfaces/todo';
import { MockEditingContext, IMockEditingContext } from '../../context/MockEditingContext';
import WithMockCellRenderer, { WithMockCellRendererProps } from '../../HOC/WithMockCellRenderer';
import './ActionsRenderer.scss'


interface ActionsRendererProps extends ICellRendererParams, WithMockCellRendererProps {
    /** a method to be invoked when the user would like to save changes made in mock-editors */
    commit: () => null,
    /** a method to be invoked when the user would like to cancel changes made in mock-editors */
    rollback: () => null,
    /** a method to be invoked when the user would like to delete a toDo */
    deleteToDo: IDeleteToDo
}

interface ActionsRendererState {
    /** a boolean value indicating whether the actions should be visible or not (they are visible when the node is hovered over) */
    visible: boolean
}

/** renders:
 *  - an enter mock-edit mode icon and delete icon when the node is *not* in mock edit mode
 *  - a save changes icon and cancel changes icon when the node is in mock edit mode
 *  */
class ActionsRenderer extends React.Component<ActionsRendererProps, ActionsRendererState> implements ICellRenderer {
    state: ActionsRendererState;

    static contextType: React.Context<IMockEditingContext> = MockEditingContext;

    public constructor(props: ActionsRendererProps) {
        super(props);
        this.state = {
            visible: false
        }
    }

    /** overridden in {@link WithMockCellRenderer} */
    public refresh(): boolean {
        throw new Error('ActionsRenderer not wrapped with WithMockCellRenderer');

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
            if (this.props.isMockEditing) {
                return;
            }
            const visible: boolean = false;
            this.setState({ visible });
        }
    }

    private enterMockEditMode: React.MouseEventHandler<HTMLSpanElement> = (): void => {
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

    private saveChanges: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        this.props.commit();
        setTimeout(() => this.context.setMockEditingId(null), 0);
    }

    private undoChanges: React.MouseEventHandler<HTMLSpanElement> = (): void => {
        this.props.rollback();
        setTimeout(() => this.context.setMockEditingId(null), 0);
    }

    public render(): React.ReactElement {
        if (!this.state.visible) {
            return null;
        }

        const mockEditingIcons = (
            <>
                <span className="save-icon" onClick={this.saveChanges} > <i className="far fa-save" > </i></span >
                <span className="cancel-icon" onClick={this.undoChanges} > <i className="fas fa-undo" > </i></span >
            </>
        );

        const nonMockEditingIcons = (
            <>
                <span className="edit-icon" onClick={this.enterMockEditMode} > <i className="fas fa-pen" > </i></span >
                <span className="delete-icon" onClick={this.deleteToDo} > <i className="fas fa-trash" > </i></span >
            </>
        );

        return (
            <div className="actions-wrapper" >
                {this.props.isMockEditing ? mockEditingIcons : nonMockEditingIcons}
            </div>
        )
    }
}

export default WithMockCellRenderer(ActionsRenderer);
