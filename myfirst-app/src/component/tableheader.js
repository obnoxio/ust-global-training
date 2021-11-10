import React from 'react';
import './style.css'
const TableHeader = () => {
    return (
      <thead className="table-header" > 
        <tr>
          <th>custname</th>
          <th>city</th>
          <th>phone</th>
          <th>email</th>
          <th>Remove</th>
        </tr>
      </thead>
    )
  }

   export default TableHeader;