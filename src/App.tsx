import React from 'react';

import { TaskAdder, Grid } from './components'
import { Task, IAddTask, IDeleteTask } from './interfaces';
import * as UTILS from './utils';

import './App.scss';

interface AppState {
	tasks: Task[]
}

/**
 * Root level Component of the application
 */
class App extends React.Component<{}, AppState> {

	public state: AppState = {
		tasks: [
			{ description: 'Go to Wano', deadline: '11/07/2020', id: UTILS.uuid() },
			{ description: 'Defeat Kaido', deadline: '25/08/2020', id: UTILS.uuid() },
			{ description: 'Find Raftel', deadline: '06/09/2020', id: UTILS.uuid() },
		]
	}

	/**
	 * adds a task to the task array 
	 * @param taskToAdd - the task to be added
	 */
	private addTask: IAddTask = (taskToAdd: Task): void => {
		const tasks: Task[] = this.state.tasks.map(task => ({ ...task }));
		tasks.push(taskToAdd);
		this.setState({ tasks });
	}

	/**
	 * removes a task from the task array
	 * @param taskToDelete - the task to be removed
	 */
	private deleteTask: IDeleteTask = (taskToDelete: Task): void => {
		const tasks: Task[] = this.state.tasks.filter(task => task.id !== taskToDelete.id);
		this.setState({ tasks });
	}

	public render(): React.ReactElement {
		return (
			<div className="app-component">
				<TaskAdder addTask={this.addTask} />
				{/* 
				// @ts-ignore */}
				<Grid tasks={this.state.tasks} deleteTask={this.deleteTask} />
			</div>
		);
	}
}

export default App;