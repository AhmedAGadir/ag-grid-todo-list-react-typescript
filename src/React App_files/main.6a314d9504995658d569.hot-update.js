webpackHotUpdate("main",{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ag_grid_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-react */ "./node_modules/ag-grid-react/main.js");
/* harmony import */ var ag_grid_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ag_grid_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-enterprise */ "./node_modules/ag-grid-enterprise/dist/ag-grid-enterprise.cjs.js");
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
var _jsxFileName = "/Users/ahmedgadir/GitHub/renderers-as-editors/src/App.js";


 // import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';







 // tooltip for the dates saying you have X days remaining 

class DateRenderer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //  forwardRef((props, ref) => {
  //   const [selectedDate, setSelectedDate] = useState(null);
  //   function handleDateChange(d) {
  //     if (d) {
  //       d.setHours(0, 0, 0, 0);
  //     }
  //     setSelectedDate(d);
  //   }
  //   useImperativeHandle(ref, () => {
  //     return {
  //       getValue: () => {
  //         let dateString = null;
  //         if (selectedDate) {
  //           dateString = format(selectedDate, 'dd/MM/yyyy');
  //         }
  //         return dateString;
  //       },
  //       isCancelAfterEnd: () => {
  //         return !selectedDate;
  //       },
  //       afterGuiAttached: () => {
  //         if (!props.value) {
  //           return;
  //         }
  //         const [_, day, month, year] = props.value.match(/(\d{2})\/(\d{2})\/(\d{4})/);
  //         let selectedDate = new Date(year, month - 1, day);
  //         setSelectedDate(selectedDate);
  //       }
  //     };
  //   });
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["MuiPickersUtilsProvider"], {
      utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_6__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["KeyboardDatePicker"], {
      style: {
        width: '100%',
        margin: '10px 0',
        padding: '6px 10px'
      },
      margin: "normal",
      id: "date-picker-dialog",
      format: "dd/MM/yyyy" // value={selectedDate}
      // onChange={handleDateChange}
      ,
      value: new Date(),
      variant: "inline",
      disableToolbar: true // placeholder={'Enter ' + props.column.colId}
      ,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }
    }));
  }

} // })


class ToDoRenderer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    // console.log('[ToDoRenderer] Constructor')
    super(props);

    this.componentDidMount = () => {
      this.setState({
        editingVal: this.props.value
      });
    };

    this.destroy = () => {};

    this.toggleEdit = () => {
      console.log(this.props.getCurrentlyEditingId());

      if (this.props.getCurrentlyEditingId() !== null) {
        alert('youre already editing');
        return;
      }

      this.setState(prevState => ({
        editing: !prevState.editing
      }), () => {
        console.log('letting grid know', this.state.editing, this.props.data.id);
        this.props.letGridKnow(this.state.editing ? this.props.data.id : null);
      });
    };

    this.finishEdit = bool => {
      if (bool) {
        this.props.node.setDataValue(this.props.column.colId, this.state.editingVal);
      }

      this.setState({
        editing: false,
        editingVal: this.props.value
      });
      this.props.letGridKnow(null);
    };

    this.state = {
      editing: false,
      editingVal: null
    };
  }

  render() {
    let component = null;

    if (this.state.editing) {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.state.editingVal,
        onChange: e => this.setState({
          editingVal: e.target.value
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: () => this.finishEdit(true),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }
      }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: () => this.finishEdit(false),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }
      }, "Cancel"));
    } else {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          textDecoration: this.props.data.completed ? 'line-through' : 'none' // color: this.props.data.completed ? 'darkgrey' : 'black'

        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 19
        }
      }, this.props.value);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onDoubleClick: this.toggleEdit,
      className: "todowrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 7
      }
    }, component);
  }

}

class CompletedRenderer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.componentDidMount = () => {
      this.setState({
        completed: this.props.value
      });
    };

    this.setCompleted = bool => {
      this.setState({
        completed: bool
      }, () => {
        this.props.node.setDataValue(this.props.column.colId, bool);
        this.props.api.redrawRows({
          rowNodes: [this.props.node],
          force: true
        });
      });
    };

    this.deleteToDo = () => {
      if (window.confirm('Are you sure youd like to delete this row?')) {
        this.props.deleteToDo(this.props.node.id);
      }
    };

    this.state = {
      completed: null
    };
  }

  render() {
    let component;

    if (this.state.completed) {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "completed-icon",
        onClick: () => this.setCompleted(false),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 19
        }
      }, "\u2714");
    } else {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "uncompleted-icon",
        onClick: () => this.setCompleted(true),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 19
        }
      }, "\u2714");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, component);
  }

}

