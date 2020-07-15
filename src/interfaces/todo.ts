/** toDo that a user aims to complete */
export interface ToDo {
    /** unique ID for toDo */
    id: string,
    /** description of toDo */
    description: string,
    /** due date for toDo */
    deadline: string | null
}

/** collection of toDos */
export type ToDoList = ToDo[];

/** adds a {@link ToDo | toDo} to a {@link ToDoList | toDoList}  */
export interface IAddToDo {
    (toDo: ToDo): void
}

/** removes a {@link ToDo | toDo} from a {@link ToDoList | toDoList}  */
export interface IDeleteToDo {
    (toDo: ToDo): void
}