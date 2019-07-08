import React from "react";

export default class TodoForm extends React.Component {
  state = {
    todo: ""
  };

  handleChange = e => {
    this.setState({ todo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.todo}
          onChange={this.handleChange}
        />
        <input type="submit" value="Add Todo" />
      </form>
    );
  }
}
