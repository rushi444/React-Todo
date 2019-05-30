import React from 'react';
import './Todo.css';

 const Todo = (props) => {
    let classNames = 'item'; 
    if (props.item.completed) {
        classNames += ' completed'; 
    }

    function updateSelected() {
        props.toggleComplete(props.item.id); 
    }

    return (
        <div className={classNames} onClick={updateSelected}>
            <p>{props.item.name}</p>
        </div>
    ); 
}

 export default Todo;

