import React from 'react'
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.container}>
        <div>
          <h1 className={headerStyles.siteLogo}><Link to="/">Saheb Giri</Link></h1>
        </div>
        <nav className={headerStyles.navMenu}>
          <ul>
            <li><Link className={headerStyles.navItem} to="/">Blog</Link></li>
            <li><Link className={headerStyles.navItem} to="/projects">Projects</Link></li>
            <li><Link className={headerStyles.navItem} to="/resume">Resume</Link></li>
            <li><Link className={headerStyles.navItem} to="/about">About</Link></li>
            <li><Link className={headerStyles.navItem} to="/">RSS</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header