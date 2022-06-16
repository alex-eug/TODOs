import React from 'react'


import './todoItem.css'

export default function TodoItem({ title, id, deleteTodo, onCheck }) {
  
  return (
    <li className="li-list--item">
      <h3 className='li--text'>{title}</h3>
      <form className='li--form' >
        <label className='form--label' htmlFor="todo">Done</label>
        <input onClick={() => onCheck(id)} type="checkbox" name="done" id="done" />
      </form>
      <button className='li--button' onClick={() => deleteTodo(id)} >Delete</button>
    </li>
  )
}
