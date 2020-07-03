
import React, { Component } from 'react';
import { format, getDate } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { ICellRenderer, GridApi, RowNode } from 'ag-grid-community';
import './DateRenderer.scss';


function convertToDate(str) {
    const [_, day, month, year] = str.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    return new Date(+year, +month - 1, +day);
}

interface DateRendererProps {
    api: GridApi,
    node: RowNode,
    value: string,
    getEditingId: () => string,
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


    refresh = () => {
        this.setState({ editing: this.props.getEditingId() === this.props.node.id });
        return true;
    }

    componentWillMount = () => {
        if (this.props.value) {
            this.setState({ selectedDate: convertToDate(this.props.value) })
        }
    }

    componentDidMount = () => {
        this.props.api.addEventListener('commitChanges', this.commitChanges);
        this.props.api.addEventListener('cancelChanges', this.cancelChanges);
    }

    componentWillUnmount = () => {
        this.props.api.removeEventListener('commitChanges', this.commitChanges);
        this.props.api.removeEventListener('cancelChanges', this.cancelChanges);
    }

    commitChanges = () => {
        if (this.state.editing) {
            let dateBeforeEditing = this.props.value ? convertToDate(this.props.value) : null;
            this.setState({ selectedDate: dateBeforeEditing });
        }
    }

    cancelChanges = () => {
        if (this.state.editing) {
            let dateValue = this.state.selectedDate ? format(this.state.selectedDate, 'dd/MM/yyyy') : null;
            this.props.node.setDataValue('deadline', dateValue);
        }
    }

    handleDateChange = (d: Date | 'Invalid Date') => {
        if (d === 'Invalid Date') {
            return;
        }
        d.setHours(0, 0, 0, 0);
        this.setState({
            selectedDate: d
        });
    }

    render() {
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