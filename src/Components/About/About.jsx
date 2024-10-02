import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
      <img src={about_img} alt='' className='about-img'/>
    </div>
    <div className="about-right">
      <h3>ICSB</h3>
      <h2>Our Mision & Vision</h2>
      <p>In antiquity, a paragraph often was a single thought—and often a single sentence,
         usually a very long one. 
        Writers today, however, tend not to go on the way classical authors did. 
        In academic writing, most paragraphs include at least three sentences,
         though rarely more than ten.</p>
         <p>What is a paragraph? Paragraphs are the building blocks of papers. 
          Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, 
          a paragraph is half a page long, etc.
           In reality,though, the unity and coherence of ideas among sentences is what constitutes a paragraph</p>
           <p>In antiquity, a paragraph often was a single thought—and often a single sentence,
         usually a very long one. 
        Writers today, however, tend not to go on the way classical authors did. 
        In academic writing, most paragraphs include at least three sentences,
         though rarely more than ten.</p>
         
    </div>
    </div>
  )
}

export default About