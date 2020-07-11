import React from 'react';
import { IEditingContext, EditingContext } from '../context/EditingContext';

// WHY DO WE HAVE TO PASS STATE
// THE RETURN PROP IS A PROBLEM;

/**
 * Higher Order Component which takes a react component and returns a react component with access to an Editing Context.
 * @param WrappedComponent - A React component
 * @returns - a React component where it (and all its nested components) have access to an {@link EditingContext}.
 * Note: the returned component is also passed the {@link IEditingContext.editingId | currently editing ID} as a prop so it can have access to it's previous and current values in it's **componentDidUpdate** lifecycle hook.
 */
const WithEditingContext = <P, S>(WrappedComponent: React.ComponentClass<P, S>): React.ComponentClass<P, IEditingContext> => {
    return class extends React.Component<P, IEditingContext> {
        state: IEditingContext;

        constructor(props: P) {
            super(props);
            this.state = {
                editingId: null,
                setEditingId: this.setEditingId
            }
        }

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