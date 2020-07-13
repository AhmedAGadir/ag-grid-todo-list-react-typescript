import React from 'react';
import { IMockEditingContext, MockEditingContext } from '../context/MockEditingContext';

/**
 * Higher Order Component which wraps a react component so that it (and its children components) have access to {@link MockEditingContext}.
 * @param WrappedComponent - A React component
 * @returns - a wrapped React component that has access to {@link MockEditingContext}.
 * Note: the returned component is also passed the {@link IMockEditingContext.mockEditingId | currently mock-editing ID} 
 * as a prop so it can compare it's previous and current values in the **componentDidUpdate** lifecycle hook.
 */
// https://stackoverflow.com/questions/41112313/how-to-use-generics-with-arrow-functions-in-typescript-jsx-with-react/41112882#41112882
const WithMockEditingContext = <P extends {}>(WrappedComponent: React.ComponentClass<P>): React.ComponentClass<P, IMockEditingContext> => {
    return class extends React.Component<P, IMockEditingContext> {
        state: IMockEditingContext;

        /** Creates an object to override the default {@link MockEditingContext} value*/
        constructor(props: P) {
            super(props);
            this.state = {
                mockEditingId: null,
                setMockEditingId: this.setMockEditingId
            }
        }

        /** updates {@link MockEditingContext.mockEditingId} */
        setMockEditingId = (id: string): void => {
            this.setState(prevState => ({
                ...prevState,
                mock: id,
            }))
        }

        render(): React.ReactElement {
            return (
                <MockEditingContext.Provider value={this.state}>
                    <WrappedComponent {...this.props} mockEditingId={this.state.mockEditingId} />
                </MockEditingContext.Provider >
            )
        };
    }
}

export default WithMockEditingContext;