import React from 'react';
import './style.css'
const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.custname}</td>
          <td>{row.city}</td>
          <td>{row.phone}</td>
          <td>{row.email}</td>
          <td> 
              <button className="button-del" onClick={()=>props.removeCharacter(index)}>Delete</button>
          </td>
        </tr>
      )
    })

    return <tbody>{rows}</tbody>
  }
  export default TableBody;