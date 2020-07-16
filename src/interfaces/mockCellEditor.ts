import { ICellRenderer } from 'ag-grid-community'

export interface IMockCellEditor extends ICellRenderer {
    getValue: () => [any, any],
    reset: () => any,
}

export const instanceOfIMockCellEditor = (component: any) => {
    return Object.getPrototypeOf(component).hasOwnProperty('getValue')
        && typeof component.getValue === 'function'
        && Object.getPrototypeOf(component).hasOwnProperty('reset')
        && typeof component.reset === 'function';
}