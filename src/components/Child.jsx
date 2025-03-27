import React from 'react'

const ChildComponentStyles = {
    border: "2px solid black",
    padding: "10px",
    margin: "10px"
}

const Child = (props) => {
  return (
    <div style={ChildComponentStyles}>
         <h1>Child Component</h1>
        {props.children}
    </div>
  )
}

export default Child