// tags
// typescript - <> and interfaces etc and more - study
// modularise 

// handle key presses in date 
// add ag-grid interfaces, and loads of typescript goodies,
// read typescript

// tooltip for the dates saying you have X days remaining 
// account for enter
// cleanup
// hover 
// save / cancel edits 
// stop other dates from editing
// instead of using events, use the setCurrentlyEditingId stuff and refreshing 
// checkboxes shouldnt share a renderer with save/cancel - they should be their own column

import React, { Component, createRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'normalize.css';
import './App.scss'

import TaskAdder from './components/TaskAdder.tsx';

import tasks, { createNewTask } from './data.ts';

import DateRenderer from './components/DateRenderer.tsx';
import TaskRenderer from './components/TaskRenderer.tsx';
import CheckboxRenderer from './components/CheckboxRenderer.tsx';
import ActionsRenderer from './components/ActionsRenderer.tsx';

import { differenceInDays } from 'date-fns';

import { ColDef } from 'ag-grid-community'

interface AppState {
  currentlyEditingId: number,
  columnDefs: ColDef[],
  defaultColDef: ColDef,
  rowData: any[],
  frameworkComponents: {
    [propName: string]: any
  }
}

class App extends Component<{}, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      currentlyEditingId: null,
      columnDefs: [
        {
          headerName: 'Complete',
          cellRenderer: 'checkboxRenderer',
          pinned: 'left',
          width: 50,
        },
        {
          headerName: 'Task',
          field: 'task',
          cellRenderer: 'taskRenderer',
          rowDrag: true,
          flex: 1,
        },
        {
          headerName: 'deadline',
          field: 'deadline',
          cellRenderer: 'dateRenderer',
          tooltipValueGetter: this.tooltipValueGetter,
          width: 170,
        },
        {
          headerName: 'Actions',
          cellRenderer: 'actionsRenderer',
          cellRendererParams: {
            deleteToDo: this.deleteToDo,
            setCurrentlyEditingId: this.setCurrentlyEditingId,
            getCurrentlyEditingId: this.getCurrentlyEditingId
          },
          width: 90,
        },
      ],
      rowData: tasks,
      defaultColDef: {
        cellRendererParams: {
          setCurrentlyEditingId: this.setCurrentlyEditingId,
          getCurrentlyEditingId: this.getCurrentlyEditingId
        }
      },
      frameworkComponents: {
        taskRenderer: TaskRenderer,
        dateRenderer: DateRenderer,
        checkboxRenderer: CheckboxRenderer,
        actionsRenderer: ActionsRenderer
      },
    }
  }

  onFirstDataRendered = params => {
    setTimeout(() => {
      let node0 = params.api.getRowNode('0');
      node0.setSelected(true);
      params.api.refreshCells({ rowNodes: [node0], force: true })
    }, 500)
  }

  setCurrentlyEditingId = id => {
    this.setState({ currentlyEditingId: id });
  }

  getCurrentlyEditingId = () => {
    return this.state.currentlyEditingId;
  }

  tooltipValueGetter = params => {
    if (!params.value) {
      return 'no deadline';
    }
    if (params.node.selected) {
      return 'completed'
    }
    const [_, day, month, year] = params.value.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    let dateValue = new Date(year, month - 1, day);
    let difference = differenceInDays(dateValue, new Date());
    return difference > 0 ?
      `${difference} days remaining`
      : `${-difference} days overdue`;
  }

  addTaskHandler = (description) => {
    let updatedRowData = this.state.rowData.map(row => ({ ...row }));
    let newTask = createNewTask(description);
    updatedRowData.push(newTask);

    this.setState({ rowData: updatedRowData });
  }

  deleteToDo = id => {
    let rowData = this.state.rowData.filter(row => row.id !== id);
    this.setState({ rowData });
  }

  render() {
    return (
      <div style={{ width: 650, position: 'absolute', left: '50%', top: '30vh', transform: 'translateX(-50%)' }
      }>
        <TaskAdder addTask={this.addTaskHandler} />
        < div
          className="ag-theme-alpine"
          style={{
            height: '100%',
          }}
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            defaultColDef={this.state.defaultColDef}
            rowData={this.state.rowData}
            frameworkComponents={this.state.frameworkComponents}
            immutableData
            getRowNodeId={data => data.id}
            domLayout="autoHeight"
            headerHeight={0}
            rowHeight={65}
            rowDragManaged
            animateRows
            popupParent={document.body}
            rowSelection="multiple"
            suppressRowClickSelection
            onFirstDataRendered={this.onFirstDataRendered}
          >
          </AgGridReact>
        </div>
        < img src={require("./ag-grid-logo.png")} style={{ width: 200, margin: '40px auto 0', display: 'block' }} />
      </div>
    );
  }
}

export default App;