export default [
    {
        headerName: 'Complete',
        cellRenderer: 'checkboxRenderer',
        pinned: 'left',
        width: 50,
    },
    {
        headerName: 'Task',
        field: 'task',
        cellRenderer: 'taskRenderer',
        rowDrag: true,
        flex: 1,
    },
    {
        headerName: 'deadline',
        field: 'deadline',
        cellRenderer: 'dateRenderer',
        tooltipValueGetter: this.tooltipValueGetter,
        width: 170,
    },
    {
        headerName: 'Actions',
        cellRenderer: 'actionsRenderer',
        cellRendererParams: {
            deleteToDo: this.deleteToDo
        },
        width: 90,
    },
];