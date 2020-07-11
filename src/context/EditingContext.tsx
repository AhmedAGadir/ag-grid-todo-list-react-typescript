import React from 'react';

export interface IEditingContext {
    /** ID of the currently editing node in the {@link Grid} | ag-Grid instance */
    editingId: string,
    /** function to update the ID the currently editing node in the {@link Grid} | ag-Grid instance */
    setEditingId: (id: string) => void
}

/** 
 * The context object that is available throughout the application 
 * The default value is intended to be overriden in the {@link WithEditingContext} Higher Order Component.
*/
export const EditingContext: React.Context<IEditingContext> = React.createContext({
    editingId: null,
    setEditingId: (id: string): void => { },
});
