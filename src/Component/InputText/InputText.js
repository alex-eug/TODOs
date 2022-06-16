import React, { useState } from 'react'
import TodoItem from './TodoItem/TodoItem'


export default function InputText() {
    //création d'un identifiant unique
    const id = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const [titleList, setTitleList] = useState([{ title: "Team Meeting", id: id() }, { title: "Scrum Meeting", id: id() }])

    const deleteTodo = (id) => {
       const findId = titleList.filter((elm)=>{
            return elm.id!==id
        })
        setTitleList(findId)
        console.log(titleList);
    }

    return (
        <div className='input--container'>
            <form className='form'>
                <label className='form--label' htmlFor="todo">Todo</label>
                <input className="form--input" type="text" />
                <button className='form--button'>clic</button>
            </form>
            <h2 className='todo--list__title'></h2>
            <ul className='todo--list'>
                {titleList.map((elm) => {
                    return (
                        <TodoItem
                            title={elm.title}
                            key={elm.id}
                            id={elm.id}
                            deleteTodo={deleteTodo}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

