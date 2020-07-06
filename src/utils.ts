import { differenceInDays } from 'date-fns';
import { uuid } from 'uuidv4';


const convertToDate = (dateString: string) => {
    const [_, day, month, year] = dateString.match(/(\d{2})\/(\d{2})\/(\d{4})/);
    return new Date(+year, +month - 1, +day);
}

const isValidDate = (d: Date): boolean => {
    return d instanceof Date && !isNaN(d as any);
}

export {
    differenceInDays,
    uuid,
    isValidDate,
    convertToDate
}