import React, { useState } from 'react'
import TodoItem from './TodoItem/TodoItem'


export default function InputText() {
    //création d'un identifiant unique
    const id = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    const [titleList, setTitleList] = useState([{ title: "Team Meeting", id: id() }, { title: "Scrum Meeting", id: id() }])
    const [input, setInput] = useState()
    
    const deleteTodo = (id) => {
        const findId = titleList.filter((elm) => {
            return elm.id !== id
        })
        setTitleList(findId)
        console.log(titleList);
    }
    const inputText = (e) => {
        setInput(e.target.value)
    }
    const addTodoList = (e) => {
        e.preventDefault()
        const newTodoList = [...titleList]
        const newInput = {}
        newInput.title = input
        newInput.id = id()
        newTodoList.unshift(newInput)
        setTitleList(newTodoList)
    }
    const onCheck = (id) => {
        const findId = titleList.find((elm) => {
            return elm.id === id
        })
        if(titleList.indexOf(findId) !== titleList.length-1){
              deleteTodo(id)
              const newTodoList = titleList.filter((elm) => {
                return elm.id !== id
            })
              newTodoList.push(findId)
              console.log(newTodoList)
              setTitleList(newTodoList)
        }else{
            
        }
        
    }
    
    return (
        <div className='input--container'>
            <form onSubmit={addTodoList} className='form'>
                <label className='form--label' htmlFor="todo">Todo</label>
                <input
                    className="form--input"
                    type="text"
                    onInput={inputText}
                />
                <button className='form--button'>clic</button>
            </form>
            <h2 className='todo--list__title'>Ce que j'ai a faire</h2>
            <ul className='todo--list'>
                {titleList.map((elm) => {
                    return (
                        <TodoItem
                            title={elm.title}
                            key={elm.id}
                            id={elm.id}
                            deleteTodo={deleteTodo}
                            onCheck={onCheck}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

