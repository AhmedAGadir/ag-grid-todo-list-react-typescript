export type ToDo = {
    id: string,
    description: string,
    deadline: string | null
}

export interface IAddToDo {
    (tas: ToDo): void
}

export interface IDeleteToDo {
    (toDo: ToDo): void
}