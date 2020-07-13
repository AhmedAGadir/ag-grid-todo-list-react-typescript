import React from 'react';
import { AgGridReact } from 'ag-grid-react';

import {
	GridReadyEvent,
	GridApi,
	RowNode,
	RefreshCellsParams,
	GridOptions,
	GetRowNodeIdFunc,
	ITooltipParams
} from 'ag-grid-community'

import {
	DateRenderer,
	DescriptionRenderer,
	CheckboxRenderer,
	ActionsRenderer
} from '../index';

import { ToDo, ToDoList, IDeleteToDo } from '../../interfaces';
import * as UTILS from '../../utils';

import WithMockEditingContext from '../../HOC/WithMockEditingContext';

import 'ag-grid-enterprise';
import './Grid.scss'
import 'normalize.css';

interface GridProps {
	/** 
	 * ID of the currently mock-editing node in the Grid. 
	 * Passed via the {@link WithMockEditingContext} Higher Order Component
	*/
	mockEditingId: string,
	/** Collection of toDos to render */
	toDoList: ToDoList,
	/** removes a toDo from {@link AppState.toDoList} */
	deleteToDo: IDeleteToDo
}

interface GridState {
	/** grid config the ag-Grid instances */
	gridOptions: GridOptions
}

/** ag-Grid instance that renders the toDoList */
class Grid extends React.Component<GridProps, GridState> {
	state: GridState;
	private gridApi: GridApi;

	public constructor(props: GridProps) {
		super(props);
		this.state = {
			gridOptions: {
				columnDefs: [
					{
						pinned: 'left',
						cellRendererFramework: CheckboxRenderer,
						width: 50,
					},
					{
						field: 'description',
						cellRendererFramework: DescriptionRenderer,
						rowDrag: true,
						flex: 1,
					},
					{
						field: 'deadline',
						cellRendererFramework: DateRenderer,
						tooltipValueGetter: this.tooltipValueGetter,
						width: 170,
					},
					{
						cellRendererFramework: ActionsRenderer,
						cellRendererParams: {
							deleteToDo: this.props.deleteToDo,
						},
						width: 90,
					},
				],
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

	/** 
	 * Compares the previous and currently {@link IMockEditingContext.mockEditingId | mockEditingId} values.
	 * If there is a change then the grid nodes are refreshed to reflect this.
	 */
	public componentDidUpdate(prevProps: GridProps): void {
		if (prevProps.mockEditingId !== this.props.mockEditingId) {
			const idToUpdate: string = this.props.mockEditingId === null ? prevProps.mockEditingId : this.props.mockEditingId;
			const nodeToUpdate: RowNode = this.gridApi.getRowNode(idToUpdate);
			const refreshCellsParams: RefreshCellsParams = { rowNodes: [nodeToUpdate], force: true };
			this.gridApi.refreshCells(refreshCellsParams);
		}
	}

	/** saves a reference to the ag-Grid API on this component */
	private onGridReady = (params: GridReadyEvent): void => {
		this.gridApi = params.api;
	}

	/** Complete the first two toDos in {@link AppState.toDoList} */
	private onFirstDataRendered = (): void => {
		const timeout: number = 500;
		setTimeout(() => {
			this.completeToDos([0, 1]);
		}, timeout);
	}

	/** Completes the toDos located in the Grid at the indexes passed */
	private completeToDos = (indexes: number[]): void => {
		const nodesArr: RowNode[] = [];
		indexes.forEach(ind => {
			const node: RowNode = this.gridApi.getDisplayedRowAtIndex(ind);
			node.setSelected(true);
			nodesArr.push(node);
		})
		const refreshCellsParams: RefreshCellsParams = { rowNodes: nodesArr, force: true };
		this.gridApi.refreshCells(refreshCellsParams);
	}

	/** @returns a message saying how many days are remaining/overdue a toDo is */
	private tooltipValueGetter = (params: ITooltipParams): string => {
		let message: string;
		if (!params.value) {
			message = 'no deadline';
		} else if (params.node.selected) {
			message = 'completed';
		} else {
			const deadlineDate: Date = UTILS.convertToDate(params.value);
			const difference: number = UTILS.differenceInDays(deadlineDate, new Date());
			message = difference > 0 ? `${difference} days remaining` : `${-difference} days overdue`;
		}
		return message;
	}

	/** points ag-Grid to the unique ID of each toDo */
	private getRowNodeId: GetRowNodeIdFunc = (toDo: ToDo): string => {
		return toDo.id;
	}

	public render(): React.ReactElement {
		return (
			<div className="ag-theme-alpine">
				<AgGridReact
					rowData={this.props.toDoList}
					gridOptions={this.state.gridOptions}
					getRowNodeId={this.getRowNodeId}
					onFirstDataRendered={this.onFirstDataRendered}
					onGridReady={this.onGridReady}
				/>
			</div>
		);
	}
}

export default WithMockEditingContext<GridProps>(Grid);