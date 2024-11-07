import React, { useContext } from 'react'
import logo from '../assets/NCN-logo.png'
import { Link } from 'react-router-dom'
import { CurrentUserContext } from '../contexts/current-user'



function Header() {
    const {currentUser} = useContext(CurrentUserContext)

  return (    
    <div className='header'>
    <nav >
      <div className='grid-container'>
        <Link id='logo-grid' to='/'><img className='logo' src={logo} alt="North Coders news Logo, stylized red letters spelling NCN" /></Link>
        <p id='user-greet'>Welcome {currentUser}</p>
        <Link to='/' id='home-link'><p>Home</p></Link>
        <Link to='/topics/' id='topics-link'><p>Topics</p></Link>
        <Link to='/article/post' id='post-link'><p>Post an Article</p></Link>
        </div>
    </nav>
    </div>    
  )
}

export default Header