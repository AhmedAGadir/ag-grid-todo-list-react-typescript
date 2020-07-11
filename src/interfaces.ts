/** todo item a user wants to complete */
export interface ToDo {
    /** unique id for each toDo */
    id: string,
    /** user provided description of toDo */
    description: string,
    /** due date for toDo */
    deadline: string | null
}

/** collection of toDos */
export type ToDoList = ToDo[];

/** handles adding a {@link ToDo | toDo} to the {@link ToDoList | toDoList}  */
export interface IAddToDo {
    (toDo: ToDo): void
}

/** handles removing a {@link ToDo | toDo} from the {@link ToDoList | toDoList}  */
export interface IDeleteToDo {
    (toDo: ToDo): void
}