import React from 'react';
import { IEditingContext, EditingContext } from '../context/EditingContext';

/**
 * Higher Order Component which wraps a react component so that it (and its children components) have access to an {@link EditingContext}.
 * @param WrappedComponent - A React component
 * @returns - a React component where it (and its children components) have access to an {@link EditingContext}.
 * Note: the returned component is also passed the {@link IEditingContext.editingId | currently editing ID} 
 * as a prop so it can have access to it's previous and current values in it's **componentDidUpdate** lifecycle hook.
 */
const WithEditingContext = <P extends {}>(WrappedComponent: React.ComponentClass<P>): React.ComponentClass<P, IEditingContext> => {
    return class extends React.Component<P, IEditingContext> {
        state: IEditingContext;

        /** Creates an {@link IEditingContext | Editing Context} state object */
        constructor(props: P) {
            super(props);
            this.state = {
                editingId: null,
                setEditingId: this.setEditingId
            }
        }

        /** updates the context object's {@link IEditingContext.editingId | editing ID} */
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