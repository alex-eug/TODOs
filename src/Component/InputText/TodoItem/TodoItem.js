import React from 'react'

export default function TodoItem({title,id,deleteTodo }) {
  

  return (
        <li className="li-list--item">
        <h3 className='li--text'>{title}</h3>
        <button className='li--button'onClick={()=>deleteTodo(id)} >Delete</button>
    </li>
  )
}
