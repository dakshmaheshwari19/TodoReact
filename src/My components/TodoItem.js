import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  return (
    <>
    <div className='todobox'>
      <div style={{font:"bold",fontSize:"2rem"}}>{todo.title}</div>
      <div>{todo.desc}</div>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
      <hr/>

    </div>
    </>
  )
}
