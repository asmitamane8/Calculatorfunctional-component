import React from 'react'
import "./Display.css"

function Display(props) {
  return (
    <div className='display'>

      <input  className="input" type="text" readOnly value={props.usersdata1}/>
    </div>
  )
}
export default Display;