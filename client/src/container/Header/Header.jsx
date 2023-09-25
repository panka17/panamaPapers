import React from 'react'
import './header.scss'
import ParticleFlow from '../../components/ParticleFlow/ParticleFlow'
import { Link } from 'react-router-dom';
import {Navbar } from '../../components'


const Header = () => {
  return (
    <>
      <Navbar />
      <div className="header">
        <div className='background'>
          <ParticleFlow />
        </div>
    
        <div className='top-layer'>
          <div className='header-navbar'>
            <div className='header-navbar__logo' >
              <Link to="/"> <img src='https://www.docplanner.com/img/logo-default-group-en.svg?v=1' alt='logo' /></Link>
            </div>

            <div className='header-navbar__menu'>
              <ul>
                <li><a href='#about'>About</a></li>
                <li><a href='#features'>What We Do</a></li>
                <li><a href='#'>Login</a></li>
              </ul>
            </div>    

          </div>

          <div className='header-content'>
            <h1>Certify with Confidence, <br />Verify with Blockchain</h1>
            <Link to="/panel" className='link'>Get Started</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header