import React from 'react';
import { IMockEditingContext, MockEditingContext } from '../context/MockEditingContext';


export interface WithMockEditingIdProps {
    mockEditingId: string
}

/**
 * Higher Order Component which wraps a react component so that it (and its children components) have access to {@link MockEditingContext}.
 * @param WrappedComponent - A React component
 * @returns - a wrapped React component that has access to {@link MockEditingContext}.
 * Note: the returned component is also passed the {@link IMockEditingContext.mockEditingId | mock-editing ID} 
 * as a prop so it can compare it's previous and current values in the **componentDidUpdate** lifecycle hook.
 */
// https://stackoverflow.com/questions/41112313/how-to-use-generics-with-arrow-functions-in-typescript-jsx-with-react/41112882#41112882
const WithMockEditingContext = <P extends {}>(WrappedComponent: React.ComponentClass<P>): React.ComponentClass<P> => (
    class extends React.Component<P, IMockEditingContext> {
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
                mockEditingId: id,
            }));
        }

        render(): React.ReactElement<P & WithMockEditingIdProps> {
            return (
                <MockEditingContext.Provider value={this.state}>
                    <WrappedComponent {...this.props as P} mockEditingId={this.state.mockEditingId} />
                </MockEditingContext.Provider >
            )
        };
    }
);

export default WithMockEditingContext;

// Note: A type cast (props as P) is required here from TypeScript v3.2 onwards, due to a likely bug in TypeScript.
    // https://medium.com/@jrwebdev/react-higher-order-component-patterns-in-typescript-42278f7590fb