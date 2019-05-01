import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import DrupalPost from "../components/drupalPost";

const DrupalPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    {
      data.allNodeBlog.edges.map(
        (item, i) => (
          <DrupalPost post={item} key={item.node.id} />
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
    allNodeBlog {
      edges {
        node {
          id
          title
          body {
            value
          }
          relationships {
            field_tags {
              id
              name
            }
          }
        }
      }
    }
  }
`