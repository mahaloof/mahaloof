import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Messages from './Components/Message/Messages'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className="Container">
        <Title subTitle='OUR PROGRAM' title='Explore Our Initiatives'/>
        <Program/>
        <About/>
        <Title subTitle='MESSAGES' title='Voices of Our Community'/>
        <Messages/>
        <Title subTitle='GALLERY' title='Our Memories'/>
        <Campus/>
        <Title subTitle='CONTACT US' title='Get in Touch'/>
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default App