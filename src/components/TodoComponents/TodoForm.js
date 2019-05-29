import React from 'react';

 const TodoForm = ({taskTitle, handleChange, addToList}) => {
return (
    <form>
        <h4>Input Todos</h4>
        <input
        type='text'
        value={taskTitle}
        onChange={handleChange}
        />
        <input
        type="button"
        value="Submit"
        onClick={addToList}
         />
    </form>
)
}

 export default TodoForm;