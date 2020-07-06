import React from 'react';
import { Task, IAddTask } from '../../interfaces';
import * as UTILS from '../../utils';
import './TaskAdder.css';

interface TaskAdderProps {
    addTask: IAddTask
}

interface TaskAdderState {
    description: string
}

export default class TaskAdder extends React.Component<TaskAdderProps, TaskAdderState> {
    state: TaskAdderState;
    private inputRef = React.createRef<HTMLInputElement>();

    public constructor(props: TaskAdderProps) {
        super(props);
        this.state = {
            description: ''
        };
    }

    public componentDidMount(): void {
        this.inputRef.current!.focus();
    }

    private onClickHandler: React.MouseEventHandler = (): void => {
        if (this.state.description) {
            const task: Task = this.createTask(this.state.description)
            this.props.addTask(task);
            this.setState({ description: '' });
        }
    }

    private createTask = (description: string): Task => {
        return {
            description,
            deadline: null,
            id: UTILS.uuid(),
        }
    }

    private inputChangedHandler: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ description: event.target.value });

    }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    }

    public render(): React.ReactElement {
        return (
            < form className="task-adder-form" onSubmit={this.handleSubmit} >
                <input
                    ref={this.inputRef}
                    value={this.state.description}
                    onChange={this.inputChangedHandler}
                    placeholder="Enter Task..." />
                <button type="submit" onClick={this.onClickHandler} >+</button>
            </form>
        );
    }
}