/** todo item a user wants to complete */
export interface ToDo {
    /** unique id for each todo */
    id: string,
    /** user provided description of todo */
    description: string,
    /** due date for todo */
    deadline: string | null
}

/** collection of toDos */
export type ToDoList = ToDo[];

/** Function that adds a {@link ToDo | toDo} to a {@link ToDoList | toDoList}  */
export interface IAddToDo {
    (toDo: ToDo): void
}

/** Function which removes a {@link ToDo | toDo} from a {@link ToDoList | toDoList}  */
export interface IDeleteToDo {
    (toDo: ToDo): void
}