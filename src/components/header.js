import React, { Component } from 'react'
import { Link } from 'gatsby'

import headerStyles from '../styles/header.module.scss'
import siteLogo from '../assets/saheb-giri.svg'

class Header extends Component {
  constructor() {
    super();
  }
  modal = React.createRef();

  modalHandler(e) {
    if (e.target.tagName !== "LI" || e.target.tagName !== "NAV" ) {
      this.modal.current.style.display = "none";
    }
  }
  
  openModal(e)
  {
    this.modal.current.style.display = "block";
  }
  
  render() {
    return (
      <header className={headerStyles.header}>
        <div className={headerStyles.container}>

          <div className={headerStyles.hamburger} onClick={this.openModal.bind(this)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" /></svg>
          </div>

          <div className={headerStyles.mainSiteLogo}>
            <Link to="/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 627.11 82.92"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path className="cls-1" d="M32.52,82.8Q11.88,82.8,0,70.08l7.8-10.8a33.32,33.32,0,0,0,25.32,11q8,0,12.06-3.24a9.62,9.62,0,0,0,4-7.68q0-4.56-4.8-7.26a43.42,43.42,0,0,0-11.64-4.26Q25.92,46.32,19,44.16a26.5,26.5,0,0,1-11.7-7.32q-4.8-5.16-4.8-13.32a20.79,20.79,0,0,1,8.1-16.74Q18.72.12,31.68.12q18.48,0,30,11.16l-8,10.44Q44.52,12.6,30.48,12.6q-6.24,0-9.9,2.7a8.56,8.56,0,0,0-3.66,7.26,6.2,6.2,0,0,0,2.58,5,20.32,20.32,0,0,0,6.66,3.3q4.08,1.26,9.06,2.46t10,2.94a46.14,46.14,0,0,1,9.06,4.26,19.54,19.54,0,0,1,6.66,7,20.66,20.66,0,0,1,2.58,10.56,22.74,22.74,0,0,1-7.8,17.76Q47.88,82.8,32.52,82.8Z" /><path className="cls-1" d="M147.24,81.36h-16L125.4,66H88.68L82.8,81.36h-16l31.44-80H115.8Zm-25.8-27.72L107,15.48,92.64,53.64Z" /><path className="cls-1" d="M225.72,81.36h-14V46.44H170V81.36H156v-80h14V34.08h41.64V1.32h14Z" /><path className="cls-1" d="M297.6,81.36H242.76v-80H297.6V13.68H256.8V34.44h40V46.8h-40V69h40.8Z" /><path className="cls-1" d="M352.44,81.36H312v-80h39.36q10.68,0,16.74,5.82a19.38,19.38,0,0,1,6.06,14.58,18.77,18.77,0,0,1-4,12.18,16.77,16.77,0,0,1-9.9,6.18,16.85,16.85,0,0,1,11,6.66,20.44,20.44,0,0,1,4.5,13q0,9.6-6.18,15.6T352.44,81.36Zm-4-46.92q5.28,0,8.28-2.88a9.85,9.85,0,0,0,3-7.44,10,10,0,0,0-3-7.56q-3-2.88-8.28-2.88H326V34.44Zm.6,34.56q5.76,0,9-2.94t3.24-8.22A10.58,10.58,0,0,0,358.08,50q-3.24-3.18-9-3.18H326V69Z" /><path className="cls-1" d="M459,82.92q-17.78,0-29.88-11.52T417,41.4q0-18.48,12.12-29.94T459,0q20.63,0,32.28,16.68l-11.53,6.48a26.23,26.23,0,0,0-8.81-7.68,24.42,24.42,0,0,0-11.94-3,26.28,26.28,0,0,0-19.75,8.16q-7.86,8.16-7.85,20.76t7.85,20.82A26.19,26.19,0,0,0,459,70.44a27.33,27.33,0,0,0,10.74-2.16,28.54,28.54,0,0,0,8.22-5V50.76H454.08V38.4H492v30Q478.91,82.92,459,82.92Z" /><path className="cls-1" d="M520.67,81.36h-14v-80h14Z" /><path className="cls-1" d="M599.63,81.36h-16.2L565.67,51.48H551.75V81.36h-14v-80h35.16q11.76,0,19,7T599,26.4q0,10.08-5.52,16.14a22.8,22.8,0,0,1-13.44,7.38ZM571,39.12a14.09,14.09,0,0,0,9.84-3.48,11.87,11.87,0,0,0,3.84-9.24,11.87,11.87,0,0,0-3.84-9.24A14.09,14.09,0,0,0,571,13.68h-19.2V39.12Z" /><path className="cls-1" d="M627.11,81.36h-14v-80h14Z" /></g></g></svg></Link>
          </div>

          <div className={headerStyles.search}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" /></svg>
          </div>
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
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.49a1 1 0 0 1 .386-.79l8-6.222a1 1 0 0 1 1.228 0l8 6.222a1 1 0 0 1 .386.79V20z" /></svg>
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
                </Link></li>
              <li>
                <Link to="/about" activeClassName={headerStyles.menuItemActive} replace>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM6.023 15.416C7.491 17.606 9.695 19 12.16 19c2.464 0 4.669-1.393 6.136-3.584A8.968 8.968 0 0 0 12.16 13a8.968 8.968 0 0 0-6.137 2.416zM12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" /></svg>
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