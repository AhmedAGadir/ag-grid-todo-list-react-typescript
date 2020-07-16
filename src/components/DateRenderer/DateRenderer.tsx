
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

class DateRenderer extends React.Component<DateRendererProps, DateRendererState> implements IMockCellEditor {
    state: DateRendererState;

    public constructor(props: DateRendererProps) {
        super(props);
        let selectedDate = null;
        this.state = {
            selectedDate: selectedDate,
        }
    }

    // OVERRIDDEN 
    public refresh(): boolean {
        return true;
    }

    public componentDidMount(): void {
        if (this.props.getValue()) {
            const selectedDate: Date = UTILS.convertToDate(this.props.getValue());
            this.setState({ selectedDate });
        }
    }

    public getValue(): [string, string] {
        const dateValue: string = this.state.selectedDate ? format(this.state.selectedDate, 'dd/MM/yyyy') : null;
        return [this.props.column.getColId(), dateValue];
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
                    className={this.props.node.isSelected() && !this.props.mockEditing ? "my-datepicker strike" : 'my-datepicker'}
                    style={{ background: this.props.mockEditing ? this.props.node.isSelected() ? '#D5F1D1' : 'whitesmoke' : null }}
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    disabled={!this.props.mockEditing}
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