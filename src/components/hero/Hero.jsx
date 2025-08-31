import React from 'react'
import './Hero.css'
import Welcome from './Welcome'

const Hero = () => {
  return (
    <div className='hero  relative h-[700px] w-[100vw] bg-cover text-[#ffff] '>
      <div className="hero-content absolute top-[50%] left-[50%] z-2 text-center ">
        <Welcome />
      </div>
    </div>
  )
}

export default Hero
