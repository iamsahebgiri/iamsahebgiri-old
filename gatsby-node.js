const path = require(`path`);

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`./src/templates/article.js`);

  const res = await graphql(`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            id
          }
        }
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
}