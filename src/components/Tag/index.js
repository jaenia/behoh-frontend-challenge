import React from 'react'
import './index.css'

export default function Tag(props) {
  return (
    <span className='tag'>{props.text}</span>
  )
}