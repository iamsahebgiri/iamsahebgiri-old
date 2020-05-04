import React from 'react'
import Layout from '../layouts/layout'

import globalStyles from "../styles/global.module.scss"

export default () => {
  return (
    <Layout>
      <div className={globalStyles.whiteContainer}>
        <h1>About Me</h1>
        <p>I am 18 years old indie developer. I built stuff for fun.</p>
        <p>I started my journey as a tech enthu and find web more interestring back in the days 2014. </p>
      </div>
    </Layout>
  )
}