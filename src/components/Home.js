import React, { useState } from 'react'
import Todos from './Todos'

import {v4 as uuidv4} from 'uuid';

import style from './home.module.css'
import NewTodo from './NewTodo'

const Home = () => {

  const [todos, setTodos] = useState([]);

  const handleAddTodo = (todo) => {
    setTodos((oldTodos) => {
      return [...oldTodos,{ id: uuidv4(), todo}]
    })
  }

  const handleRemoveTodo = (id) =>{
    setTodos((oldTodos) => {
      return oldTodos.filter((todo) => todo.id !== id)
    })
  }

  return (
    <div className={style.container}>
      <h1 style={{color:'white'}}>My Todo App</h1>
      <NewTodo onAddTodo={handleAddTodo}/>
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home
