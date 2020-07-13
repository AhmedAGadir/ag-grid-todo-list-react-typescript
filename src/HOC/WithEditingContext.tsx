import React from 'react';
import { IEditingContext, EditingContext } from '../context/EditingContext';

/**
 * Higher Order Component which wraps a react component so that it (and its children components) have access to {@link EditingContext}.
 * @param WrappedComponent - A React component
 * @returns - a wrapped React component that has access to {@link EditingContext}.
 * Note: the returned component is also passed the {@link IEditingContext.editingId | currently editing ID} 
 * as a prop so it can compare it's previous and current values in the **componentDidUpdate** lifecycle hook.
 */
// https://stackoverflow.com/questions/41112313/how-to-use-generics-with-arrow-functions-in-typescript-jsx-with-react/41112882#41112882
const WithEditingContext = <P extends {}>(WrappedComponent: React.ComponentClass<P>): React.ComponentClass<P, IEditingContext> => {
    return class extends React.Component<P, IEditingContext> {
        state: IEditingContext;

        /** Creates an object to override the default {@link EditingContext} value*/
        constructor(props: P) {
            super(props);
            this.state = {
                editingId: null,
                setEditingId: this.setEditingId
            }
        }

        /** updates {@link EditingContext.editingId} */
        setEditingId = (id: string): void => {
            this.setState(prevState => ({
                ...prevState,
                editingId: id,
            }))
        }

        render(): React.ReactElement {
            return (
                <EditingContext.Provider value={this.state}>
                    <WrappedComponent {...this.props} editingId={this.state.editingId} />
                </EditingContext.Provider >
            )
        };
    }
}

export default WithEditingContext;