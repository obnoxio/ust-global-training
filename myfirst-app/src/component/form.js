import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    custname: '',
    city: '',
    phone: '',
    email: '',
  }
   
  state = this.initialState
  handleChange = (event) => {
    const {name, value} = event.target
  
    this.setState({
      [name]: value,
    })
  }
  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  render() {
    const { custname,city,phone,email } = this.state;
  
    return (
      <form>
        <label htmlFor="custname">custname</label>
        <input
          type="text"
          name="custname"
          id="custname"
          value={custname}
          onChange={this.handleChange} />
       
        <label htmlFor="city">city</label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={this.handleChange} />
        
        <label htmlFor="phone">phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          value={phone}
          onChange={this.handleChange} />

        <label htmlFor="email">email</label>
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={this.handleChange} />

        <input type="button" value="Submit" onClick={this.submitForm} />

      </form>
    );
  }
}
export default Form;