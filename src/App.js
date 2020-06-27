import React, { Component } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-enterprise';
import 'normalize.css';

import './App.scss'


// import { useState, forwardRef, useImperativeHandle } from "react";
import DateFnsUtils from '@date-io/date-fns';
import { format, differenceInDays } from 'date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';



// tags
// typescript - <> and interfaces etc and more - study
// modularise 





// tooltip for the dates saying you have X days remaining 
// account for enter
// cleanup
// hover 
// save / cancel edits 
// stop other dates from editing
// instead of using events, use the letgridknow stuff and refreshing 
// checkboxes shouldnt share a renderer with save/cancel - they should be their own column



class DateRenderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: null,
      editing: false
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
    }, () => {
      // this.props.node.setDataValue('date', format(this.state.selectedDate, 'dd/MM/yyyy'));
    });
  }

  finishEdit = bool => {
    this.setState({ editing: false }, () => {
      if (bool) {
        let dateValue = this.state.selectedDate ? format(this.state.selectedDate, 'dd/MM/yyyy') : null;
        this.props.node.setDataValue('date', dateValue);
      } else {
        let selectedDate = null;
        let dateValue = null
        if (this.props.value) {
          const [_, day, month, year] = this.props.value.match(/(\d{2})\/(\d{2})\/(\d{4})/);
          selectedDate = new Date(year, month - 1, day);
          dateValue = format(this.state.selectedDate, 'dd/MM/yyyy')
        }
        this.setState({ selectedDate }, () => {
          this.props.node.setDataValue('date', dateValue);
        })
      }
    })
  }

  // refresh(params) {
  //   // debugger;
  // }

  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          id={`date-picker-dialog-${this.props.node.id}`}
          format="dd/MM/yyyy"
          value={this.state.selectedDate}
          onChange={this.handleDateChange}
          // variant="inline"
          disableToolbar
          placeholder={'Add deadline'}
          style={{
            // color: new Date() > this.state.selectedDate ? 'limegreen' : 'red',
            // height: 35,
            background: this.state.editing ? 'whitesmoke' : null,
            opacity: this.props.node.selected && this.state.editing ? 0.6 : 1,
            position: 'relative',
            bottom: 1,
            // border: this.state.editing ? '2px solid cyan' : null,
            borderRadius: 5,
          }}
          disabled={!this.state.editing}
        />
      </MuiPickersUtilsProvider>
    )
  }
}
// })



class ToDoRenderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      editingVal: null
    };
    this.taskInputRef = React.createRef()
  }

  componentDidMount = () => {

    let editingId = this.props.getCurrentlyEditingId();

    this.setState({
      editingVal: this.props.value,
      editing: editingId === this.props.node.id
    });

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
  }

  destroy = () => {

  }

  componentDidUpdate() {
    if (this.state.editing) {
      this.taskInputRef.current.focus();
    }
  }

  // toggleEdit = () => {
  //   if (this.props.getCurrentlyEditingId() !== null) {
  //     alert('You can only edit one task at a time');
  //     return;
  //   }
  //   this.setState(prevState => ({
  //     editing: !prevState.editing
  //   }), () => {
  //     this.props.letGridKnow(this.state.editing ? this.props.data.id : null);
  //     this.props.api.refreshCells({ rowNodes: [this.props.node], force: true });
  //     if (this.state.editing) {
  //       this.taskInputRef.current.focus();
  //       // this.props.api.dispatchEvent({ type: 'customRowEditingStarted', id: this.props.node.id });
  //     } else {
  //       // this.props.api.dispatchEvent({ type: 'customRowEditingStopped', id: this.props.node.id });
  //     }
  //   });
  // }

  finishEdit = (bool) => {
    if (bool) {
      this.props.node.setDataValue(this.props.column.colId, this.state.editingVal);
    }
    this.setState({ editing: false, editingVal: this.props.value })
    // this.props.letGridKnow(null)
  }

  render() {
    let component = null;

    if (this.state.editing) {
      component = (
        <input
          ref={this.taskInputRef}
          value={this.state.editingVal}
          onChange={e => this.setState({ editingVal: e.target.value })}
          onKeyPress={this.onKeyPressHandler}
          style={{
            width: '100%',
            height: 30,
            // color: 'deppink',
            // fontWeight: 400,
            background: 'whitesmoke',
            // textDecoration: this.props.node.selected ? 'line-through' : 'none',
            opacity: this.props.node.selected ? 0.6 : 1,
            // border: '2px solid cyan',
            borderRadius: 5,

          }} />
      )
    } else {
      component =
        // <div
        // style={{
        // textDecoration: this.props.node.selected ? 'line-through' : 'none',
        // color: this.props.node.selected ? 'darkgrey' : 'black'
        // }}
        // >
        <span className={this.props.node.selected ? "strike" : ''}>{this.props.value}</span>
      // </div>
    }

    return (
      <div className="todowrapper">
        {component}
      </div>
    );
  }
}

class CompletedRenderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: null,
    }
  }

  componentDidMount = () => {
    this.setState({ completed: this.props.node.selected });
  }



  setCompleted = bool => {
    this.setState({ completed: bool }, () => {
      this.props.node.setSelected(bool);
      // this.props.node.setDataValue(this.props.column.colId, bool);
      // this.props.api.redrawRows({ rowNodes: [this.props.node], force: true });
      this.props.api.refreshCells({ rowNodes: [this.props.node], force: true });
    })
  }

  render() {
    let component;
    if (this.state.completed) {
      component = (
        <>
          {/* <span className="edit-icon" onClick={() => null}><i className="far fa-edit"></i></span> */}
          <span className="completed-icon" onClick={() => this.setCompleted(false)}><i className="far fa-check-square"></i></span>

        </>
      )
    } else {
      component = (
        <>
          {/* <span className="edit-icon" onClick={() => null}><i className="far fa-edit"></i></span> */}
          <span className="uncompleted-icon" onClick={() => this.setCompleted(true)}><i className="far fa-square"></i></span>
        </>
      )
    }

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        {component}
      </div>
    )
  }
}


class ActionsRenderer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      visible: false
    }
  }

  refresh(params) {
    return true;
  }

  componentDidMount = () => {
    let currentlyEditingId = this.props.getCurrentlyEditingId();
    this.setState({ editing: currentlyEditingId === this.props.node.id })


    this.props.api.addEventListener('cellMouseOver', params => {
      if (params.node.id === this.props.node.id) {
        this.setState({ visible: true });
      }
    })

    this.props.api.addEventListener('cellMouseOut', params => {
      if (params.node.id === this.props.node.id) {
        if (this.state.editing) {
          return;
        }
        this.setState({ visible: false });
      }
    })
  }

  saveChanges = () => {
    this.setState({ editing: false }, () => {
      this.props.letGridKnow(null);
      this.props.api.dispatchEvent({ type: 'saveChanges', id: this.props.node.id });
    })
  }

  cancelChanges = () => {
    this.setState({ editing: false }, () => {
      this.props.letGridKnow(null);
      this.props.api.dispatchEvent({ type: 'cancelChanges', id: this.props.node.id });
    })
  }

  startEditing = () => {
    if (this.props.getCurrentlyEditingId() !== null) {
      alert('You can only edit one task at a time');
      return;
    }

    this.setState({ editing: true }, () => {
      this.props.letGridKnow(this.props.node.id);
      this.props.api.refreshCells({ rowNodes: [this.props.node], force: true })
    })
  }

  deleteToDo = () => {
    if (window.confirm('Would you like to delete this task?')) {
      this.props.deleteToDo(this.props.node.id)
    }
  }

  render() {
    if (!this.state.visible) {
      return null;
    }

    let component;

    if (this.state.editing) {
      component = (
        <>
          <span className="save-icon" onClick={this.saveChanges}><i className="far fa-save"></i></span>
          <span className="cancel-icon" onClick={this.cancelChanges}><i className="fas fa-undo"></i></span>
        </>
      )
    } else {
      component = (
        <>
          <span className="edit-icon" onClick={this.startEditing}><i className="fas fa-pen"></i></span>
          <span className="delete-icon" onClick={this.deleteToDo}><i className="fas fa-trash"></i></span>
        </>
      )
    }


    return (
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%' }}>
        {component}
      </div>
    )
  }
}

// class DeleteRenderer extends Component {
//   constructor(props) {
//     super(props);
//   }

//   componentDidMount = () => {
//   }

//   deleteToDo = () => {
//     if (window.confirm('Would you like to delete this task?')) {
//       this.props.deleteToDo(this.props.node.id)
//     }
//   }

