
import React, { Component } from 'react';
import { format } from 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { ICellRenderer } from 'ag-grid-community';
import './DateRenderer.css';

interface DateRendererProps {
    api: any,
    node: any,
    value: any,
    getCurrentlyEditingId: any
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
        if (this.props.value) {
            const [_, day, month, year] = this.props.value.match(/(\d{2})\/(\d{2})\/(\d{4})/);
            selectedDate = new Date(year, month - 1, day);
        }
        this.state = {
            selectedDate: selectedDate,
            editing: false,
        }
    }

    componentDidMount = () => {

        this.props.api.addEventListener('saveChanges', params => {
            if (params.id === this.props.node.id) {
                this.finishEdit(true);
            }
        });

        this.props.api.addEventListener('cancelChanges', params => {
            if (params.id === this.props.node.id) {
                this.finishEdit(false);
            }
        });


        if (!this.props.value) {
            let editingId = this.props.getCurrentlyEditingId();
            this.setState({
                editing: editingId === this.props.node.id
            });
            return;
        }
        const [_, day, month, year] = this.props.value.match(/(\d{2})\/(\d{2})\/(\d{4})/);
        let selectedDate = new Date(year, month - 1, day);

        let editingId = this.props.getCurrentlyEditingId();

        this.setState({
            selectedDate,
            editing: editingId === this.props.node.id
        });
    }

    handleDateChange = d => {
        if (d) {
            d.setHours(0, 0, 0, 0);
        }
        this.setState({
            selectedDate: d
        });
    }

    finishEdit = bool => {
        this.setState({ editing: false }, () => {
            if (bool) {
                let dateValue = this.state.selectedDate ? format(this.state.selectedDate, 'dd/MM/yyyy') : null;
                this.props.node.setDataValue('deadline', dateValue);
            } else {
                let prevDate = null;
                let dateValue = null
                if (this.props.value) {
                    const [_, day, month, year] = this.props.value.match(/(\d{2})\/(\d{2})\/(\d{4})/);
                    prevDate = new Date(year, month - 1, day);
                    dateValue = format(prevDate, 'dd/MM/yyyy')
                }
                this.setState({ selectedDate: prevDate }, () => {
                    this.props.node.setDataValue('deadline', dateValue);
                })
            }
        })
    }

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <KeyboardDatePicker
                    className={this.props.node.selected && !this.state.editing ? "strike" : ''}
                    margin="normal"
                    id={`date-picker-dialog-${this.props.node.id}`}
                    format="dd/MM/yyyy"
                    value={this.state.selectedDate}
                    onChange={this.handleDateChange}
                    // variant="inline"
                    disableToolbar
                    placeholder={'No deadline'}
                    style={{
                        // color: new Date() > this.state.selectedDate ? 'limegreen' : 'red',
                        // height: 35,
                        background: this.state.editing ? this.props.node.selected ? '#D5F1D1' : 'whitesmoke' : null,
                        // opacity: this.props.node.selected && this.state.editing ? 0.6 : 1,
                        position: 'relative',
                        bottom: 1,
                        // border: this.state.editing ? '2px solid cyan' : null,
                        borderRadius: 5,
                        // textDecoration: this.props.node.selected ? 'line-through' : 'none',
                    }}
                    disabled={!this.state.editing}
                />
            </MuiPickersUtilsProvider>
        )
    }
}
  // })