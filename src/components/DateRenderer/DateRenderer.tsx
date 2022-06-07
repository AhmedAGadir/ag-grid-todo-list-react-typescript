
import React from 'react';
import { format } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { ICellRendererParams } from 'ag-grid-community';
import WithMockCellEditor, { WithMockCellEditorProps } from '../../HOC/WithMockCellEditor';
import { IMockCellEditor } from '../../interfaces/mockCellEditor';
import * as UTILS from '../../utils';
import './DateRenderer.scss';

interface DateRendererProps extends ICellRendererParams, WithMockCellEditorProps { }

interface DateRendererState {
    /** deadline for the toDo */
    selectedDate: Date,
}

/** renders the deadline of a toDo. If the node is in mock-edit mode then a third-party date-picker is rendered to allow for updating */
class DateRenderer extends React.Component<DateRendererProps, DateRendererState> implements IMockCellEditor {
    state: DateRendererState;

    public constructor(props: DateRendererProps) {
        super(props);
        let selectedDate = null;
        this.state = {
            selectedDate: selectedDate,
        }
    }

    /** overridden in {@link WithMockCellEditor} */
    public refresh(): boolean {
        throw new Error('DateRenderer not wrapped with WithMockCellEditor');
    }

    public componentDidMount(): void {
        if (this.props.getValue()) {
            const selectedDate: Date = UTILS.convertToDate(this.props.getValue());
            this.setState({ selectedDate });
        }
    }

    public getValue(): [any, any] {
        const field: string = this.props.column.getColId();
        const dateValue: string = this.state.selectedDate ? format(this.state.selectedDate, 'dd/MM/yyyy') : null;
        return [field, dateValue];
    }

    public reset(): void {
        const dateBeforeMockEditing: Date = this.props.getValue() ? UTILS.convertToDate(this.props.getValue()) : null;
        this.setState({ selectedDate: dateBeforeMockEditing });
    }

    private handleDateChange = (d: Date | null) => {
        if (!UTILS.isValidDate(d)) {
            return;
        }
        d.setHours(0, 0, 0, 0);
        this.setState({
            selectedDate: d
        });
    }

    public render(): React.ReactElement {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <KeyboardDatePicker
                    className={this.props.node.isSelected() && !this.props.isMockEditing ? "my-datepicker strike" : 'my-datepicker'}
                    style={{ background: this.props.isMockEditing ? this.props.node.isSelected() ? '#D5F1D1' : 'whitesmoke' : null }}
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    disabled={!this.props.isMockEditing}
                    id={`date-picker-dialog-${this.props.node.id}`}
                    format="dd/MM/yyyy"
                    placeholder={'No deadline'}
                    margin="normal"
                    disableToolbar
                />
            </MuiPickersUtilsProvider>
        )
    }
}

export default WithMockCellEditor(DateRenderer);
