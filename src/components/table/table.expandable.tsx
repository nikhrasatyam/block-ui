import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import styled from 'styled-components';


const StyledTable = styled.div`
`;

const TableExpandable = ({ columns, data, expandRow }) => (
  <StyledTable>
    <BootstrapTable
      keyField="id"
      data={data}
      columns={columns}
      expandRow={expandRow}
    />
  </StyledTable>
);

export default TableExpandable;
