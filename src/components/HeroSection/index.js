import React from 'react'
import './index.css'
import {Parallax, Background} from 'react-parallax'
import bg from '../../assets/png/Imagem 1.png'

export default function HeroContainer(props) {
  return (
    <div className='hero-section'>
      <div className='hero-image-mobile' />
      <Parallax 
        className='hero-image'
        bgImage={bg}
        strength={200}
        bgImageStyle={{heigth: '100vh'}}
        blur={{min: -5, max:10}}
      />
      <div className='button-wrapper' >
        <div className='hover-button'>
          <svg 
            version="1.1" 
            id="Camada_2" 
            xmlns="http://www.w3.org/2000/svg" 
            xmlnsXlink="http://www.w3.org/1999/xlink" 
            x="0px" 
            y="0px"
            viewBox="0 0 512 512" 
            xmlSpace="preserve"
          >
            <path 
              className="st0" 
              d="M112.1,246.5l60.6,60.6l-27.3,27.3l-73.9-73.9l-0.8-0.8c-7.3-7.3-7.3-19.2,0-26.6l0.8-0.8l73.9-73.9l27.3,27.3
              L112.1,246.5z"
            />
            <path 
              className="st0" 
              d="M296,163.2L245.4,372h-14.8c-12.2,0-21.1-11.4-18.3-23.2L262.9,140h14.8C289.9,140,298.8,151.4,296,163.2z"
            />
            <path 
              className="st0" 
              d="M441.3,259.8l-0.8,0.8l-73.9,73.9l-27.3-27.3l60.6-60.6l-60.6-60.6l27.3-27.3l74.6,74.6
              C448.6,240.6,448.6,252.5,441.3,259.8z"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}