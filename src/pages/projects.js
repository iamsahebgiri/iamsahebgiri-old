import React from 'react'
import Layout from '../layouts/layout'

import globalStyles from '../styles/global.module.scss'
import Head from '../components/head'

export default () => {
  return (
    <Layout>
      <Head title="Projects" />
      <div className={globalStyles.whiteContainer}>
        <h1>Projects Page</h1>
        {/* 
        <div style={{ color: "red"}}>
          Please rotate your screen for better view
        </div> */}
        <div style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Project</th>
                <th>Started</th>
                {/* <th>Description</th> */}
                <th>Status</th>
                <th>Tech Stack</th>
              </tr>

            </thead>
            <tbody>
              <tr>
                <td>Reload</td>
                <td>Jan 2020</td>
                {/* <td>
                    I build Reload using Kotlin and it integrates 5 APIs all together which provide daily quotes, trivia, memes, and many more. It took me 2 days to build because I had no idea how Kotlin works.
                </td> */}
                <td style={{ color: "#00875A" }}>Active</td>
                <td>
                  Android Studio, Kotlin, Vollyball, Picasso,Open Source APIs, Figma
                </td>
              </tr>

              <tr>
                <td>Captain</td>
                <td>April 2018</td>
                {/* <td>It was dual player tic tac toe game and you can play with AI as well.</td> */}
                <td style={{ color: "#DE350B" }}>Dead</td>
                <td>
                  Android Studio, Java
                </td>
              </tr>

              <tr>
                <td>Kalam</td>
                <td>March 2020</td>
                {/* <td>Share writings and download them as png.</td> */}
                <td style={{ color: "#FF991F" }}>Partially Active</td>
                <td>
                  Express, Node, MongoDB, React, Adobe XD
                </td>
              </tr>

              <tr>
                <td>Refresh CSS</td>
                <td>April 2020</td>
                {/* <td>A modern, responsive and clean looking CSS framework.</td> */}
                <td style={{ color: "#FF991F" }}>Ongoing</td>
                <td>
                  Express, Node, MongoDB, React, Adobe XD
                </td>
              </tr>

              <tr>
                <td>Spotify Client</td>
                <td>March 2019</td>
                {/* <td></td> */}
                <td style={{ color: "#00875A" }}>Active</td>
                <td>
                  Adobe Photoshop, Nuxt.js
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}