import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  }
  addTodo = item => {
    this.setState({
      todos: [
        ...this.state.todos,
        { name: item, completed: false, id: Date.now() }
      ]
    });
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    });
  };

  removeCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className='App'>
        <h1>Todo List App</h1>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <button class='clearbutton' onClick={this.removeCompleted}>Clear Finished</button>


      </div>
    )
  }


}



export default App; 