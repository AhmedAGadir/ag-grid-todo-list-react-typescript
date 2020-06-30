import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, FirstDataRenderedEvent } from 'ag-grid-community'
import 'ag-grid-enterprise';

import TaskAdder from './components/TaskAdder/TaskAdder.tsx';
import DateRenderer from './components/DateRenderer/DateRenderer.tsx';
import TaskRenderer from './components/TaskRenderer/TaskRenderer.tsx';
import CheckboxRenderer from './components/CheckboxRenderer/CheckboxRenderer.tsx';
import ActionsRenderer from './components/ActionsRenderer/ActionsRenderer.tsx';

import { differenceInDays } from 'date-fns';
import tasks, { createNewTask, task } from './data.ts';

import 'normalize.css';
import './App.scss'


interface AppState {
  currentlyEditingId: number,
  columnDefs: ColDef[],
  defaultColDef: ColDef,
  rowData: task[],
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
            deleteTask: this.deleteTask,
            setCurrentlyEditingId: this.setCurrentlyEditingId,
            getCurrentlyEditingId: this.getCurrentlyEditingId
          },
          width: 90,
        },
      ],
      defaultColDef: {
        cellRendererParams: {
          setCurrentlyEditingId: this.setCurrentlyEditingId,
          getCurrentlyEditingId: this.getCurrentlyEditingId
        }
      },
      rowData: tasks,
      frameworkComponents: {
        taskRenderer: TaskRenderer,
        dateRenderer: DateRenderer,
        checkboxRenderer: CheckboxRenderer,
        actionsRenderer: ActionsRenderer
      },
    }
  }

  onFirstDataRendered = (params: FirstDataRenderedEvent): void => {
    setTimeout(() => {
      let node0 = params.api.getRowNode('0');
      node0.setSelected(true);
      params.api.refreshCells({ rowNodes: [node0], force: true })
    }, 500);
  }

  tooltipValueGetter = (params): string => {
    if (!params.value) {
      return 'no deadline';
    }
    if (params.node.selected) {
      return 'completed';
    }
    // change the whole app to use MM/dd/yyyy; - here and daterenderer
    const [_, day, month, year] = params.value.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    let deadlineDate = new Date(year, month - 1, day);

    let difference = differenceInDays(deadlineDate, new Date());
    return difference > 0 ? `${difference} days remaining` : `${-difference} days overdue`;
  }

  setCurrentlyEditingId = (id: number): void => {
    this.setState({ currentlyEditingId: id });
  }

  getCurrentlyEditingId = (): number => {
    return this.state.currentlyEditingId;
  }

  addTask = (description: string): void => {
    let updatedRowData = this.state.rowData.map(row => ({ ...row }));
    let newTask = createNewTask(description);
    updatedRowData.push(newTask);

    this.setState({ rowData: updatedRowData });
  }

  deleteTask = (id: number): void => {
    let rowData = this.state.rowData.filter(row => row.id !== id);
    this.setState({ rowData });
  }

  render() {
    return (
      <div className="app-component">
        <TaskAdder addTask={this.addTask} />
        <div className="ag-theme-alpine">
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
          />
        </div>
        < img src={require("./ag-grid-logo.png")} />
      </div>
    );
  }
}

export default App;