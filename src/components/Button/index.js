import React from 'react'
import './index.css'

export default function Button(props) {
  return (
    <button className='button-submit'>
      {props.text}
    </button>
  )
}