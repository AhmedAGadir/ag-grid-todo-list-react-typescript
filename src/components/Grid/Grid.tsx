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
    DateRenderer,
    TaskRenderer,
    CheckboxRenderer,
    ActionsRenderer
} from '../index';

import { Task, IDeleteTask } from '../../interfaces';

import * as UTILS from '../../utils';


import 'ag-grid-enterprise';

import './Grid.scss'
import 'normalize.css';


interface GridProps {
    tasks: Task[],
    deleteTask: IDeleteTask
}

interface GridState {
    editingId: string,
    gridOptions: GridOptions
}

// const editingIdContext = React.createContext(null);

// add typescript to this
// static contextType = editingIdContext;
// <editingIdContext.Provider value={null}>


class Grid extends React.Component<GridProps, GridState> {
    state: GridState;

    private gridApi: GridApi;
    private columnApi: ColumnApi;

    public constructor(props: GridProps) {
        super(props);
        this.state = {
            editingId: null,
            gridOptions: {
                columnDefs: [
                    {
                        cellRenderer: 'checkboxRenderer',
                        pinned: 'left',
                        width: 50,
                    },
                    {
                        field: 'description',
                        cellRenderer: 'taskRenderer',
                        rowDrag: true,
                        flex: 1,
                    },
                    {
                        field: 'deadline',
                        cellRenderer: 'dateRenderer',
                        tooltipValueGetter: this.tooltipValueGetter,
                        width: 170,
                    },
                    {
                        cellRenderer: 'actionsRenderer',
                        cellRendererParams: {
                            deleteTask: this.props.deleteTask,
                        },
                        width: 90,
                    },
                ],
                context: {
                    componentParent: this,
                    getEditingId: (): string => this.state.editingId,
                    setEditingId: (id: string): void => this.setState({ editingId: id }),
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

    public componentDidUpdate(_: GridProps, prevState: GridState): void {
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
            // change the whole Grid to use MM/dd/yyyy; - here and daterenderer
            const deadlineDate: Date = UTILS.convertToDate(params.value);
            const difference: number = UTILS.differenceInDays(deadlineDate, new Date());
            message = difference > 0 ? `${difference} days remaining` : `${-difference} days overdue`;
        }
        return message;
    }

    private getRowNodeId: GetRowNodeIdFunc = (task: Task): string => {
        return task.id;
    }

    public render(): React.ReactElement {
        return (
            <div className="ag-theme-alpine">
                <AgGridReact
                    rowData={this.props.tasks}
                    gridOptions={this.state.gridOptions}
                    getRowNodeId={this.getRowNodeId}
                    onFirstDataRendered={this.onFirstDataRendered}
                    onGridReady={this.onGridReady}
                />
            </div>
        );
    }
}

export default Grid;