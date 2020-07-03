export interface Task {
    id: number,
    description: string,
    deadline: string | null
}

let idSequence = 3;

const data: Task[] = [
    { id: 0, description: 'Go to Wano', deadline: '11/07/2020' },
    { id: 1, description: 'Defeat Kaido', deadline: '25/08/2020' },
    { id: 2, description: 'Find Raftel', deadline: '06/09/2020' },
]

export const createNewTask = (description: string): Task => {
    return {
        description,
        id: idSequence++,
        deadline: null,
    }
}

export default data;
