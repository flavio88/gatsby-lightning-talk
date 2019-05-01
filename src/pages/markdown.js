import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import MarkdownPost from "../components/markdownPost";

const DrupalPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    {
      data.allMarkdownRemark.edges.map(
        (item, i) => (
          <MarkdownPost post={item} key={item.node.id} />
        )
      )
    }
    
    <Link to="/">Index</Link>
  </Layout>
)

export default DrupalPage

export const query = graphql
`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          html
          frontmatter {
            title
            tags
          } 
        }
      }
    }
  }
`