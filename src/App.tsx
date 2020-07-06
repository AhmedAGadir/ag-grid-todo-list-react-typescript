import React from 'react';

import { TaskAdder, Grid } from './components'
import { Task, IAddTask, IDeleteTask } from './interfaces';
import * as UTILS from './utils';

import './App.scss';

interface AppProps { }

interface AppState {
  tasks: Task[],
}
class App extends React.Component<AppProps, AppState> {
  state: AppState;

  public constructor(props: AppProps) {
    super(props);
    this.state = {
      tasks: this.initTasks(),
    }
  }

  private initTasks = (): Task[] => {
    return [
      { description: 'Go to Wano', deadline: '11/07/2020', id: UTILS.uuid() },
      { description: 'Defeat Kaido', deadline: '25/08/2020', id: UTILS.uuid() },
      { description: 'Find Raftel', deadline: '06/09/2020', id: UTILS.uuid() },
    ]
  }

  private addTask: IAddTask = (taskToAdd: Task): void => {
    const tasks: Task[] = this.state.tasks.map(task => ({ ...task }));
    tasks.push(taskToAdd);
    this.setState({ tasks });
  }

  private deleteTask: IDeleteTask = (taskToDelete: Task): void => {
    const tasks: Task[] = this.state.tasks.filter(task => task.id !== taskToDelete.id);
    this.setState({ tasks });
  }

  public render(): React.ReactElement {
    return (
      <div className="app-component">
        <TaskAdder addTask={this.addTask} />
        <Grid tasks={this.state.tasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;