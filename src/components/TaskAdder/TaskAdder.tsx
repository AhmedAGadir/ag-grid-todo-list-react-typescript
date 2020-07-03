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

    constructor(props: TaskAdderProps) {
        super(props);
        this.state = {
            value: ''
        };
    }

    componentDidMount(): void {
        this.inputRef.current!.focus();
    }

    onClickHandler: React.MouseEventHandler = (): void => {
        if (this.state.value) {
            this.props.addTask(this.state.value);
            this.setState({ value: '' });
        }
    }

    inputChangedHandler: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ value: event.target.value });
    }

    render(): React.ReactElement {
        return (
            < form className="task-adder-form" onSubmit={e => e.preventDefault()} >
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