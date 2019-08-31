import React from 'react'
import FormContainer from '../../containers/FormContainer'
import HeroContainer from '../../components/HeroSection'

export default function Home(props) {
  return (
    <>
      <HeroContainer/>
      <FormContainer/>
      <div className='footer'>
        <p>
          Made with <i className="far fa-heart"/> By <a href='https://github.com/jaenia'>Jaênia</a>
        </p>
        
      </div>
    </>
  )
}