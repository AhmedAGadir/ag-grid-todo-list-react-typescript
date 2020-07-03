import { uuid } from 'uuidv4';

export interface Task {
    id: string,
    description: string,
    deadline: string | null
}

const data: Task[] = [
    { id: uuid(), description: 'Go to Wano', deadline: '11/07/2020' },
    { id: uuid(), description: 'Defeat Kaido', deadline: '25/08/2020' },
    { id: uuid(), description: 'Find Raftel', deadline: '06/09/2020' },
]

export const createNewTask = (description: string): Task => {
    return {
        description,
        id: uuid(),
        deadline: null,
    }
}

export default data;
