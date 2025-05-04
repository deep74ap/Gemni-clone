import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import {Context} from '../../context/Context'

const Main = () => {

        const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);



  return (

    <div className='main'>
        <div className="nav">
            <p>Gemni</p>
            <img src={assets.user_icon} alt="" />

        </div>
        <div className="main-container">

            {!showResult 
            ?<>
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
            </> :
            <div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?
                    <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :
                    <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    
                </div>
            </div>
            }

            
            

            <div className="main-bottom">
                <div className="search-box">
                <input
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    onSent();
                                }
                            }}
                            value={input}
                            type="text"
                            placeholder="Ask Gemni"
                            name="search"
                            id="search"
                        />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input ?<img onClick={()=>onSent()} src={assets.send_icon} alt="" /> : null}
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