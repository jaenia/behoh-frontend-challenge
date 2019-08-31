import React from 'react'
import './index.css'

export default function ErrorMsg(props) {
  return (
      <span className='error-msg'>
        <i className="fas fa-exclamation-circle"></i>
        {`  ${props.msg}`}
      </span>
  )
}