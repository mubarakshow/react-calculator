import React from 'react'

const Button = props => { 
  return  (
    <button
      className={props.className}
      name={props.name}
      onClick={() => props.onClick(props.name)}
    >
      {props.children}
    </button>
  )
}
 

export default Button;