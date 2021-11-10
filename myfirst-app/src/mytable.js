import React from 'react';
import './mytable.css';
const TableHeader = () => {
    return (
      <thead className="table-header" > 
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>city</th>
        </tr>
      </thead>
    )
  }

  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>{row.city}</td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }

  class Table extends React.Component {
    
    render() {
      const {characterData} = this.props
      return (
        <table>
        <TableHeader />
        <TableBody characterData={characterData} />
      </table>
      )
    }
  }
  class Samp extends React.Component {
    render() {
      const characters = [
        {
          name: 'Krish',
          job: 'Software Engineer',
          city: 'trivandrum'
        },
        {
          name: 'Minna',
          job: 'Artist',
          city: 'trivandrum'
        },
        {
          name: 'Deepa',
          job: 'HR',
          city: 'trivandrum'
        },
        {
          name: 'Ameer',
          job: 'Manager',
          city: 'banglore'
        },
        {
          name: 'Vijay',
          job: 'Analyst',
          city: 'mumbai'
        },
        {
          name: 'Chandu',
          job: 'System Engineer',
          city: 'panaji'
        },
      ]
  
      return (
        <div className="container">
          <Table characterData={characters} />
        </div>
        )
    }
  }

  export default Samp;