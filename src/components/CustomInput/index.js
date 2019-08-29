import React from 'react'
import './index.css'

export default function CustomInput(props) {
  return (
    <div className='custom-input'>
      <label htmlFor={props.name}>{props.label} {props.required ? '*' : ''}</label>
      <input
        className = {props.isError ? 'invalid' : ''}
        placeholder = {props.placeholder}
        type = {props.type}
        name = {props.name}
        onChange = {props.onChange}
      />
    </div>  
  )
}