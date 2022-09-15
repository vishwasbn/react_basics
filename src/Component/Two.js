import React from 'react'

function Two(props) {
  return (
    <div style={{backgroundColor:'green', width:'50%'}}>
        <h1>Child Two {props.data}</h1>

    </div>
  )
}

export default Two