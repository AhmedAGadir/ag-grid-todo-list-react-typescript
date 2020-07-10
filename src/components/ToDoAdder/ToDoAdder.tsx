import React from 'react';
import { ToDo, IAddToDo } from '../../interfaces';
import * as UTILS from '../../utils';
import './ToDoAdder.scss';

interface ToDoAdderProps {
    addToDo: IAddToDo
}

interface ToDoAdderState {
    description: string
}

export default class ToDoAdder extends React.Component<ToDoAdderProps, ToDoAdderState> {
    state: ToDoAdderState;
    private inputRef: React.RefObject<HTMLInputElement>;

    public constructor(props: ToDoAdderProps) {
        super(props);
        this.state = {
            description: ''
        };
        this.inputRef = React.createRef<HTMLInputElement>();
    }

    public componentDidMount(): void {
        this.inputRef.current!.focus();
    }

    private onClickHandler: React.MouseEventHandler<HTMLButtonElement> = (): void => {
        if (this.state.description) {
            const toDo: ToDo = this.createToDo(this.state.description)
            this.props.addToDo(toDo);
            this.setState({ description: '' });
        }
    }

    private createToDo = (description: string): ToDo => {
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
            < form className="todo-adder-form" onSubmit={this.handleSubmit} >
                <input
                    ref={this.inputRef}
                    value={this.state.description}
                    onChange={this.inputChangedHandler}
                    placeholder="Enter To Do..." />
                <button type="submit" onClick={this.onClickHandler} >+</button>
            </form>
        );
    }
}