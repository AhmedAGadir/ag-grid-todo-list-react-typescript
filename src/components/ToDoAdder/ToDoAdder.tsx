import React from 'react';
import { ToDo, IAddToDo } from '../../interfaces';
import * as UTILS from '../../utils';
import './ToDoAdder.scss';

interface ToDoAdderProps {
    addToDo: IAddToDo
}

interface ToDoAdderState {
    /** Description of the new {@link ToDo | toDo} to add to the application's {@link AppState.toDoList |toDoList} */
    description: string
}

/**
 * Form component where users can input a {@link ToDo.description | ToDo description} 
 * which is then turned into a {@link ToDo} and appended to {@link AppState.toDoList}
 */
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

    private submitDescription: React.MouseEventHandler<HTMLButtonElement> = (): void => {
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

    private descriptionChangedHandler: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ description: event.target.value });

    }

    private handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    }

    public render(): React.ReactElement {
        return (
            <form className="todo-adder-form" onSubmit={this.handleFormSubmit} >
                <input
                    ref={this.inputRef}
                    value={this.state.description}
                    onChange={this.descriptionChangedHandler}
                    placeholder="Enter To Do..." />
                <button type="submit" onClick={this.submitDescription} >+</button>
            </form>
        );
    }
}