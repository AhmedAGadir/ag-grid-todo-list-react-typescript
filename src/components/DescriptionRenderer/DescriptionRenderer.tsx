import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import './DescriptionRenderer.scss';

import { MockEditingContext, IMockEditingContext } from '../../context/MockEditingContext';
import { IMockCellEditor } from '../../interfaces/mockCellEditor';

interface DescriptionRendererProps extends ICellRendererParams { };

interface DescriptionRendererState {
    /** true if the node is in mock-edit mode */
    mockEditing: boolean,
    /** {@link ToDo.description | description} of a toDo */
    value: string
};

/** renders the description of a toDo. If the node is in mock-edit mode then an input field is rendered to allow for updating */
export default class DescriptionRenderer extends React.Component<DescriptionRendererProps, DescriptionRendererState> implements IMockCellEditor {
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
        this.setState({
            value: this.props.getValue(),
        });
    }

    public componentDidUpdate(): void {
        if (this.state.mockEditing) {
            this.inputRef.current!.focus();
        }
    }

    public getValue(): [string, any] {
        return [this.props.column.getColId(), this.state.value];
    }

    public reset(): void {
        console.log('resetting', this.props.getValue());
        this.setState({ value: this.props.getValue() });
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