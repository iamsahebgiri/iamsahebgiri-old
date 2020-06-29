import React from 'react'
import Layout from '../layouts/layout'

import globalStyles from '../styles/global.module.scss'
import Head from '../components/head'

export default () => {
  return (
   <Layout>
     <Head title="Resume" />
     <div className={globalStyles.whiteContainer} style={{ maxWidth: "100%"}}>
      <h1>Resume</h1>
      <p>
        You know what may be some days later.. <span role="img" aria-labelledby="happy">😊😊</span>
      </p>
     </div>
   </Layout>
  )
}