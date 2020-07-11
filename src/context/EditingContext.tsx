import React from 'react';

export interface IEditingContext {
    /** ID of the currently editing node */
    editingId: string,
    /** function to set the ID of the currently editing node */
    setEditingId: (id: string) => void
}

/** 
 * The context that will be available throughout ag-Grid cell renderers 
 * to ensure that only one node is editable at a time. 
 * The default value is overriden in the state of {@link WithEditingContext}
*/
export const EditingContext: React.Context<IEditingContext> = React.createContext({
    editingId: null,
    setEditingId: (id: string): void => { },
});
