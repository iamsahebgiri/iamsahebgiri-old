import React from "react"

import Header from '../components/header'
import layoutStyles from '../styles/layout.module.scss'

const Layout = (props) => (
  <div>
    <Header />
    <main className={layoutStyles.container}>
      {props.children}
    </main>
  </div>
)

export default Layout