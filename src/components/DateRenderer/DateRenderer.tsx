
import React from 'react';
import { format } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { ICellRenderer, ICellRendererParams } from 'ag-grid-community';
import * as UTILS from '../../utils';
import './DateRenderer.scss';

import { MockEditingContext, IMockEditingContext } from '../../context/MockEditingContext';

interface DateRendererProps extends ICellRendererParams { }

interface DateRendererState {
    selectedDate: Date,
    mockEditing: boolean
}

export default class DateRenderer extends React.Component<DateRendererProps, DateRendererState> implements ICellRenderer {
    state: DateRendererState;

    static contextType: React.Context<IMockEditingContext> = MockEditingContext;

    public constructor(props: DateRendererProps) {
        super(props);
        let selectedDate = null;
        this.state = {
            selectedDate: selectedDate,
            mockEditing: false,
        }
    }


    public refresh(): boolean {
        const mockEditing: boolean = this.context.mockEditingId === this.props.node.id;
        this.setState({ mockEditing });
        return true;
    }

    public componentDidMount(): void {
        this.props.api.addEventListener('commitChanges', this.commitChanges);
        this.props.api.addEventListener('cancelChanges', this.cancelChanges);

        if (this.props.getValue()) {
            const selectedDate: Date = UTILS.convertToDate(this.props.getValue());
            this.setState({ selectedDate });
        }
    }

    public componentWillUnmount(): void {
        this.props.api.removeEventListener('commitChanges', this.commitChanges);
        this.props.api.removeEventListener('cancelChanges', this.cancelChanges);
    }

    private commitChanges = (): void => {
        if (this.state.mockEditing) {
            const dateValue: string = this.state.selectedDate ? format(this.state.selectedDate, 'dd/MM/yyyy') : null;
            this.props.node.setDataValue('deadline', dateValue);
        }
    }

    private cancelChanges = (): void => {
        if (this.state.mockEditing) {
            const dateBeforeMockEditing: Date = this.props.getValue() ? UTILS.convertToDate(this.props.getValue()) : null;
            this.setState({ selectedDate: dateBeforeMockEditing });
        }
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
                    className={this.props.node.isSelected() && !this.state.mockEditing ? "my-datepicker strike" : 'my-datepicker'}
                    style={{ background: this.state.mockEditing ? this.props.node.isSelected() ? '#D5F1D1' : 'whitesmoke' : null }}
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    disabled={!this.state.mockEditing}
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