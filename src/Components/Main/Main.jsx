import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemni</p>
            <img src={assets.user_icon} alt="" />

        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Deepak</span></p>
                <p>How canI help You?</p>
            </div> 
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful place</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Breifly summarize about topic : React</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Write email to manager.</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Optimze the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>

            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Ask Gemni' name="search" id="search" />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Gemni may display inaccurate info, inclusing about pepople,so double-check its result.
                </p>

            </div>

        </div>
    </div>
  )
}

export default Main