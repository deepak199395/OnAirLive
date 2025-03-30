import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
   <>
   <header>
    <div className="container">
        <h1>CoroChat</h1>
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contacts">Contact</NavLink></li>

            </ul>
        </nav>
    </div>
   </header>
   </>
  )
}

export default Header
