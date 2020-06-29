import React, { Component } from 'react';
import { ICellRenderer } from 'ag-grid-community';
import './CheckboxRenderer.scss';

interface CheckboxRendererProps {
    node: any,
    api: any,
}

interface CheckboxRendererState {
    completed: boolean
}

export default class CompletedRenderer extends Component<CheckboxRendererProps, CheckboxRendererState> implements ICellRenderer {
    state: CheckboxRendererState;

    constructor(props: CheckboxRendererProps) {
        super(props);
        this.state = { completed: false };
    }

    componentDidMount = () => {
        this.setState({ completed: this.props.node.selected });
    }

    setCompleted = bool => {
        this.setState({ completed: bool }, () => {
            this.props.node.setSelected(bool);
            this.props.api.refreshCells({ rowNodes: [this.props.node], force: true });
        })
    }

    render() {
        let component;
        if (this.state.completed) {
            component = (
                <>
                    {/* <span className="edit-icon" onClick={() => null}><i className="far fa-edit"></i></span> */}
                    < span className="completed-icon" onClick={() => this.setCompleted(false)
                    }> <i className="far fa-check-square" > </i></span >

                </>
            )
        } else {
            component = (
                <>
                    {/* <span className="edit-icon" onClick={() => null}><i className="far fa-edit"></i></span> */}
                    < span className="uncompleted-icon" onClick={() => this.setCompleted(true)
                    }> <i className="far fa-square" > </i></span >
                </>
            )
        }

        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                {component}
            </div>
        )
    }
}