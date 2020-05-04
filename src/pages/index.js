import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from '../layouts/layout'

import Card from '../components/card'



const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            excerpt
            timeToRead
            frontmatter {
              id
              title
              date
              author
              tags
            }
          }
        }
      }
    }
  `)


  return (
    <Layout>
      {
        data.allMarkdownRemark.edges.map(item => {
          return (
            <Card key={item.node.id} tags={item.node.frontmatter.tags} slug={item.node.frontmatter.id} title={item.node.frontmatter.title} desc={item.node.excerpt} author={item.node.frontmatter.author} date={item.node.frontmatter.date} readTime={item.node.timeToRead} />
          )
        })
      }

    </Layout>
  )
}
export default IndexPage;
