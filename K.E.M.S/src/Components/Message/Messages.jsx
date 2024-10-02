import React, { useRef } from 'react'
import './Messages.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import  icon_1 from'../../assets/icons-1.png'
import  icon_2 from'../../assets/icons-2.png'
import  icon_3 from'../../assets/icons-3.png'
const Messages = () => {

    const slider = useRef();
    let tx = 0;
        const slideForward = ()=>{
          if(tx > -50){
            tx -= 25;
          }
          slider.current.style.transform = `translateX(${tx}%)`
        }
        const slideBackward = ()=>{
          if(tx < 0){
            tx += 25;
          }
          slider.current.style.transform = `translateX(${tx}%)`
        }

  return ( 
    <div className='message' id='messages'>
      <img src={next_icon}alt="" className='next-btn' onClick=
      {slideForward}/>
      <img src={back_icon} alt="" className='back-btn'onClick=
      {slideBackward}/>

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={icon_1} alt="" />
                <div>
                  <h3>Mohammed fayaz</h3>
                  <span>1st class Teachers</span>
                </div>
              </div>
              <p>In antiquity, a paragraph often was a single thought—and often a single sentence,
         usually a very long one. 
        Writers today, however, tend not to go on the way classical authors did. </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={icon_2} alt="" />
                <div>
                  <h3>Mohammed fayaz 2</h3>
                  <span>1st class Teachers</span>
                </div>
              </div>
              <p>In antiquity, a paragraph often was a single thought—and often a single sentence,
         usually a very long one. 
        Writers today, however, tend not to go on the way classical authors did. 
       </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={icon_3} alt="" />
                <div>
                  <h3>Mohammed fayaz 3</h3>
                  <span>1st class Teachers</span>
                </div>
              </div>
              <p>In antiquity, a paragraph often was a single thought—and often a single 
                  sentence,usually a very long one. 
                  Writers today, however, tend not to go on the way classical authors did. 
                  </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={icon_1} alt="" />
                <div>
                  <h3>Mohammed fayaz 4</h3>
                  <span>1st class Teachers</span>
                </div>
              </div>
              <p>In antiquity, a paragraph often was a single thought—and often a single sentence,
         usually a very long one. 
        Writers today, however, tend not to go on the way classical authors did. 
        </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Messages
