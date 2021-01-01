import * as React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-left'>
                <h1>Rachel Berkun</h1>
            </div>
            <div className='header-right'>
                <a href='#'>
                    About Me
                </a>
                <a href='#'>
                    Projects
                </a>
                <a href='#'>
                    Contact
                </a>
            </div>
        </div>
    )
}

export default Header