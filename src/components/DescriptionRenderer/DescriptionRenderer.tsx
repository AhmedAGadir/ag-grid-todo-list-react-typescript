import React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import WithMockCellEditor, { WithMockCellEditorProps } from '../../HOC/WithMockCellEditor';
import { IMockCellEditor } from '../../interfaces/mockCellEditor';
import './DescriptionRenderer.scss';

interface DescriptionRendererProps extends ICellRendererParams, WithMockCellEditorProps { };

interface DescriptionRendererState {
    /** {@link ToDo.description | description} of a toDo */
    value: string
};

/** renders the description of a toDo. If the node is in mock-edit mode then an input field is rendered to allow for updating */
class DescriptionRenderer extends React.Component<DescriptionRendererProps, DescriptionRendererState> implements IMockCellEditor {
    state: DescriptionRendererState;
    private inputRef: React.RefObject<HTMLInputElement>;

    public constructor(props: DescriptionRendererProps) {
        super(props);
        this.state = {
            value: ''
        };
        this.inputRef = React.createRef<HTMLInputElement>();
    }

    /** overridden in {@link WithMockCellEditor} */
    public refresh(): boolean {
        throw new Error('DescriptionRenderer not wrapped with WithMockCellEditor');
        return true;
    }

    public componentDidMount(): void {
        this.setState({
            value: this.props.getValue(),
        });
    }

    public componentDidUpdate(): void {
        if (this.props.isMockEditing) {
            this.inputRef.current!.focus();
        }
    }

    public getValue(): [any, any] {
        const field = this.props.column.getColId();
        return [field, this.state.value];
    }

    public reset(): void {
        this.setState({ value: this.props.getValue() });
    }

    private inputChangedHandler: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ value: event.target.value });
    }

    public render(): React.ReactElement {
        let component: React.ReactElement;
        const isSelected: boolean = this.props.node.isSelected();

        if (this.props.isMockEditing) {
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