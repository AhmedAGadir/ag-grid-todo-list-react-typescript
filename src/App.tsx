import React from 'react';

import { ToDoAdder, Grid } from './components'
import { ToDo, IAddToDo, IDeleteToDo } from './interfaces';
import * as UTILS from './utils';

import './App.scss';

interface AppState {
	toDoList: ToDo[]
}

/**
 * Root Component of the application
 */
class App extends React.Component<{}, AppState> {

	public state: AppState = {
		toDoList: [
			{ description: 'Go to Wano', deadline: '11/07/2020', id: UTILS.uuid() },
			{ description: 'Defeat Kaido', deadline: '25/08/2020', id: UTILS.uuid() },
			{ description: 'Find Raftel', deadline: '06/09/2020', id: UTILS.uuid() },
		]
	}

	/**
	 * adds a toDo to the toDoList array 
	 * @param toDoToAdd  - the toDo to be added
	 */
	private addToDo: IAddToDo = (toDoToAdd: ToDo): void => {
		const toDoList: ToDo[] = this.state.toDoList.map(toDo => ({ ...toDo }));
		toDoList.push(toDoToAdd);
		this.setState({ toDoList });
	}

	/**
	 * removes a toDo from the toDoList array
	 * @param toDoToDelete - the toDo to be removed
	 */
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
			</div>
		);
	}
}

export default App;