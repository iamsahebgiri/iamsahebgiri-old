import React from "react"

import globalStyles from '../styles/global.module.scss'
import Layout from '../layouts/layout'

import Card from '../components/card'

export default () => (
    <Layout>
        {/* <h1 className={globalStyles.text}>
            Home Page
        </h1> */}
        <Card />
    </Layout>
)
