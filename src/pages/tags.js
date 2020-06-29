import React from "react"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql } from "gatsby"
import Layout from "../layouts/layout"

//Styles
import tagsStyle from "../styles/tags.module.scss"
import globalStyles from "../styles/global.module.scss"
import Head from "../components/head"

const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
    <Layout>
      <Head title="Tags" />
      <div className={tagsStyle.allTags}>
        <h1>All Tags</h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                {tag.fieldValue}
            </Link>
            </li>
          ))}
        </ul>

        <Link to="/" className={globalStyles.back}>Go to home</Link>
      </div>
    </Layout>
  )



export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`