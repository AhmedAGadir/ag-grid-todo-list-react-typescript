import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { ColDef, FirstDataRenderedEvent, GridReadyEvent } from 'ag-grid-community'
import 'ag-grid-enterprise';

import TaskAdder from './components/TaskAdder/TaskAdder';
import DateRenderer from './components/DateRenderer/DateRenderer';
import TaskRenderer from './components/TaskRenderer/TaskRenderer';
import CheckboxRenderer from './components/CheckboxRenderer/CheckboxRenderer';
import ActionsRenderer from './components/ActionsRenderer/ActionsRenderer';

import { differenceInDays } from 'date-fns';
import tasks, { createNewTask, ITask } from './tasks';

import 'normalize.css';
import './App.scss'

type ID = number | null;

interface AppState {
  editingId: ID,
  columnDefs: ColDef[],
  defaultColDef: ColDef,
  rowData: ITask[],
  frameworkComponents: {
    [propName: string]: any
  }
}

interface ListRendererProps<TYPE> {
  list: TYPE[];
  mapper: (from: TYPE) => string;
}

function ListRenderer<TYPE>({
  list,
  mapper
}: ListRendererProps<TYPE>): React.ReactElement {
  const result: string = list.map(mapper).join(',');
  return <span>{result}</span>;
}

class App extends Component<{}, AppState> {
  gridApi: any;
  columnApi: any;

  constructor(props: any) {
    super(props);
    this.state = {
      editingId: null,
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
      rowData: tasks,
      frameworkComponents: {
        taskRenderer: TaskRenderer,
        dateRenderer: DateRenderer,
        checkboxRenderer: CheckboxRenderer,
        actionsRenderer: ActionsRenderer
      },
    }
  }

  componentDidUpdate(_: any, prevState: any): void {
    if (prevState.editingId !== this.state.editingId) {
      let idToUpdate = this.state.editingId === null ? prevState.editingId : this.state.editingId;
      let nodeToUpdate = this.gridApi.getRowNode(idToUpdate);
      this.gridApi.refreshCells({ rowNodes: [nodeToUpdate], force: true });
    }
  }

  onGridReady = (params: GridReadyEvent): void => {
    this.gridApi = params.api;
    this.columnApi = params.columnApi;
  }

  onFirstDataRendered = (params: FirstDataRenderedEvent): void => {
    setTimeout(() => {
      let node0 = params.api.getRowNode('0');
      node0.setSelected(true);
      params.api.refreshCells({ rowNodes: [node0], force: true })
    }, 500);
  }

  tooltipValueGetter = (params: any): string => {
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

  setEditingId = (id: ID): void => {
    this.setState({ editingId: id });
  }

  getEditingId = (): ID => {
    return this.state.editingId;
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
        {/* <ListRenderer<number>
          list={[1, 2, 3]}
          mapper={(number) => ``}
        ></ListRenderer> */}
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
            onGridReady={this.onGridReady}
          />
        </div>
        < img src={require("./ag-grid-logo.png")} />
      </div>
    );
  }
}

export default App;