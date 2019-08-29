import React from 'react'
import './index.css'

export default function Select(props) {
  return (
    <div className='custom-select'>
      <label htmlFor={props.name}>{props.label} {props.required ? '*' : ''}</label>
      <select 
        onChange={props.onChange} 
        name={props.name}
        className = {props.isError ? 'invalid' : ''}  
      >
        <option value='' disabled defaultValue>
          {props.placeholder}
        </option>
        {props.options.map(element =>
          (
            <option key={element.label} value={element.value}>
              {element.label}
            </option>
          )  
        )}
      </select>
    </div>  
  )
}