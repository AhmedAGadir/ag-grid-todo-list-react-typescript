export interface ITask {
    id: number,
    task: string,
    deadline: string | null
}

let idSequence = 3;

const data: ITask[] = [
    { id: 0, task: 'Go to Wano', deadline: '11/07/2020' },
    { id: 1, task: 'Defeat Kaido', deadline: '25/08/2020' },
    { id: 2, task: 'Find Raftel', deadline: '06/09/2020' },
]

export const createNewTask = (description: string): ITask => {
    return {
        task: description,
        id: idSequence++,
        deadline: null,
    }
}

export default data;
