import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const TableExpandable = ({ columns, data, expandRow }) => (
  <BootstrapTable
    keyField="id"
    data={data}
    columns={columns}
    expandRow={expandRow}
  />
);

export default TableExpandable;
