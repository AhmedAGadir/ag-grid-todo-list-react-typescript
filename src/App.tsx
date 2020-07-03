import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { FirstDataRenderedEvent, GridReadyEvent, GridApi, ColumnApi, RowNode, RefreshCellsParams, GridOptions, GetRowNodeIdFunc, ITooltipParams, } from 'ag-grid-community'
import 'ag-grid-enterprise';

import TaskAdder from './components/TaskAdder/TaskAdder';
import DateRenderer from './components/DateRenderer/DateRenderer';
import TaskRenderer from './components/TaskRenderer/TaskRenderer';
import CheckboxRenderer from './components/CheckboxRenderer/CheckboxRenderer';
import ActionsRenderer from './components/ActionsRenderer/ActionsRenderer';

import { differenceInDays } from 'date-fns';
import tasks, { createNewTask, Task } from './tasks';

import 'normalize.css';
import './App.scss'


export type ID = number | null;
export interface IGetEditingId {
  (): ID;
}
export interface ISetEditingId {
  (id: ID): void
}

export interface IDeleteTask {
  (id: ID): void
}

interface AppProps { }

interface AppState {
  editingId: ID,
  rowData: Task[],
  gridOptions: GridOptions
}

class App extends Component<AppProps, AppState> {
  state: AppState;
  private gridApi: GridApi;
  private columnApi: ColumnApi;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      editingId: null,
      rowData: tasks,
      gridOptions: {
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
              setEditingId: this.setEditingId,
              getEditingId: this.getEditingId
            },
            width: 90,
          },
        ],
        defaultColDef: {
          cellRendererParams: {
            getEditingId: this.getEditingId
          }
        },
        frameworkComponents: {
          taskRenderer: TaskRenderer,
          dateRenderer: DateRenderer,
          checkboxRenderer: CheckboxRenderer,
          actionsRenderer: ActionsRenderer
        },
        immutableData: true,
        domLayout: "autoHeight",
        headerHeight: 0,
        rowHeight: 65,
        rowDragManaged: true,
        animateRows: true,
        popupParent: document.body,
        rowSelection: 'multiple',
        suppressRowClickSelection: true,
      }
    }
  }

  componentDidUpdate(_: any, prevState: any): void {
    if (prevState.editingId !== this.state.editingId) {
      const idToUpdate: string = this.state.editingId === null ? prevState.editingId : this.state.editingId;
      const nodeToUpdate: RowNode = this.gridApi.getRowNode(idToUpdate);
      const refreshCellsParams: RefreshCellsParams = { rowNodes: [nodeToUpdate], force: true };
      this.gridApi.refreshCells(refreshCellsParams);
    }
  }

  getRowNodeId: GetRowNodeIdFunc = (data: Task): any => {
    return data.id;
  }

  tooltipValueGetter = (params: ITooltipParams): string => {
    if (!params.value) {
      return 'no deadline';
    }
    if (params.node.selected) {
      return 'completed';
    }
    // change the whole app to use MM/dd/yyyy; - here and daterenderer
    const [_, day, month, year] = params.value.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    const deadlineDate: Date = new Date(year, month - 1, day);

    const difference: number = differenceInDays(deadlineDate, new Date());
    return difference > 0 ? `${difference} days remaining` : `${-difference} days overdue`;
  }

  onGridReady = (params: GridReadyEvent): void => {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }

  onFirstDataRendered = (): void => {
    setTimeout(this.completeFirstTask, 500);
  }

  completeFirstTask = (): void => {
    const firstNode: RowNode = this.gridApi.getRowNode('0');
    firstNode.setSelected(true);
    const refreshCellsParams: RefreshCellsParams = { rowNodes: [firstNode], force: true }
    this.gridApi.refreshCells(refreshCellsParams);
  }

  setEditingId: ISetEditingId = (id: ID): void => {
    this.setState({ editingId: id });
  }

  getEditingId: IGetEditingId = (): ID => {
    return this.state.editingId;
  }

  addTask = (taskDescription: string): void => {
    const rowData: Task[] = this.state.rowData.map(row => ({ ...row }));
    const newTask: Task = createNewTask(taskDescription);
    rowData.push(newTask);
    this.setState({ rowData });
  }

  deleteTask: IDeleteTask = (id: number): void => {
    const rowData: Task[] = this.state.rowData.filter(row => row.id !== id);
    this.setState({ rowData });
  }

  render(): React.ReactElement {
    return (
      <div className="app-component">
        <TaskAdder addTask={this.addTask} />
        <div className="ag-theme-alpine">
          <AgGridReact
            gridOptions={this.state.gridOptions}
            rowData={this.state.rowData}
            getRowNodeId={this.getRowNodeId}
            onFirstDataRendered={this.onFirstDataRendered}
            onGridReady={this.onGridReady}
          />
        </div>
        < img src={require("./ag-grid-logo.png")} />
      </div>
    );
  }
}

export default App;