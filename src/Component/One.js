import React from 'react'
import Two from './Two'

function One(props) {
  return (
    <div style={{backgroundColor:'lightskyblue', width:'75%'}}>
        <h1>Child One</h1>
        <Two data={props.data}></Two>
    </div>
  )
}

export default One