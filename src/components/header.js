import React, { Component } from 'react'
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.scss'
import siteLogo from '../assets/saheb-giri.svg'
import NProgress from "nprogress"

class Header extends Component {
  
  modal = React.createRef();

  modalHandler(e) {
    if (e.target.tagName !== "LI" || e.target.tagName !== "NAV") {
      this.modal.current.style.display = "none";
    }
  }

  openModal(e) {
    this.modal.current.style.display = "block";
  }

  componentDidMount() {
    NProgress.start();
    NProgress.done();
  }

  render() {
    return (
      <header className={headerStyles.header}>
        <div className={headerStyles.container}>

          <div className={headerStyles.hamburger} onClick={this.openModal.bind(this)} role="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" /></svg>
          </div>

          <div className={headerStyles.mainSiteLogo}>
            <Link to="/"> <img src={siteLogo} alt="saheb Giri" /></Link>
          </div>

          <div className={headerStyles.about}>
            <Link to="/about">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM6.023 15.416C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>
            </Link>
          </div>

          <nav className={headerStyles.desktopNavMenu}>
            <ul>
              <li>
                <Link to="/" activeClassName={headerStyles.menuItemActive} replace >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" activeClassName={headerStyles.menuItemActive} replace>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" activeClassName={headerStyles.menuItemActive} replace>
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/tags" activeClassName={headerStyles.menuItemActive} replace>
                  Tags
                </Link>
              </li>
              <li>
                <Link to="/about" activeClassName={headerStyles.menuItemActive} replace>
                  About
                </Link>
              </li>
              {/* <li>
                <a href="https://google.com/" target="_blank" rel="noopener noreferrer">
                  RSS
                </a>
              </li> */}
            </ul>
          </nav>
        </div>

        <div className={headerStyles.modal} ref={this.modal} onClick={this.modalHandler.bind(this)}>
          <nav className={headerStyles.mobileNavMenu} id="target">
            <Link to="/" className={headerStyles.siteLogo}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" /></svg>
              <img src={siteLogo} alt="saheb Giri" />
            </Link>
            <ul>
              <li>
                <Link to="/" activeClassName={headerStyles.menuItemActive} replace >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20zM7 15v2h10v-2H7z" /></svg>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" activeClassName={headerStyles.menuItemActive} replace>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 7H4v9h16v-9zM5 6v2h2V6H5zm4 0v2h2V6H9z" /></svg>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" activeClassName={headerStyles.menuItemActive} replace>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M22 8v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7h19a1 1 0 0 1 1 1zm-9.586-3H2V4a1 1 0 0 1 1-1h7.414l2 2z" /></svg>
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/tags" activeClassName={headerStyles.menuItemActive} replace>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1zm3 7v2h8V9H8z" /></svg>
                  Tags
                </Link>
              </li>
              <li>
                <Link to="/about" activeClassName={headerStyles.menuItemActive} replace>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM6.023 15.416C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>
                About
                </Link>
              </li>
              {/* <li>
                <a href="https://google.com/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 3c9.941 0 18 8.059 18 18h-3c0-8.284-6.716-15-15-15V3zm0 7c6.075 0 11 4.925 11 11h-3a8 8 0 0 0-8-8v-3zm0 7a4 4 0 0 1 4 4H3v-4z" /></svg>
                RSS
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </header >
    )
  }

}

export default Header