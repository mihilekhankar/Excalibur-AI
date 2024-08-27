import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'
import { useAuth0 } from "@auth0/auth0-react";

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();

    return (
        <div className='main'>
            <div className="nav">
                <li>
                    <p>Xcalibur</p>
                </li>
                <li>
                    {isAuthenticated && <img className="user-pic" src={user.picture} alt={user.name} />}
                </li>
                <li>
                    {isAuthenticated ? (
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                        </button>
                    ) : (
                        <button onClick={() => loginWithRedirect()}>Log In</button>
                    )}
                </li>

                {/* <img src={assets.user_icon} alt="" /> */}
            </div>
            <div className="main-container">

                {!showResult
                    ? <>

                        <div className="greet">
                            <p><span>Hello.</span></p>
                            {isAuthenticated && <p className="user-name"> {user.name} </p>}
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest places to visit in Mumbai</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Summarize the concept: domino effect  </p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Create me LinkedIn post for new job</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Give me new interview questions for React developer</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }

                        </div>
                    </div>
                }


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Xcalibur may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main