//   render() {
//     return (
//       <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%' }}>
//         <span className="delete-icon" onClick={this.deleteToDo}><i className="fas fa-trash"></i></span>
//       </div >
//     )
//   }
// }



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      idSeq: 3,
      columnDefs: [
        {
          rowDrag: true,
          headerName: 'Description',
          field: 'description',
          suppressMenu: true,
          flex: 3,
          cellRenderer: 'toDoRenderer',
          cellRendererParams: {
            letGridKnow: id => {
              this.setState({ currentlyEditingId: id })
            },
            getCurrentlyEditingId: () => {
              return this.state.currentlyEditingId
            }
          }
        },
        {
          headerName: 'Deadline',
          field: 'date',
          hide: true,
          suppressMenu: true,
          width: 170,
          cellRenderer: 'dateRenderer',
          cellRendererParams: {
            letGridKnow: id => {
              this.setState({ currentlyEditingId: id })
            },
            getCurrentlyEditingId: () => {
              return this.state.currentlyEditingId
            }
          },
          tooltipValueGetter: this.tooltipValueGetter,
        },
        {
          // pinned: 'right',
          headerName: 'actions',
          // hide: true,
          cellRenderer: 'actionsRenderer',
          cellRendererParams: {
            letGridKnow: id => {
              this.setState({ currentlyEditingId: id })
            },
            getCurrentlyEditingId: () => {
              return this.state.currentlyEditingId
            },
            deleteToDo: this.deleteToDo
          },
          width: 90,
        },
        {
          headerName: 'complete',
          suppressMenu: true,
          width: 50,
          cellRenderer: 'completedRenderer',
          pinned: 'left'
        },
        // {
        //   headerName: 'delete',
        //   // hide: true,
        //   cellRenderer: 'deleteRenderer',
        //   cellRendererParams: {
        //     deleteToDo: this.deleteToDo
        //   },
        //   width: 40,
        // },
      ],
      rowData: [
        { description: 'Go to Wano', id: 0, date: '11/07/2020' },
        { description: 'Defeat Kaido', id: 1, date: '19/11/2020' },
        { description: 'Find One Peice', id: 2, date: '23/04/2020' },
      ],
      frameworkComponents: {
        toDoRenderer: ToDoRenderer,
        dateRenderer: DateRenderer,
        completedRenderer: CompletedRenderer,
        // deleteRenderer: DeleteRenderer,
        actionsRenderer: ActionsRenderer
      },
      currentlyEditingId: null,
    }
    this.inputRef = React.createRef();
  }

  componentDidMount = () => {
    this.inputRef.current.focus();
  }


  tooltipValueGetter = params => {
    if (!params.value) {
      return;
    }
    const [_, day, month, year] = params.value.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    let dateValue = new Date(year, month - 1, day);

    let difference = differenceInDays(dateValue, new Date());
    // let color = difference > 0 ? 'limegreen' : 'red';
    return difference > 0 ?
      `${difference} days remaining`
      : `${-difference} days overdue`
      ;
  }

  addToDo = () => {
    if (!this.state.inputVal) {
      return;
    }
    let rowData = this.state.rowData.map(row => ({ ...row }));
    rowData.push({
      description: this.state.inputVal,
      id: this.state.idSeq,
      date: null,
      completed: false
    });
    this.setState(prevState => ({
      rowData,
      inputVal: '',
      idSeq: prevState.idSeq + 1
    }), () => {
    });
  }

  deleteToDo = id => {
    let rowData = this.state.rowData.filter(row => row.id !== id);
    this.setState({ rowData });
  }

  render() {
    return (
      <div style={{ width: 650, position: 'absolute', left: '50%', top: '30vh', transform: 'translateX(-50%)' }}>
        {/* <h1 style={{ color: 'white', fontSize: 50, fontFamily: 'Roboto', fontWeight: 400, textAlign: 'center' }}>To-Do List</h1> */}
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
              return data.id
            }}
            domLayout="autoHeight"
            headerHeight={0}
            rowHeight={65}
            // getRowStyle={params => {
            //   if (params.node.data.completed) {
            //     return { background: 'lightgreen' }
            //   } else {
            //     return { background: 'none' }
            //   }
            // }}
            rowDragManaged
            animateRows
            sideBar={{
              toolPanels: [{
                id: 'columns',
                labelDefault: '',
                labelKey: 'columns',
                iconKey: 'columns',
                toolPanel: 'agColumnsToolPanel',
                toolPanelParams: {
                  suppressRowGroups: true,
                  suppressValues: true,
                  suppressPivotMode: true,
                  suppressColumnFilter: true
                }
              }]
            }}
            // popupParent={document.body}
            rowSelection="multiple"
            suppressRowClickSelection
            onFirstDataRendered={params => {
              setTimeout(() => {
                let node0 = params.api.getRowNode(0);
                node0.setSelected(true);
                params.api.refreshCells({ rowNodes: [node0], force: true })
              }, 500)
            }}
          >
          </AgGridReact>
        </div>
        <img src={require("./ag-grid-logo.png")} style={{ width: 200, margin: '40px auto 0', display: 'block' }} />
      </div>
    );
  }
}

export default App;