import React from 'react'
const validation = (props) => {
  let output = null;

  if (props.textLength >= 5) {
    output = 'Text long enough';
  } else {
    output = 'Text too short';
  }

  return (
    <p> {output} </p>
  )
}

export default validation; 