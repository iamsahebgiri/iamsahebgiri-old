import React from 'react'
import Layout from '../layouts/layout'
import { Link } from "gatsby"

import globalStyles from "../styles/global.module.scss"
import Head from '../components/head'

export default () => {
  return (
   <Layout>
     <Head title="Not found" />
     <div className={globalStyles.whiteContainer} style={{ width: "100%"}}>
       <h1>Not found</h1>
       <p>May be you lost</p>
       <Link to="/" className={globalStyles.back}>Go to home</Link>
     </div>
   </Layout>
  )
}