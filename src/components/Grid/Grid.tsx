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
	editingId: string,
	tasks: Task[],
	deleteTask: IDeleteTask
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

	public componentDidUpdate(prevProps: GridProps): void {
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
		setTimeout(this.completeFirstTask, timeout);
	}

	private completeFirstTask = (): void => {
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

export interface IEditingContext {
	editingId: string,
	setEditingId: (id: string) => void
}

export const EditingContext: React.Context<IEditingContext> = React.createContext({
	editingId: null,
	setEditingId: (id: string): void => { },
});



// THE RETURN PROP IS A PROBLEM WHEN YOU HOVER
// APP.TSX IS BARKING ABOUT THE PROPERTY THAT GETS PASSED HERE 
interface WithContextState extends IEditingContext { }

const WithContext = <P, S>(WrappedComponent: React.ComponentClass<P, S>): React.ComponentClass<P, WithContextState> => {
	return class extends React.Component<P, WithContextState> {
		state: WithContextState;
		static contextType: React.Context<IEditingContext> = EditingContext;

		constructor(props: P) {
			super(props);
			this.state = {
				editingId: null,
				setEditingId: this.setEditingId
			}
		}

		setEditingId = (id: string): void => {
			this.setState(prevState => ({
				...prevState,
				editingId: id,
			}))
		}

		render(): React.ReactElement {
			// the editingId is also passed as a prop to allow for previous/current context comparisons in componentDidUpdate
			return (
				<EditingContext.Provider value={this.state}>
					<WrappedComponent {...this.props} editingId={this.state.editingId} />
				</EditingContext.Provider >
			)
		};
	}
}

export default WithContext<GridProps, GridState>(Grid);