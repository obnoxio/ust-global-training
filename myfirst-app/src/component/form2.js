import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    studentid: '',
    studentname: '',
    location: '',
    course: '',
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
    const { name, job } = this.state;
  
    return (
      <form>
        <label htmlFor="studentid">Name</label>
        <input
          type="text"
          name="studentid"
          id="studentid"
          value={studentid}
          onChange={this.handleChange} />
        <label htmlFor="studentname">Name</label>
        <input
          type="text"
          name="studentname"
          id="studentname"
          value={studentname}
          onChange={this.handleChange} />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          value={location}
          onChange={this.handleChange} />
        <label htmlFor="course">Course</label>
        <input
          type="text"
          name="course"
          id="course"
          value={course}
          onChange={this.handleChange} />
          <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
  
}

export default Form;

