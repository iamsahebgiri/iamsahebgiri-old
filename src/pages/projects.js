import React from 'react'
import Layout from '../layouts/layout'

import globalStyles from '../styles/global.module.scss'
import Head from '../components/head'

export default () => {
  return (
    <Layout>
      <Head title="Projects" />
      <div className={globalStyles.whiteContainer}>
        <h1>My Projects</h1>
        {/* 
        <div style={{ color: "red"}}>
          Please rotate your screen for better view
        </div> */}
        
      </div>
    </Layout>
  )
}