class DeleteRenderer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.componentDidMount = () => {};

    this.deleteToDo = () => {
      if (window.confirm('Are you sure youd like to delete this row?')) {
        this.props.deleteToDo(this.props.node.id);
      }
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "delete-icon",
      onClick: this.deleteToDo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 7
      }
    }, "\u2A09");
  }

}

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.componentDidMount = () => {
      this.inputRef.current.focus();
    };

    this.addToDo = () => {
      console.log('add to do');

      if (!this.state.inputVal) {
        return;
      }

      let rowData = this.state.rowData.map(row => ({ ...row
      }));
      console.log('adding a row with id', this.state.idSeq);
      rowData.push({
        description: this.state.inputVal,
        id: this.state.idSeq,
        date: '',
        completed: false
      });
      this.setState(prevState => ({
        rowData,
        inputVal: '',
        idSeq: prevState.idSeq + 1
      }), () => {
        console.log('idSeq is now', this.state.idSeq);
      });
    };

    this.deleteToDo = id => {
      let rowData = this.state.rowData.filter(row => row.id !== id);
      this.setState({
        rowData
      });
    };

    this.state = {
      inputVal: '',
      idSeq: 1,
      columnDefs: [{
        headerName: 'Description',
        field: 'description',
        rowDrag: true,
        suppressMenu: true,
        flex: 3,
        cellRenderer: 'toDoRenderer',
        cellRendererParams: {
          letGridKnow: id => {
            console.log('letGridKnow', id);
            this.setState({
              currentlyEditingId: id
            }, () => {
              console.log('this.state.currentlyEditingId', this.state.currentlyEditingId);
            });
          },
          getCurrentlyEditingId: () => {
            console.log('getCurrentlyEditingId invoked');
            return this.state.currentlyEditingId;
          }
        }
      }, {
        headerName: 'Due Date',
        field: 'date',
        // hide: true,
        suppressMenu: true,
        width: 180,
        cellRenderer: 'dateRenderer'
      }, {
        headerName: 'Completed',
        field: 'completed',
        suppressMenu: true,
        width: 60,
        cellRenderer: 'completedRenderer'
      }, {
        headerName: 'Delete',
        cellRenderer: 'deleteRenderer',
        hide: true,
        width: 45,
        cellRendererParams: {
          deleteToDo: id => this.deleteToDo(id)
        }
      }],
      rowData: [{
        description: 'Hello World!',
        id: 0,
        date: '11/07/20',
        completed: false
      } // { description: 'World Hello!', id: 999, date: '23/04/20', completed: true },
      // { description: 'Hello! Sudan', id: 987, date: '19/11/20', completed: true },
      // { description: 'Goodbye Latin America Hello!', id: 599, date: '01/08/20', completed: false },
      // { description: 'Buy Coca-Cola', id: 666, date: '12/03/20', completed: true },
      ],
      frameworkComponents: {
        toDoRenderer: ToDoRenderer,
        dateRenderer: DateRenderer,
        completedRenderer: CompletedRenderer,
        deleteRenderer: DeleteRenderer
      },
      currentlyEditingId: null
    };
    this.inputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: 600,
        position: 'absolute',
        left: '50%',
        top: '30vh',
        transform: 'translateX(-50%)'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      style: {
        display: 'flex'
      },
      onSubmit: e => e.preventDefault(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      ref: this.inputRef,
      className: "to-do-input",
      value: this.state.inputVal,
      onChange: e => this.setState({
        inputVal: e.target.value
      }),
      placeholder: "Enter Task...",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      onClick: this.addToDo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 11
      }
    }, "+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ag-theme-alpine",
      style: {
        height: '100%',
        boxShadow: ''
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ag_grid_react__WEBPACK_IMPORTED_MODULE_2__["AgGridReact"], {
      columnDefs: this.state.columnDefs,
      rowData: this.state.rowData,
      frameworkComponents: this.state.frameworkComponents,
      immutableData: true,
      getRowNodeId: data => {
        console.log('getting id for ', data);
        return data.id;
      },
      domLayout: "autoHeight",
      headerHeight: 0,
      rowHeight: 65,
      getRowStyle: params => {
        if (params.node.data.completed) {
          return {
            background: 'lightgreen'
          };
        }
      },
      rowDragManaged: true,
      animateRows: true // sideBar={{
      //   toolPanels: [{
      //     id: 'columns',
      //     labelDefault: '',
      //     labelKey: 'columns',
      //     iconKey: 'columns',
      //     toolPanel: 'agColumnsToolPanel',
      //     toolPanelParams: {
      //       suppressRowGroups: true,
      //       suppressValues: true,
      //       suppressPivotMode: true,
      //       suppressColumnFilter: true
      //     }
      //   }]
      // }}
      ,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! ./ag-grid-logo.png */ "./src/ag-grid-logo.png"),
      style: {
        width: 200,
        margin: '40px auto 0',
        display: 'block'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=main.6a314d9504995658d569.hot-update.js.map