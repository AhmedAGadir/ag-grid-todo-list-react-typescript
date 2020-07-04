import React, { Component, createRef } from 'react';
import './TaskAdder.css';

interface TaskAdderProps {
    addTask: (task: string) => void
}

interface TaskAdderState {
    value: string
}

export default class TaskAdder extends Component<TaskAdderProps, TaskAdderState> {
    state: TaskAdderState;
    private inputRef = createRef<HTMLInputElement>();

    public constructor(props: TaskAdderProps) {
        super(props);
        this.state = {
            value: ''
        };
    }

    public componentDidMount(): void {
        this.inputRef.current!.focus();
    }

    private onClickHandler: React.MouseEventHandler = (): void => {
        if (this.state.value) {
            this.props.addTask(this.state.value);
            this.setState({ value: '' });
        }
    }

    private inputChangedHandler: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ value: event.target.value });

    }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    }

    public render(): React.ReactElement {
        return (
            < form className="task-adder-form" onSubmit={this.handleSubmit} >
                <input
                    ref={this.inputRef}
                    value={this.state.value}
                    onChange={this.inputChangedHandler}
                    placeholder="Enter Task..." />
                <button type="submit" onClick={this.onClickHandler} >+</button>
            </form>
        );
    }
}