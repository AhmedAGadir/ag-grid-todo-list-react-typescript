
import React, { Component } from 'react';
import { format } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { ICellRenderer, GridApi, RowNode } from 'ag-grid-community';
import './DateRenderer.scss';
import { IGetEditingId } from '../../App';


function convertToDate(dateString: string) {
    const [_, day, month, year] = dateString.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    return new Date(+year, +month - 1, +day);
}

function isValidDate(d: Date): boolean {
    return d instanceof Date && !isNaN(d as any);
}

interface DateRendererProps {
    api: GridApi,
    node: RowNode,
    value: string,
    getEditingId: IGetEditingId,
    getValue: () => any
}

interface DateRendererState {
    selectedDate: Date,
    editing: boolean
}

export default class DateRenderer extends Component<DateRendererProps, DateRendererState> implements ICellRenderer {
    state: DateRendererState;

    constructor(props: DateRendererProps) {
        super(props);
        let selectedDate = null;
        this.state = {
            selectedDate: selectedDate,
            editing: false,
        }
    }


    refresh(): boolean {
        const editing: boolean = this.props.getEditingId() === this.props.node.id;
        this.setState({ editing });
        return true;
    }

    componentDidMount(): void {
        this.props.api.addEventListener('commitChanges', this.commitChanges);
        this.props.api.addEventListener('cancelChanges', this.cancelChanges);

        if (this.props.getValue()) {
            const selectedDate: Date = convertToDate(this.props.getValue());
            this.setState({ selectedDate });
        }
    }

    componentWillUnmount(): void {
        this.props.api.removeEventListener('commitChanges', this.commitChanges);
        this.props.api.removeEventListener('cancelChanges', this.cancelChanges);
    }

    commitChanges = (): void => {
        if (this.state.editing) {
            const dateValue: string = this.state.selectedDate ? format(this.state.selectedDate, 'dd/MM/yyyy') : null;
            this.props.node.setDataValue('deadline', dateValue);
        }
    }

    cancelChanges = (): void => {
        if (this.state.editing) {
            const dateBeforeEditing: Date = this.props.getValue() ? convertToDate(this.props.getValue()) : null;
            this.setState({ selectedDate: dateBeforeEditing });
        }
    }

    handleDateChange = (d: Date | null) => {
        if (!isValidDate(d)) {
            return;
        }
        d.setHours(0, 0, 0, 0);
        this.setState({
            selectedDate: d
        });
    }

    render(): React.ReactElement {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <KeyboardDatePicker
                    className={this.props.node.isSelected() && !this.state.editing ? "my-datepicker strike" : 'my-datepicker'}
                    style={{ background: this.state.editing ? this.props.node.isSelected() ? '#D5F1D1' : 'whitesmoke' : null }}
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    disabled={!this.state.editing}
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