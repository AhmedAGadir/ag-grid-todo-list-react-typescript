export interface Task {
    id: string,
    description: string,
    deadline: string | null
}

export interface IAddTask {
    (tas: Task): void
}

export interface IDeleteTask {
    (task: Task): void
}