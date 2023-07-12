import React from 'react'
import emailLogo from '../assets/Icon.png'
import linkedInLogo from '../assets/Vector.png'
import profile from '../assets/profile.png'

export default function Info(){
    return (
        <div className='info'>
        <img src={profile} className="profile" alt="Profile Picture" />
        <h1 className='name'>Matthew Kokin</h1>
        <p className='job'>Full-Stack Developer</p>
        <p className='web'>matthewkokin.website</p>
        <div className="btns">
            <button id="email-btn">
                <img src={emailLogo} className="logo" alt="Email logo" />
                <p>Email</p>
            </button>
            <button id="linkedin-btn">
                <img src={linkedInLogo} className="logo" alt="Email logo" />
                <p>LinkedIn</p>
            </button>
        </div>
        </div>
    )
}