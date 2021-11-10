import React from 'react';
import TableHeader from './tableheader';
import TableBody from './tablebody';
import Form from './form';
import './style.css'
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