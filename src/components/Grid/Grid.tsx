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

import WithEditingContext from '../../HOC/WithEditingContext';

import 'ag-grid-enterprise';
import './Grid.scss'
import 'normalize.css';

interface GridProps {
	editingId: string,
	toDoList: ToDoList,
	deleteToDo: IDeleteToDo
}

interface GridState {
	gridOptions: GridOptions
}

class Grid extends React.Component<GridProps, GridState> {
	state: GridState;
	private gridApi: GridApi;

	public constructor(props: GridProps) {
		super(props);
		this.state = {
			gridOptions: {
				columnDefs: [
					{
						cellRenderer: 'checkboxRenderer',
						pinned: 'left',
						width: 50,
					},
					{
						field: 'description',
						cellRenderer: 'descriptionRenderer',
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
							deleteToDo: this.props.deleteToDo,
						},
						width: 90,
					},
				],
				frameworkComponents: {
					descriptionRenderer: DescriptionRenderer,
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

	public componentDidUpdate(prevProps: GridProps): void {
		// comparisons of context here
		if (prevProps.editingId !== this.props.editingId) {
			// refresh editing node / node that just finished editing 
			const idToUpdate: string = this.props.editingId === null ? prevProps.editingId : this.props.editingId;
			const nodeToUpdate: RowNode = this.gridApi.getRowNode(idToUpdate);
			const refreshCellsParams: RefreshCellsParams = { rowNodes: [nodeToUpdate], force: true };
			this.gridApi.refreshCells(refreshCellsParams);
		}
	}

	private onGridReady = (params: GridReadyEvent): void => {
		this.gridApi = params.api;
	}

	private onFirstDataRendered = (): void => {
		const timeout: number = 500;
		setTimeout(this.completeFirstToDo, timeout);
	}

	private completeFirstToDo = (): void => {
		const firstNode: RowNode = this.gridApi.getDisplayedRowAtIndex(0);
		firstNode.setSelected(true);
		const refreshCellsParams: RefreshCellsParams = { rowNodes: [firstNode], force: true };
		this.gridApi.refreshCells(refreshCellsParams);
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

export default WithEditingContext<GridProps, GridState>(Grid);