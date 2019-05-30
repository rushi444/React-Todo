// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';
import './Todo.css'

 const TodoList = (props) => {
        return (
            <div>
                  {props.todos.map(item =>
                     ( <Todo key={item.id} item={item} toggleComplete={props.toggleComplete} /> ))}
           </div>
        ); 
}

 export default TodoList;