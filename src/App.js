import React, { Component } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import 'normalize.css';

import './App.scss'


import { useState, forwardRef, useImperativeHandle } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { format } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';


class DateRenderer extends Component {
  //  forwardRef((props, ref) => {
  //   const [selectedDate, setSelectedDate] = useState(null);

  //   function handleDateChange(d) {
  //     if (d) {
  //       d.setHours(0, 0, 0, 0);
  //     }
  //     setSelectedDate(d);
  //   }

  //   useImperativeHandle(ref, () => {
  //     return {
  //       getValue: () => {
  //         let dateString = null;
  //         if (selectedDate) {
  //           dateString = format(selectedDate, 'dd/MM/yyyy');
  //         }
  //         return dateString;
  //       },
  //       isCancelAfterEnd: () => {
  //         return !selectedDate;
  //       },
  //       afterGuiAttached: () => {
  //         if (!props.value) {
  //           return;
  //         }
  //         const [_, day, month, year] = props.value.match(/(\d{2})\/(\d{2})\/(\d{4})/);
  //         let selectedDate = new Date(year, month - 1, day);
  //         setSelectedDate(selectedDate);
  //       }
  //     };
  //   });

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          style={{ width: '100%', margin: 0, padding: '6px 10px', }}
          margin="normal"
          id="date-picker-dialog"
          format="dd/MM/yyyy"
          // value={selectedDate}
          // onChange={handleDateChange}
          value={new Date()}
          variant="inline"
          disableToolbar
        // placeholder={'Enter ' + props.column.colId}
        />
      </MuiPickersUtilsProvider>
    )
  }
}
// })



class ToDoRenderer extends Component {
  constructor(props) {
    // console.log('[ToDoRenderer] Constructor')
    super(props);
    this.state = {
      editing: false,
      editingVal: null
    }
  }

  componentDidMount = () => {
    this.setState({
      editingVal: this.props.value
    })
  }

  // refresh = () => {
  //   console.log('refresh');
  //   return true;
  // }

  destroy = () => {

  }

  toggleEdit = () => {
    console.log(this.props.getCurrentlyEditingId())
    if (this.props.getCurrentlyEditingId() !== null) {
      alert('youre already editing');
      return;
    }
    this.setState(prevState => ({
      editing: !prevState.editing
    }), () => {
      console.log('letting grid know', this.state.editing, this.props.data.id)
      this.props.letGridKnow(this.state.editing ? this.props.data.id : null);
    });
  }

  finishEdit = (bool) => {
    if (bool) {
      this.props.node.setDataValue(this.props.column.colId, this.state.editingVal);
    }
    this.setState({ editing: false, editingVal: this.props.value })
    this.props.letGridKnow(null)
  }

  render() {
    let component = null;

    if (this.state.editing) {
      component = (
        <div>
          <input value={this.state.editingVal} onChange={e => this.setState({ editingVal: e.target.value })} />
          <button onClick={() => this.finishEdit(true)}>Save</button>
          <button onClick={() => this.finishEdit(false)}>Cancel</button>
        </div>
      )
    } else {
      component = <div
        style={{ textDecoration: this.props.data.completed ? 'line-through' : 'none' }}>{
          this.props.value}</div>
    }

    return (
      <div onDoubleClick={this.toggleEdit}>
        {component}
      </div>
    );
  }
}

class CompletedRenderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: null
    }
  }

  componentDidMount = () => {
    this.setState({ completed: this.props.value })
  }

  setCompleted = bool => {
    this.setState({ completed: bool }, () => {
      this.props.node.setDataValue(this.props.column.colId, bool);
      this.props.api.refreshCells({ rowNodes: [this.props.node], force: true })
    })
  }

  deleteToDo = () => {
    if (window.confirm('Are you sure youd like to delete this row?')) {
      this.props.deleteToDo(this.props.node.id)
    }
  }

  render() {
    let component;
    if (this.state.completed) {
      component = <button onClick={() => this.setCompleted(false)}>↶</button>
    } else {
      component = <button onClick={() => this.setCompleted(true)}>✓</button>
    }

    return (
      <div>
        {component}
        {/* {'  '} */}
        {/* <button onClick={this.deleteToDo}>🗑</button> */}
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      idSeq: 1,
      columnDefs: [
        {
          field: 'description',
          suppressMenu: true,
          flex: 3,
          cellRenderer: 'toDoRenderer',
          cellRendererParams: {
            letGridKnow: id => {
              console.log('letGridKnow', id)
              this.setState({ currentlyEditingId: id }, () => { console.log('this.state.currentlyEditingId', this.state.currentlyEditingId) })
            },
            getCurrentlyEditingId: () => {
              console.log('getCurrentlyEditingId invoked')
              return this.state.currentlyEditingId
            }
          }
        },
        {
          headerName: 'Due Date',
          field: 'date',
          suppressMenu: true,
          width: 200,
          cellRenderer: 'dateRenderer'
        },
        {
          headerName: '',
          field: 'completed',
          suppressMenu: true,
          width: 60,
          cellRenderer: 'completedRenderer',
          cellRendererParams: {
            deleteToDo: id => this.deleteToDo(id)
          }
        },
      ],
      rowData: [
        { description: 'Hello World!', id: 0, date: '11/07/20', completed: false },
        { description: 'World Hello!', id: 999, date: '23/04/20', completed: false },
        { description: 'Hello! Sudan', id: 987, date: '19/11/20', completed: true },
        { description: 'Goodbye Latin America Hello!', id: 599, date: '01/08/20', completed: false },
      ],
      frameworkComponents: {
        toDoRenderer: ToDoRenderer,
        completedRenderer: CompletedRenderer,
        dateRenderer: DateRenderer
      },
      currentlyEditingId: null,
    }
    this.inputRef = React.createRef();
  }

  componentDidMount = () => {
    this.inputRef.current.focus();
  }

  addToDo = () => {
    console.log('add to do')
    if (!this.state.inputVal) {
      return;
    }
    let rowData = this.state.rowData.map(row => ({ ...row }));
    console.log('adding a row with id', this.state.idSeq)
    rowData.push({
      description: this.state.inputVal,
      id: this.state.idSeq,
      date: '',
      completed: false
    });
    this.setState(prevState => ({
      rowData,
      inputVal: '',
      idSeq: prevState.idSeq + 1
    }), () => {
      console.log('idSeq is now', this.state.idSeq)
    });
  }

  deleteToDo = id => {
    let rowData = this.state.rowData.filter(row => row.id !== id);
    this.setState({ rowData });
  }

  render() {
    return (
      <div style={{ width: 600, position: 'absolute', left: '50%', top: 'calc(50% - 100px)', transform: 'translate(-50%, -50%)' }}>
        <form style={{ display: 'flex' }} onSubmit={e => e.preventDefault()}>
          <input
            ref={this.inputRef}
            className="to-do-input"
            value={this.state.inputVal}
            onChange={e => this.setState({ inputVal: e.target.value })}
            placeholder="Enter Task..." />
          <button type="submit"
            onClick={this.addToDo}>+</button>
        </form>
        <div
          className="ag-theme-alpine"
          style={{
            height: '100%',
            boxShadow: ''
          }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}
            frameworkComponents={this.state.frameworkComponents}
            immutableData
            getRowNodeId={data => {
              console.log('getting id for ', data)
              return data.id
            }}
            domLayout="autoHeight"
            headerHeight={0}
            rowHeight={65}>
          </AgGridReact>
        </div>
        <img src={require("./ag-grid-logo.png")} style={{ width: 200, margin: '40px auto 0', display: 'block' }} />
      </div>
    );
  }
}

export default App;