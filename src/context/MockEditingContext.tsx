import React from 'react';

export interface IMockEditingContext {
    /** ID of the mock-editing node in the {@link Grid} */
    mockEditingId: string,
    /** function to update {@link IMockEditingContext.mockEditingId} */
    setMockEditingId: (id: string) => void
}

/** The default value is intended to be overriden in {@link WithMockEditingContext} */
export const MockEditingContext: React.Context<IMockEditingContext> = React.createContext({
    mockEditingId: null,
    setMockEditingId: (id: string): void => { },
});
