import React, { Component } from 'react'
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.scss'

import siteLogo from '../assets/saheb-giri.svg'
import searchIcon from '../assets/standard-action-search.svg'
import menuIcon from '../assets/standard-navigation-menu.svg'


class Header extends Component {


  render() {
    return (
      <header className={headerStyles.header}>
        <div className={headerStyles.container}>

          <div className={headerStyles.hamburger}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" /></svg>

          </div>

          <div>
            <Link to="/"><img src={siteLogo} /></Link>
          </div>

          <div className={headerStyles.search}>
            <img src={searchIcon} alt="Search Icon" />
          </div>
        </div>

        <div className={headerStyles.modal}>
          <nav className={headerStyles.mobileNavMenu}>
            <Link to="/" className={headerStyles.siteLogo}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" /></svg>

            </Link>
            <ul>
              <li>
                <Link to="/projects" activeClassName={headerStyles.menuItemActive}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M17 7a8.003 8.003 0 0 0-7.493 5.19l1.874.703A6.002 6.002 0 0 1 23 15a6 6 0 0 1-6 6H7A6 6 0 0 1 5.008 9.339a7 7 0 0 1 13.757-2.143A8.027 8.027 0 0 0 17 7z" /></svg>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" activeClassName={headerStyles.menuItemActive}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M22 8v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7h19a1 1 0 0 1 1 1zm-9.586-3H2V4a1 1 0 0 1 1-1h7.414l2 2z" /></svg>
                  Resume
                </Link></li>
              <li>
                <Link to="/about" activeClassName={headerStyles.menuItemActive}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M4 22a8 8 0 1 1 16 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z" /></svg>
                About
                </Link>
              </li>
              <li>
                <a href="https://google.com/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 3c9.941 0 18 8.059 18 18h-3c0-8.284-6.716-15-15-15V3zm0 7c6.075 0 11 4.925 11 11h-3a8 8 0 0 0-8-8v-3zm0 7a4 4 0 0 1 4 4H3v-4z" /></svg>
                RSS
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header >
    )
  }

}

export default Header