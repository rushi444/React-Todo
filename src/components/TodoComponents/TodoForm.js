import React from 'react';
import './Todo.css';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }; 
    }

    onUpdate = event => {
        this.setState({[event.target.name]: event.target.value}); 
    }; 

    handleSubmit = event => {
        event.preventDefault(); 
        this.props.addTodo(this.state.input); 
        this.setState({ input: ''}); 
    }; 

    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <input 
                class='textinput'
                type='text' 
                name='input' 
                id='new-item' 
                value={this.state.input} 
                onChange={this.onUpdate} 
                 />
                 <button class='submitbutton' type='submit'>Add Task</button>

            </form>
        )
    }

}

export default TodoForm;