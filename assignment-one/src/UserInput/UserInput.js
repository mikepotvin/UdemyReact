import React from 'react'
import './UserInput.css'

const UserInput = (props) =>{
  return (
    <input className="UserInput" value={props.username} onChange={props.change} />
  )
}

export default UserInput