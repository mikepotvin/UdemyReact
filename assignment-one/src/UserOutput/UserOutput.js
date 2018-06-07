import React from 'react';
const UserOutput = (props) =>{
  return (
    <div style={style}>
      <p> Username : {props.username} </p>
      <p> Is Online! </p>
    </div>
  )
}

const style = {
  backgroundColor: 'lightgrey'
}

export default UserOutput