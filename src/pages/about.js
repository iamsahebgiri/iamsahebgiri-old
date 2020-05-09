import React from 'react'
import Layout from '../layouts/layout'

import globalStyles from "../styles/global.module.scss"
import Head from '../components/head'

export default () => {
  return (
    <Layout>
      <Head title="About" />
      <div className={globalStyles.whiteContainer}>
        <h1>About Me</h1>
        <p>I am an 18 years old indie developer or you may call entreprenerd. I am passionate about technology, business and startup. </p>
        <p>My journey is little different then usual. I started touching computer when I entered class 5, yes thats right. Prior to that I have never seen computer. I had been reading in govt. school and there was no facility of computer back in those days. I had never knew  I/O devices, neither I started LOGO like other student of my class. I started learning HTML in class 5 and urged my parents to buy me a laptop. This was the time when I went to an English medium School, where I learned many things. </p>

        <p>I started my journey as a tech enthu and find web more interesting back in the 2014. Since then I have constanly learning new thing everday. </p>
        <p>I started reading Java books while I was in class 8. I find the book interesting and build couple of android applications before class 10. Before 10 I have learnt C++ and Java, HTML, CSS and Javascript. There is nothing special about it. It becomes special when I say you that in computer was the subject only upto class 8.</p>

        <h2>
          Areas of Interest
        </h2>
        <ol>
          <li>Competitive Programming</li>
          <li>Artificial Intelligence</li>
          <li>Mathematics</li>
          <li>UI Design</li>
        </ol>
      </div>
    </Layout>
  )
}