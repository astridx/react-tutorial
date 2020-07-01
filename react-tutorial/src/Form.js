import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      name: "",
      aufgabe: "",
    };

    this.state = this.initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }

  render() {
    const { name, aufgabe } = this.state;

    return (
      <form>
        <label for="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={this.handleChange}
        />
        <label for="aufgabe">Aufgabe</label>
        <input
          type="text"
          name="aufgabe"
          id="aufgabe"
          value={aufgabe}
          onChange={this.handleChange}
        />
        <input type="button" value="Neuen Listeneintrag absenden" onClick={this.submitForm} />
      </form>
    );
  }
}
export default Form;
