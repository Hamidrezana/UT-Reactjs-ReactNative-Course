import React from 'react'

const TodoItem = (props) => {
    const pDoneStyle = {
        textDecoration: 'line-through'
    }
    const container = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return (
        <div style={container}>
            <p style={props.todo.isDone ? pDoneStyle : null}>{props.todo.title}</p>
            <button onClick={props.delete}>Delete</button>
            <input type="checkbox" defaultChecked={props.todo.isDone} onChange={props.handleChangeChk} />
        </div>
    )
}


export default TodoItem