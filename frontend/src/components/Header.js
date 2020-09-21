import React from 'react'
import flag from '../static/flag.png'
import avatar from '../static/profile.png'
import { FiCheckSquare, FiMessageSquare, FiMail, FiCalendar, FiStar, FiSearch, FiBell } from 'react-icons/fi'
import { BsFullscreen } from 'react-icons/bs'

const Header = () => {
    return (
        <header>
            <nav className="pb-3 pt-2 bg-dark info-nav">
                <div className="left-nav">
                    <span className="ml-2"><FiCheckSquare /></span>
                    <span className="ml-2"><FiMessageSquare /></span>
                    <span className="ml-2"><FiMail /></span>
                    <span className="ml-2"><FiCalendar /></span>
                    <span className="ml-2"><FiStar /></span>
                </div>
                <div className="right-nav p-0">
                    <img src={flag} className="m-auto" width="16px" height="16px" alt="flag" />
                    <span className="ml-1">English</span>
                    <span className="ml-3"><FiSearch /></span>
                    <span className="ml-3"><BsFullscreen /></span>
                    <span className="ml-3"><FiBell /></span>
                    <span className="ml-3">
                        Username
                    </span>
                    <img src={avatar} className="img-fluid ml-3" alt="user" width="25px" height="25px" />
                    <span className="mr-3"></span>
                </div>

            </nav>
        </header>
    )
}

export default Header
