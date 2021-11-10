import { useState } from 'react'
import AddContact from './add-details'
import './style.css'

import { Table } from './table1'

export default function App() {

  const columns = [
    { accessor: 'name', label: 'Name' },
    { accessor: 'age', label: 'Age' },
    { accessor: 'is_manager', label: 'Manager', format: (value) => (value ? '✔️' : '✖️') },
    { accessor: 'start_date', label: 'Start Date' },
  ]

  const [rows, setRows] = useState([
    
    { id: 1, name: 'Rahul', age: 36, is_manager: true, start_date: '02-28-1999' },
    { id: 2, name: 'Bob', age: 40, is_manager: true, start_date: '03-05-1997' },
    { id: 3, name: 'Tracy Morgan', age: 39, is_manager: false, start_date: '07-12-2002' },
    { id: 4, name: 'Jenna Maroney', age: 40, is_manager: false, start_date: '02-28-1999' },
    { id: 5, name: 'Kenneth Parcell', age: Infinity, is_manager: false, start_date: '01-01-1970' },
    { id: 6, name: 'Pete Hornberger', age: 42, is_manager: true, start_date: '04-01-2000' },
    { id: 7, name: 'Frank Rossitano', age: 36, is_manager: false, start_date: '06-09-2004' },
    { id: 8, name: null, age: null, is_manager: null, start_date: null },
    { id: 9, name: 'Momien', age: 26, is_manager: true, start_date: '02-28-2019' },
    { id: 10, name: 'Visal', age: 31, is_manager: true, start_date: '02-28-2015' },
    { id: 11, name: 'Munna', age: 37, is_manager: true, start_date: '05-15-2017' },
    { id: 12, name: 'Arushi', age: 33, is_manager: false, start_date: '09-14-2013' },
    { id: 13, name: 'Mohan', age: 34, is_manager: false, start_date: '10-15-2013' },
    { id: 14, name: 'David', age: 32, is_manager: false, start_date: '11-24-2013' },
  ]);

  const handleAddContact = (c) => {

    setRows(rows.concat([c]));
  }

  return (
    <div className="App">

      <h1>Table Data: Sorting, Filtering, Pagination.</h1>

      <Table rows={rows} columns={columns} />
      <AddContact onAddContact={handleAddContact} />
    </div>
  )
}