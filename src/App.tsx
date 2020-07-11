import React from 'react';

import { ToDoAdder, Grid } from './components'
import { ToDo, ToDoList, IAddToDo, IDeleteToDo } from './interfaces';
import * as UTILS from './utils';

import './App.scss';

interface AppState {
	/** Collection of the user's {@link ToDo | todos} */
	toDoList: ToDoList
}

/** Root level component of the application */
class App extends React.Component<{}, AppState> {

	public state: AppState = {
		toDoList: [
			{ description: 'Go to Wano', deadline: '11/07/2020', id: UTILS.uuid() },
			{ description: 'Defeat Kaido', deadline: '25/08/2020', id: UTILS.uuid() },
			{ description: 'Find Raftel', deadline: '06/09/2020', id: UTILS.uuid() },
		]
	}

	/** adds a {@link ToDo | todo} to {@link AppState.toDoList}  */
	private addToDo: IAddToDo = (toDoToAdd: ToDo): void => {
		const toDoList: ToDo[] = this.state.toDoList.map(toDo => ({ ...toDo }));
		toDoList.push(toDoToAdd);
		this.setState({ toDoList });
	}

	/** removes a {@link ToDo | todo} from {@link AppState.toDoList}  */
	private deleteToDo: IDeleteToDo = (toDoToDelete: ToDo): void => {
		const toDoList: ToDo[] = this.state.toDoList.filter(toDo => toDo.id !== toDoToDelete.id);
		this.setState({ toDoList });
	}

	public render(): React.ReactElement {
		return (
			<div className="app-component">
				<ToDoAdder addToDo={this.addToDo} />
				{/* 
				// @ts-ignore */}
				<Grid toDoList={this.state.toDoList} deleteToDo={this.deleteToDo} />
				<img src={require("./assets/ag-grid-logo.png")} alt="ag-Grid Logo" />
			</div>
		);
	}
}

export default App;