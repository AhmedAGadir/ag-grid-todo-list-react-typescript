import React from 'react';
import { ICellRenderer, ICellRendererParams } from 'ag-grid-community';
import './DescriptionRenderer.scss';

import { MockEditingContext, IMockEditingContext } from '../../context/MockEditingContext';

interface DescriptionRendererProps extends ICellRendererParams { };

interface DescriptionRendererState {
    /** boolean value indicating whether the node this renderer is situated in is currently mock-editing or not */
    mockEditing: boolean,
    /** {@link ToDo.description | description} of a toDo */
    value: string
};


export default class DescriptionRenderer extends React.Component<DescriptionRendererProps, DescriptionRendererState> implements ICellRenderer {
    state: DescriptionRendererState;
    private inputRef: React.RefObject<HTMLInputElement>;

    static contextType: React.Context<IMockEditingContext> = MockEditingContext;

    public constructor(props: DescriptionRendererProps) {
        super(props);
        this.state = {
            mockEditing: false,
            value: ''
        };
        this.inputRef = React.createRef<HTMLInputElement>();
    }

    public refresh(): boolean {
        this.setState({ mockEditing: this.context.mockEditingId === this.props.node.id });
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
        if (this.state.mockEditing) {
            this.inputRef.current!.focus();
        }
    }

    private commitChanges = (): void => {
        if (this.state.mockEditing) {
            this.props.node.setDataValue(this.props.column.getColId(), this.state.value);
        }
    }

    private cancelChanges = (): void => {
        if (this.state.mockEditing) {
            this.setState({ value: this.props.getValue() });
        }
    }

    private inputChangedHandler: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ value: event.target.value });
    }

    public render(): React.ReactElement {
        let component: React.ReactElement;
        const isSelected: boolean = this.props.node.isSelected();

        if (this.state.mockEditing) {
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
            <div className="todo-wrapper" >
                {component}
            </div>
        );
    }
}