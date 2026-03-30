import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);

    const data = JSON.parse(localStorage.getItem("todos")) || [];

    this.state = {
      task: "",
      todos: data,
      editTask: null   // store task to edit
    };
  }

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  // 🔹 Add or Update
  handleSubmit = () => {
    if (!this.state.task) return;

    let todos = this.state.todos;

    if (this.state.editTask === null) {
      // ➕ Add
      todos.push(this.state.task);
    } else {
      // ✏️ Edit
      todos = todos.map((t) =>
        t === this.state.editTask ? this.state.task : t
      );
    }

    this.setState({
      todos: todos,
      task: "",
      editTask: null
    });

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // 🔹 Edit
  editTask = (t) => {
    this.setState({
      task: t,
      editTask: t
    });
  };

  // 🔹 Delete
  deleteTask = (t) => {
    const todos = this.state.todos.filter((item) => item !== t);

    this.setState({ todos });

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>To Do List</h2>

        {/* Input */}
        <input
          type="text"
          placeholder="Enter task"
          value={this.state.task}
          onChange={this.handleChange}
        />

        <button onClick={this.handleSubmit}>
          {this.state.editTask ? "Update" : "Add"}
        </button>

        <br /><br />

        {/* List */}
        <ul style={{ listStyle: "none" }}>
          {this.state.todos.map((t) => (
            <li key={t}>
              {t}

              <button
                onClick={() => this.editTask(t)}
                style={{ marginLeft: "10px" }}
              >
                Edit
              </button>

              <button
                onClick={() => this.deleteTask(t)}
                style={{ marginLeft: "5px" }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;