const path = require(`path`);
const _ = require("lodash")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/templates/article.js`);
  const tagTemplate = path.resolve(`./src/templates/tags.js`);
  const res = await graphql(`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            id
          }
        }
      }
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
  `);
  
  res.data.allMarkdownRemark.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.frontmatter.id}`,
      component: blogPostTemplate,
      context: {
        slug: edge.node.frontmatter.id
      }
    })
  })

  res.data.allMarkdownRemark.group.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
}