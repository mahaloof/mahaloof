import React from 'react'
import './Home.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Home = () => {
  return (
    <div className='hero Container' id='Home'>
    <div className="home-text">
        <h1>P.A COLLAGE OF ENGINEERING</h1>
        <center><h2>ICSB</h2></center>
        <p>IOT|CYBER SECURITY|BLOCK CHAIN</p>
        <button className='btn'>Know More<img src={dark_arrow} alt="" /></button>
    </div>
    </div>
  )
}

export default Home