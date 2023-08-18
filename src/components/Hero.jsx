import React from 'react'
import bgvid from '../bgvid.mp4'

const Hero = () => {
  return (
    
<div className="hero min-h-screen">
<video src={bgvid} autoPlay loop muted />
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold text-black">Helló</h1>
      <p className=" font-bold text-gray-800 py-6">Kiváncsi vagy milyen lesz az időjárás a nap folyamán?</p>
      <a href="#mytable" className="btn btn-gray-800">Tudd meg</a>
    </div>
  </div>
</div>
  )
}

export default Hero