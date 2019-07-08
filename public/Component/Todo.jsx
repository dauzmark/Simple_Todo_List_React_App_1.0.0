import React from "react";

//
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default class Todo extends React.Component {
  state = {
    todos: ["test_1", "test_2", "test_3"]
  };

  addTodo = todo => {
    const todos = [...this.state.todos];
    this.setState({ todos: [...todos, todo] });
  };

  delTodo = item => {
    const todos = [...this.state.todos];
    this.setState({ todos: todos.filter(todo => todo !== item) });
  };

  render() {
    return (
      <div>
        <h1>Simple Todo List | React App</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} delTodo={this.delTodo} />
      </div>
    );
  }
}
