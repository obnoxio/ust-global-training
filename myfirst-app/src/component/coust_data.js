import React from 'react';
import '../mytable.css';
import Form from '../components/coust_form';
const TableHeader = () => {
    return (
      <thead className="table-header" > 
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Phone No</th>
          <th>Email</th>
          <th>Remove</th>
        </tr>
      </thead>
    )
  }

  const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.city}</td>
          <td>{row.phoneno}</td>
          <td>{row.email}</td>
          <td>
              <button className="button-del" onClick={()=>props.removeCharacter(index)}>Delete</button>
          </td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
  }
const Table= (props)=> {
    
    const{characterData,removeCharacter} =props
      
      return (
        <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter} />
      </table>
      )
    
  }
class StateData extends React.Component {
      state={
          characters:[],
      }
      removeCharacter = (index) => {
        const {characters} = this.state
      /*filter does not mutate but rather creates a new array,
       and is a preferred method for modifying arrays in JavaScript. */
        this.setState({
          characters: characters.filter((character, i) => {
            return i !== index
          }),
        })
      }
 handleSubmit = (character) => {
        this.setState({characters: [...this.state.characters, character]})
      }
    render() {
      const {characters} =this.state
      return (
        <div className="container">
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
            <Form handleSubmit={this.handleSubmit}/>
        </div>
        )
    }
  }

export default StateData;
