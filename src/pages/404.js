import React from 'react'
// import Layout from '../layouts/layout'
import { Link } from "gatsby"

import globalStyles from "../styles/global.module.scss"
import Head from '../components/head'

export default () => {
  return (
    <>
      <Head title="Not found" />
      <div className={globalStyles.whiteContainer} style={{ width: "100%" }}>
        <h1>The page you are looking doesn't exist.</h1>
        <p>May be you lost</p>
        <Link to="/" className={globalStyles.back}>Go to home</Link>
      </div>
    </>
  )
}