import React from 'react'
import '../style.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='menu'>
      <Link to='/'>CoverMeChic</Link>
      <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/cart'>Cart</Link>
      </div>
    </div>
  )
}

export default Header
