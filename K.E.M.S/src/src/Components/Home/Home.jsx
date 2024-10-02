import React from 'react'
import './Home.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Home = () => {
  return (
    <div className='hero Container' id='Home'>
    <div className="home-text">
        <h1>Kamil English Medium School 
            Kokkechal</h1>
        <p>Knowledge Is Power</p>
        <button className='btn'>Know More<img src={dark_arrow} alt="" /></button>
    </div>
    </div>
  )
}

export default Home