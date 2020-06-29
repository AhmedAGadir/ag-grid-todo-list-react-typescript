import React, { Component, createRef } from 'react';

interface TaskAdderProps {
    addTask: (task: string) => void
}

interface TaskAdderState {
    value: string
}

export default class TaskAdder extends Component<TaskAdderProps, TaskAdderState> {
    private inputRef = createRef<HTMLInputElement>();

    constructor(props: TaskAdderProps) {
        super(props);
        this.state = {
            value: ''
        };
    }

    componentDidMount = () => {
        this.inputRef.current!.focus();
    }

    onClickHandler = () => {
        if (this.state.value) {
            this.props.addTask(this.state.value);
            this.setState({ value: '' });
        }
    }

    render() {
        return (
            < form style={{ display: 'flex' }} onSubmit={e => e.preventDefault()} >
                <input
                    ref={this.inputRef}
                    className="to-do-input"
                    value={this.state.value}
                    onChange={e => this.setState({ value: e.target.value })}
                    placeholder="Enter Task..." />
                <button type="submit" onClick={this.onClickHandler} >+</button>
            </form>
        );
    }
}