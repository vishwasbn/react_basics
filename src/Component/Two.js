import React, {useContext} from 'react'
import {AppContext} from '../Context'

function Two(props) {

  // const state = useContext(AppContext);
  // const {data} = useContext(AppContext);
  const {count} = useContext(AppContext);
  return (
    <div style={{backgroundColor:'green', width:'50%'}}>
        {/* <h1>Child Two {state.data}</h1> */}
        {/* <h1>Child Two {data}</h1> */}
        <h1>Child Two {count}</h1>

    </div>
  )
}

export default Two