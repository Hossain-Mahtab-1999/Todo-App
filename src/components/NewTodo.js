import React, { useState } from 'react'
import style from './newTodo.module.css'

const NewTodo = (props) => {

  const[todo,setTodo] = useState ({ttile:'',desc:''});
  const{title, desc}= todo;

  const handleChange = (event) => {
    const name = event.target.name;
    setTodo((oldTodo) => {
      return {...oldTodo,[name] : event.target.value}
    })
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setTodo({title:'',desc:''});
    props.onAddTodo(todo);
  };



  return (
    <form className={style.form} onSubmit= {handleSubmit}>
        <div className={style.formdata}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name='title' value={title} onChange={handleChange}/>
        </div>
        <div className={style.formdata}> 
            <label htmlFor="desc">Description</label>
            <textarea type="text" id="desc" name='desc' value={desc} onChange={handleChange} />
        </div>
        
        <button type='submit'>Add Todo</button>
    </form>
  )
}

export default NewTodo
