import React from 'react'
import Child from './Child'


const ParentComponentStyles = {
    border: "2px solid red",
    padding: "10px",
    margin: "10px"

}

const Parent = (props) => {
  return (
    <div style={ParentComponentStyles}>
        <h1>Parent Component</h1>
        {props.children}
    </div>

  )
}

export default Parent