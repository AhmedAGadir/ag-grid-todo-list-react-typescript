import React from 'react';
import { ICellRenderer, ICellRendererParams } from 'ag-grid-community';
import './DescriptionRenderer.scss';

import { MockEditingContext, IMockEditingContext } from '../../context/MockEditingContext';

interface DescriptionRendererProps extends ICellRendererParams { };

interface DescriptionRendererState {
    /** true if the node is in mock-edit mode */
    mockEditing: boolean,
    /** {@link ToDo.description | description} of a toDo */
    value: string
};

/** renders the description of a toDo. If the node is in mock-edit mode then an input field is rendered to allow for updating */
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

    /** ag-Grid cell renderer lifecycle hook. 
     * updates {@link DescriptionRenderer.mockEditing} when the node is refreshed */
    public refresh(): boolean {
        this.setState({ mockEditing: this.context.mockEditingId === this.props.node.id });
        return true;
    }

    /** adds listeners to the custom 'commitChanges' and 'cancelChanges' ag-Grid events.
     * Also sets the input value to the toDos description.
     */
    public componentDidMount(): void {
        this.props.api.addEventListener('commitChanges', this.commitChanges);
        this.props.api.addEventListener('cancelChanges', this.cancelChanges);

        this.setState({
            value: this.props.getValue(),
        });
    }

    /** removes custom 'commitChanges' and 'cancelChanges' ag-Grid event listeners before dismounting */
    public componentWillUnmount(): void {
        this.props.api.removeEventListener('commitChanges', this.commitChanges);
        this.props.api.removeEventListener('cancelChanges', this.cancelChanges);
    }

    /** focuses on input field after the node enters mock-edit mode */
    public componentDidUpdate(): void {
        if (this.state.mockEditing) {
            this.inputRef.current!.focus();
        }
    }

    /** sets the toDo's description to the input field's value */
    private commitChanges = (): void => {
        if (this.state.mockEditing) {
            this.props.node.setDataValue(this.props.column.getColId(), this.state.value);
        }
    }

    /** resets the input fields value back to its original value (the toDo's description) */
    private cancelChanges = (): void => {
        if (this.state.mockEditing) {
            this.setState({ value: this.props.getValue() });
        }
    }

    /** updates {@link DescriptionRendererState.value} */
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