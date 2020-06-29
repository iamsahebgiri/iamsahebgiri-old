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
        <p>I am 18 years old developer and a student. I am passionate about technology, business and startup. People usually brag about themselves in blog but I will try to keep everthing genuine and authenctic. </p>

        <p>My journey is little different then usual. I started touching computer when I entered class 5, yes thats right. Prior to that I have never seen computer. I had been reading in govt. school and there was no facility of computer back in those days. I didn't start with those I/O devices and fancy pattern in LOGO. I started learning WebStack(HTML,JS,CSS) in class 5 and urged my parents to buy me a laptop. This was the time when I went to an English medium School, which I consider turning point of my life. I didn't know what exactly will happen with me but I was sure of the fact that there is somethig good is going to happen down the road. </p>

        <p>I started my journey as a tech enthusiasts and find internet technology pretty interesting back in 2014. And the marquee tag is fascinating though deprecated now. Since then I have constanly learning new thing every now and then. </p>

        <p>I started reading Java books while I was in class 7. I find the book interesting and build couple of android applications before class 10. Before 10 I have learnt C++, Java, Android Development, HTML, CSS and Javascript(JQuery). I also learned graphics design and edit couple of photos in Photoshop. You can check my social handle for that.</p>

        <p>After tenth examination when result were yet to come when most people busy finding their college I was learing Laravel, Vue, React. Eventually I ended up getting a college which was worst than I thought.It was complete nightmare. I was done with studies <span role="img" aria-labelledby="sad">😭</span>. </p>

        <p>
          While I was in that college, I had to balance my studies with the stuff I loved most. But failed miserbaly. This is where I am now. While rest of my friend busy making there career at Aakash Institue, Vikas, BJB.... I struggled... and it goes on..... 
        </p>

        <h2>
          Areas of Interest
        </h2>
        <ol>
          <li>Competitive Programming</li>
          <li>AI/ML</li>
          <li>Web stuff</li>
          <li>Mathematics</li>
          <li>Design stuff</li>
        </ol>
      </div>
    </Layout>
  )
}