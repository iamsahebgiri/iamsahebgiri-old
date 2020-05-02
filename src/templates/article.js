import React from 'react'
import { graphql } from 'gatsby'

import articleStyles from '../styles/article.module.scss'
import Layout from '../layouts/layout'

export const data = graphql`
query($slug: String!) {
  markdownRemark(frontmatter: { id: { eq: $slug } }) {
    frontmatter {
      id
      title
      author
      date
    }
    html
    tableOfContents(pathToSlugField: "frontmatter.id")
  }
}
`

const Article = (props) => {
  return (
    <Layout>
      <div className={articleStyles.article}>
        <div className={articleStyles.title}>
          <h1>
            {props.data.markdownRemark.frontmatter.title}
          </h1>
        </div>

        <div className={articleStyles.metaData}>

        </div>

        <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}>

        </div>
      </div>
    </Layout>

  )
}

export default Article