import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';



const CustomDataTable = ({ data = [], columns = [] }) => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}

export default CustomDataTable;