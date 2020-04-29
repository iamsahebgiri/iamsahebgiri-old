import React from "react"

import Navbar from '../components/header'
import globalStyles from '../styles/global.module.scss'

export default () => (
    <>
        <Navbar />
        <h1 className={globalStyles.text}>Hello</h1>
    </>
)
