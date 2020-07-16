import React from 'react';
import { ICellRendererParams, ICellRenderer } from 'ag-grid-community';
// import WithMockCellEditor from '../../HOC/WithMockCellEditor';
import WithMockCellEditor from '../../HOC/WithMockCellEditor';
import { IMockCellEditor } from '../../interfaces/mockCellEditor';
import './DescriptionRenderer.scss';
import { WithMockCellRendererProps } from '../../HOC/WithMockCellRenderer';

// interface DescriptionRendererProps extends ICellRendererParams, WithMockCellEditorProps { };
interface DescriptionRendererProps extends ICellRendererParams, WithMockCellRendererProps { };

interface DescriptionRendererState {
    /** {@link ToDo.description | description} of a toDo */
    value: string
};

/** renders the description of a toDo. If the node is in mock-edit mode then an input field is rendered to allow for updating */
class DescriptionRenderer extends React.Component<DescriptionRendererProps, DescriptionRendererState> implements IMockCellEditor, ICellRenderer {
    state: DescriptionRendererState;
    private inputRef: React.RefObject<HTMLInputElement>;

    public constructor(props: DescriptionRendererProps) {
        super(props);
        console.log('constructor', this.props.data.description);
        this.state = {
            value: ''
        };
        this.inputRef = React.createRef<HTMLInputElement>();
    }

    // OVERRIDDEN IN WRAPPER 
    public refresh(): boolean {
        return true;
    }

    public componentDidMount(): void {
        this.setState({
            value: this.props.getValue(),
        });
    }

    public componentDidUpdate(): void {
        if (this.props.mockEditing) {
            this.inputRef.current!.focus();
        }
    }

    public getValue(): [string, any] {
        return [this.props.column.getColId(), this.state.value];
    }

    public reset(): void {
        this.setState({ value: this.props.getValue() });
    }

    /** updates {@link DescriptionRendererState.value} */
    private inputChangedHandler: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ value: event.target.value });
    }

    public render(): React.ReactElement {
        let component: React.ReactElement;
        const isSelected: boolean = this.props.node.isSelected();

        if (this.props.mockEditing) {
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
            <div className="todo-wrapper">
                {component}
            </div>

        );
    }
}

export default WithMockCellEditor(DescriptionRenderer);