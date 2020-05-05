import React from 'react'
import Layout from '../layouts/layout'
import { Link } from "gatsby"

import globalStyles from "../styles/global.module.scss"

export default () => {
  return (
   <Layout>
     <div className={globalStyles.whiteContainer}>
       <h1>Not found</h1>
       <p>May be you lost</p>
       <Link to="/">Go to home</Link>
     </div>
   </Layout>
  )
}