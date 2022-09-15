import React from 'react'
import One from './One'

function Profile(props) {
  return (
    <div style={{backgroundColor:'orange',width:'100%'}}>
      <h1>Profile</h1>
      <One data={props.data}></One>
    </div>
  )
}

export default Profile