import React from 'react';
import { ICellRenderer, ICellRendererParams } from 'ag-grid-community';
import './TaskRenderer.scss';

import { EditingContext, IEditingContext } from '../Grid/Grid';

interface TaskRendererProps extends ICellRendererParams { };

interface TaskRendererState {
    editing: boolean,
    value: string
};


export default class TaskRenderer extends React.Component<TaskRendererProps, TaskRendererState> implements ICellRenderer {
    state: TaskRendererState;
    private inputRef = React.createRef<HTMLInputElement>();

    static contextType: React.Context<IEditingContext> = EditingContext;

    public constructor(props: TaskRendererProps) {
        super(props);
        this.state = {
            editing: false,
            value: ''
        };
    }

    public refresh(): boolean {
        this.setState({ editing: this.context.editingId === this.props.node.id });
        return true;
    }

    public componentDidMount(): void {
        this.props.api.addEventListener('commitChanges', this.commitChanges);
        this.props.api.addEventListener('cancelChanges', this.cancelChanges);

        this.setState({
            value: this.props.getValue(),
        });
    }

    public componentWillUnmount(): void {
        this.props.api.removeEventListener('commitChanges', this.commitChanges);
        this.props.api.removeEventListener('cancelChanges', this.cancelChanges);
    }

    public componentDidUpdate(): void {
        if (this.state.editing) {
            this.inputRef.current!.focus();
        }
    }

    private commitChanges = (): void => {
        if (this.state.editing) {
            this.props.node.setDataValue(this.props.column.getColId(), this.state.value);
        }
    }

    private cancelChanges = (): void => {
        if (this.state.editing) {
            this.setState({ value: this.props.getValue() });
        }
    }

    private inputChangedHandler: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ value: event.target.value });
    }

    public render(): React.ReactElement {
        let component: React.ReactElement;
        const isSelected: boolean = this.props.node.isSelected();

        if (this.state.editing) {
            const inputStyles: React.CSSProperties = { background: isSelected ? '#D5F1D1' : 'whitesmoke' };
            component =
                <input
                    ref={this.inputRef}
                    value={this.state.value}
                    onChange={this.inputChangedHandler}
                    style={inputStyles} />
        } else {
            component = <span className={isSelected ? "strike" : ''}> {this.state.value}</span>
        }

        return (
            <div className="task-wrapper" >
                {component}
            </div>
        );
    }
}