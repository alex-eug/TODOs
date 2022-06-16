import React from 'react'
import TodoItem from './TodoItem/TodoItem'

export default function InputText() {
  return (
    <div className='input--container'>
        <form className='form'>   
            <label className='form--label' htmlFor="todo">Todo</label>
            <input  className="form--input" type="text" />
            <button className='form--button'>clic</button>
        </form>
    <h2 className='todo--list__title'></h2>
    <ul className='todo--list'>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
    </ul>
    </div>
  )
}

