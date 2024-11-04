import React, { useContext } from 'react'
import logo from '../assets/NCN-logo.png'
import { Link } from 'react-router-dom'
import { CurrentUserContext } from '../contexts/current-user'

function Header() {

    const {currentUser} = useContext(CurrentUserContext)

  return (    
    <div className='header'>
    <nav >
        <img className='logo' src={logo} alt="North Coders news Logo, stylized red letters spelling NCN" />
        <Link to='/'><p>Home</p></Link>
        <p>Welcome {currentUser}</p>
    </nav>
    </div>    
  )
}

export default Header