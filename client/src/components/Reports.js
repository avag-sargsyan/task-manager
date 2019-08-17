import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
    const [state, setState] = React.useState({
        columns: [
            { title: 'Name', field: 'name' },
            { title: 'Description', field: 'description' },
            { title: 'Estimation', field: 'estimation', type: 'numeric' },
            { title: 'Spent', field: 'spent', type: 'numeric' }
        ],
        data: [
            {"id":1,"name":"TN-123","description":"Description of TN-123\n","estimation":20,"spent":6,"status":null,"user_id":3},
            {"id":2,"name":"TN-456","description":"Description of TN-456\n","estimation":30,"spent":8,"status":null,"user_id":3}
        ],
    });

    return (
        <MaterialTable
            title="Reports"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.push(newData);
                            setState({ ...state, data });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data[data.indexOf(oldData)] = newData;
                            setState({ ...state, data });
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.splice(data.indexOf(oldData), 1);
                            setState({ ...state, data });
                        }, 600);
                    }),
            }}
        />
    );
}