
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
    getCurrentlyEditingId: () => string,
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
        return false;
    }

    componentWillMount = () => {
        if (this.props.value) {
            this.setState({ selectedDate: convertToDate(this.props.value) })
        }
    }

    componentDidMount = () => {
        this.props.api.addEventListener('commitChanges', this.commitChanges);
        this.props.api.addEventListener('cancelChanges', this.cancelChanges);

        const editingId = this.props.getCurrentlyEditingId();
        this.setState({ editing: editingId === this.props.node.id });
    }

    componentWillUnmount = () => {
        this.props.api.removeEventListener('commitChanges', this.commitChanges);
        this.props.api.removeEventListener('cancelChanges', this.cancelChanges);
    }

    commitChanges = params => {
        if (params.id === this.props.node.id) {
            this.stopEditing(true);
        }
    }

    cancelChanges = params => {
        if (params.id === this.props.node.id) {
            this.stopEditing(false);
        }
    }

    stopEditing = bool => {
        this.setState({ editing: false }, () => {
            if (bool) {
                let dateValue = this.state.selectedDate ? format(this.state.selectedDate, 'dd/MM/yyyy') : null;
                this.props.node.setDataValue('deadline', dateValue);
            } else {
                let prevValue = this.props.value;
                this.setState({ selectedDate: prevValue ? convertToDate(prevValue) : null });
            }
        })
    }

    handleDateChange = (d: Date) => {
        if (d) {
            d.setHours(0, 0, 0, 0);
        }
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