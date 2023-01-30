import React, { useState } from 'react';
import "./App.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    event.preventDefault();
    if (!input) {
      alert('Please type something to add !!');
      return;
    }
    setTodos([...todos, input]);
    setInput('');
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const element = "DeX Todo List";

  return (
    <div >
      <div className='heading'>
      <h1 > {element} </h1>
      <form onSubmit={addTodo} className='form'>
        <input
          type="text"
          placeholder='Enter Todo Item Detail'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className='addbtn'>Add Todo</button>
      </form>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)} className='remove'>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
