import React from 'react'
import '../style.css'
import { Link } from 'react-router-dom'

const Header = ({cart}) => {
  return (
    <div className='menu'>
      <Link className='logo' to='/'>CoverMeChic</Link>
      <div className='links'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/cart'>Cart</Link>
       </div>
      <Link to={'/cart'}><span className='cart'>{cart}</span></Link>
    </div>
  )
}

export default Header
