import React from 'react'
import './Homelayout.css'
import Orbc from '../../components/Orb/Orb'
import Navigation from '../../components/Navigation/Navigation'

const Homelayout = () => {
  return (
    <div className='homelayout'>
     <Orbc/>
     <Navigation />
    </div>
  )
}

export default Homelayout