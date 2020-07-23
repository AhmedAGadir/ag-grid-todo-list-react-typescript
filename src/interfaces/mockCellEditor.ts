import { ICellRenderer } from 'ag-grid-community'

/** Cell renderers which have a mock-edit mod */
export interface IMockCellEditor extends ICellRenderer {
    /** returns a tuple with the colId and the updated value in the cell */
    getValue: () => [any, any],
    /** resets the cell value to that before editing */
    reset: () => void,
}

/**
 * 
 * @param component - a cell renderer component
 * @returns - a boolean value indicating whether the passed component implements the {@link IMockCellEditor | IMockCellEditor interface}
 */
export const instanceOfIMockCellEditor = (component: any) => {
    return Object.getPrototypeOf(component).hasOwnProperty('getValue')
        && typeof component.getValue === 'function'
        && Object.getPrototypeOf(component).hasOwnProperty('reset')
        && typeof component.reset === 'function';
}