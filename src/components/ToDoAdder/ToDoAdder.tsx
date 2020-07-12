import React from 'react';
import { ToDo, IAddToDo } from '../../interfaces';
import * as UTILS from '../../utils';
import './ToDoAdder.scss';

interface ToDoAdderProps {
    /** adds a {@link ToDo} to {@link AppState.toDoList} */
    addToDo: IAddToDo
}

interface ToDoAdderState {
    /** Description of the new {@link ToDo | toDo} to add to {@link AppState.toDoList} */
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

    /** focus on the HTML input element on mounting  */
    public componentDidMount(): void {
        this.inputRef.current!.focus();
    }

    /** Creates a new {@link ToDo} using the {@link ToDoAdderState.description} and adds it to {@link AppState.toDoList} */
    private submitDescription: React.MouseEventHandler<HTMLButtonElement> = (): void => {
        if (this.state.description) {
            const toDo: ToDo = this.createToDo(this.state.description)
            this.props.addToDo(toDo);
            this.setState({ description: '' });
        }
    }

    /** @returns a new {@link ToDo} using a description */
    private createToDo = (description: string): ToDo => {
        return {
            description,
            deadline: null,
            id: UTILS.uuid(),
        }
    }

    /** updates {@link ToDoAdderState.description} */
    private descriptionChangedHandler: React.ChangeEventHandler<HTMLInputElement> = (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.setState({ description: event.target.value });

    }

    /** prevents HTML Form submission */
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