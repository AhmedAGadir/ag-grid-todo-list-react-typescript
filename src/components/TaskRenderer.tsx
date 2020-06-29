import React, { Component, createRef } from 'react';
import { ICellRenderer } from 'ag-grid-community';

interface TaskRendererProps {
    value: any,
    node: any,
    api: any,
    getCurrentlyEditingId: any,
    column: any,
};

interface TaskRendererState {
    editing: boolean,
    editingVal: string
};


export default class ToDoRenderer extends Component<TaskRendererProps, TaskRendererState> implements ICellRenderer {
    state: TaskRendererState;
    private inputRef = createRef<HTMLInputElement>();

    constructor(props: TaskRendererProps) {
        super(props);
        this.state = {
            editing: false,
            editingVal: null
        };
    }

    componentDidMount = () => {

        let editingId = this.props.getCurrentlyEditingId();

        this.setState({
            editingVal: this.props.value,
            editing: editingId === this.props.node.id
        });

        this.props.api.addEventListener('saveChanges', params => {
            if (params.id === this.props.node.id) {
                this.finishEdit(true);
            }
        });

        this.props.api.addEventListener('cancelChanges', params => {
            if (params.id === this.props.node.id) {
                this.finishEdit(false);
            }
        });
    }

    destroy = () => {

    }

    componentDidUpdate() {
        if (this.state.editing) {
            this.inputRef.current!.focus();
        }
    }

    finishEdit = (bool) => {
        if (bool) {
            this.props.node.setDataValue(this.props.column.colId, this.state.editingVal);
        }
        this.setState({ editing: false, editingVal: this.props.value })
        // this.props.letGridKnow(null)
    }

    render() {
        let component = null;

        if (this.state.editing) {
            component = (
                <input
                    ref={this.inputRef}
                    value={this.state.editingVal}
                    onChange={e => this.setState({ editingVal: e.target.value })}
                    // onKeyPress={this.onKeyPressHandler}
                    style={{
                        width: '100%',
                        height: 30,
                        // color: 'deppink',
                        // fontWeight: 400,
                        background: this.props.node.selected ? '#D5F1D1' : 'whitesmoke',
                        // textDecoration: this.props.node.selected ? 'line-through' : 'none',
                        // opacity: this.props.node.selected ? 0.6 : 1,
                        // border: '2px solid cyan',
                        borderRadius: 5,

                    }
                    } />
            )
        } else {
            component = <span className={this.props.node.selected ? "strike" : ''}> {this.props.value}</span>
            // <div
            // style={{
            // textDecoration: this.props.node.selected ? 'line-through' : 'none',
            // color: this.props.node.selected ? 'darkgrey' : 'black'
            // }}
            // >

        }

        return (
            <div className="todowrapper" >
                {component}
            </div>
        );
    }
}