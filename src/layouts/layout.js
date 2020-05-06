import React from "react"

import Header from '../components/header'
import globalStyles from '../styles/global.module.scss'

const Layout = (props) => (
  <div>
    <Header></Header>
    <main className={globalStyles.container}> 
      {props.children}
    </main>
    <footer className={globalStyles.footer}>
      Made with ❤ by Saheb Giri, &copy; 2020
    </footer>
  </div>
)

export default Layout