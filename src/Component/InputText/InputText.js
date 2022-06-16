import React, { useState } from 'react'
import TodoItem from './TodoItem/TodoItem'


export default function InputText() {
    //creation of a unique identifier
    const id = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    const [titleList, setTitleList] = useState([{ title: "Team Meeting", id: id(), check: false }, { title: "Trainning", id: id(), check: false }])
    const [input, setInput] = useState("")

    //delete a task
    const deleteTodo = (id) => {
        const findId = titleList.filter((elm) => {
            return elm.id !== id
        })
        setTitleList(findId)
    }
    //Controlled Components
    const inputText = (e) => {
        setInput(e.target.value)
    }
    //add a todo
    const addTodoList = (e) => {
        e.preventDefault()
        const newTodoList = [...titleList]
        const newInput = {}
        newInput.title = input
        newInput.id = id()
        newInput.check = false
        newTodoList.unshift(newInput)
        setTitleList(newTodoList)
        setInput("")
    }
    //check box
    const onCheck = (id) => {

        const findId = titleList.find((elm) => {
            return elm.id === id
        })
        //if checked todo goes bottom
        if (findId.check === false) {
            const newTodoList = titleList.filter((elm) => {
                return elm.id !== id
            })
            findId.check = true
            newTodoList.push(findId)
            setTitleList(newTodoList)

            //if unchecked todo goes up
        } else if (findId.check === true) {
            const newTodoList = titleList.filter((elm) => {
                return elm.id !== id
            })
            findId.check = false
            newTodoList.unshift(findId)
            setTitleList(newTodoList)

        }
    }

    return (
        <div className='input--container'>
            <form onSubmit={addTodoList} className='form'>
                <label className='form--label' htmlFor="todo">Todo</label>
                <input
                    className="form--input"
                    type="text"
                    value={input}
                    onInput={inputText}
                />
                <button className='form--button'>clic</button>
            </form>
            <h2 className='todo--list__title'>What i have to do:</h2>
            <ul style={{ listStyle: "none" }} className='todo--list'>
                {titleList.map((elm) => {
                    return (
                        <TodoItem
                            title={elm.title}
                            key={elm.id}
                            id={elm.id}
                            deleteTodo={deleteTodo}
                            onCheck={onCheck}
                            check={titleList.check}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

