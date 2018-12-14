import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// Bootstrap
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
// data
import { todos } from "./todos.json"
// subcomponents
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodo(todo) {
    this.setState({
      todos:[...this.state.todos, todo]
    })
  }
  removeTodo(index){
    this.setState({
        todos:this.state.todos.filter((todo, i) => {
          return i != index
        })
    })
  }
  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4 my-4" key = {i}>
          <div className="card">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className=" badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p className="font-weight-bold"> {todo.responsable}</p>
            </div>
            <div className = "card-footer">
            <button 
            class="btn-md btn-default btn-rounded"
            onClick = {this.removeTodo.bind(this, i)}
            ><i class="fa fa-trash "></i> </button>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <img src={logo} className="App-logo" alt="logo" />        
           <a href="" className="text-white">
            TASKS
          <span className="badge badge-pill badge-light ml-2 ">
              {this.state.todos.length}
            </span>
          </a>
        </nav>
        <div className = "container mt-4">
          <div className = "row">
        <div className="col-md-4">
          <TodoForm onAddTodo = {this.handleAddTodo}/>
        </div>
        <div className="col-md-8">
          <div className="row">
            {todos}
          </div>
        </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
