import React from 'react';

export interface IMockEditingContext {
    /** ID of the currently mock-editing node in the {@link Grid} */
    mockEditingId: string,
    /** function to update the ID of the currently mock-editing node in the {@link Grid} */
    setMockEditingId: (id: string) => void
}

/** The default value is intended to be overriden in the {@link WithMockEditingContext} Higher Order Component */
export const MockEditingContext: React.Context<IMockEditingContext> = React.createContext({
    mockEditingId: null,
    setMockEditingId: (id: string): void => { },
});
