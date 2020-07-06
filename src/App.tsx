import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import {
  GridReadyEvent,
  GridApi,
  ColumnApi,
  RowNode,
  RefreshCellsParams,
  GridOptions,
  GetRowNodeIdFunc,
  ITooltipParams
} from 'ag-grid-community'

import {
  TaskAdder,
  DateRenderer,
  TaskRenderer,
  CheckboxRenderer,
  ActionsRenderer
} from './components';

import { Task } from './interfaces';
import * as UTILS from './utils';

import 'ag-grid-enterprise';
import './App.scss'
import 'normalize.css';

interface AppProps { }

interface AppState {
  editingId: string,
  rowData: Task[],
  gridOptions: GridOptions
}

class App extends React.Component<AppProps, AppState> {
  state: AppState;
  private gridApi: GridApi;
  private columnApi: ColumnApi;

  public constructor(props: AppProps) {
    super(props);
    this.state = {
      editingId: null,
      rowData: this.getRowData(),
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
            field: 'description',
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
            width: 90,
          },
        ],
        context: {
          componentParent: this,
          getEditingId: (): string => this.state.editingId,
          setEditingId: (id: string): void => this.setState({ editingId: id }),
          deleteTask: this.deleteTask,
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

  public componentDidUpdate(_: AppProps, prevState: AppState): void {
    if (prevState.editingId !== this.state.editingId) {
      // refresh editing node / node that just finished editing 
      const idToUpdate: string = this.state.editingId === null ? prevState.editingId : this.state.editingId;
      const nodeToUpdate: RowNode = this.gridApi.getRowNode(idToUpdate);
      const refreshCellsParams: RefreshCellsParams = { rowNodes: [nodeToUpdate], force: true };
      this.gridApi.refreshCells(refreshCellsParams);
    }
  }

  private onGridReady = (params: GridReadyEvent): void => {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }

  private onFirstDataRendered = (): void => {
    const timeout: number = 500;
    setTimeout(() => {
      // complete first task
      const firstNode: RowNode = this.gridApi.getDisplayedRowAtIndex(0);
      firstNode.setSelected(true);
      const refreshCellsParams: RefreshCellsParams = { rowNodes: [firstNode], force: true };
      this.gridApi.refreshCells(refreshCellsParams);
    }, timeout);
  }

  private tooltipValueGetter = (params: ITooltipParams): string => {
    let message: string;
    if (!params.value) {
      message = 'no deadline';
    } else if (params.node.selected) {
      message = 'completed';
    } else {
      // change the whole app to use MM/dd/yyyy; - here and daterenderer
      const deadlineDate: Date = UTILS.convertToDate(params.value);
      const difference: number = UTILS.differenceInDays(deadlineDate, new Date());
      message = difference > 0 ? `${difference} days remaining` : `${-difference} days overdue`;
    }
    return message;
  }

  private getRowNodeId: GetRowNodeIdFunc = (task: Task): string => {
    return task.id;
  }

  private getRowData = (): Task[] => {
    return [
      { description: 'Go to Wano', deadline: '11/07/2020', id: UTILS.uuid() },
      { description: 'Defeat Kaido', deadline: '25/08/2020', id: UTILS.uuid() },
      { description: 'Find Raftel', deadline: '06/09/2020', id: UTILS.uuid() },
    ]
  }

  private addTask = (taskDescription: string): void => {
    const rowData: Task[] = this.state.rowData.map(row => ({ ...row }));
    const newTask: Task = this.createTask(taskDescription);
    rowData.push(newTask);
    this.setState({ rowData });
  }

  private createTask = (description: string): Task => {
    return {
      description,
      deadline: null,
      id: UTILS.uuid(),
    }
  }

  private deleteTask = (id: string): void => {
    const rowData: Task[] = this.state.rowData.filter(row => row.id !== id);
    this.setState({ rowData });
  }

  public render(): React.ReactElement {
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
        < img src={require("./assets/ag-grid-logo.png")} alt="ag-Grid Logo" />
      </div>
    );
  }
}

export default App;