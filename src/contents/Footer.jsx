import React from 'react'

import twitter from '../assets/Twitter.png'
import facebook from '../assets/Facebook.png'
import insta from '../assets/Instagram.png'
import github from '../assets/GitHub.png'

export default function Links(){
    return (
        <div className='logos'>
            <img src={twitter} className="logo" alt="twitter logo" />
            <img src={facebook} className="logo" alt="facebook logo" />
            <img src={insta} className="logo" alt="insta logo" />
            <img src={github} className="logo" alt="github logo" />
        </div>
    )
}