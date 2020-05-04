import React from "react"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../layouts/layout"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { id, title } = node.frontmatter
          return (
            <li key={id}>
              <Link to={`/blog/${id}`}>{title}</Link>
            </li>
          )
        })}
      </ul>
      {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}


export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            id
            title
          }
        }
      }
    }
  }
`