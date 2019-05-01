import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import DrupalPost from "../components/drupalPost";
import MarkdownPost from "../components/markdownPost";

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi Myplanet</h1>
    <p>All Posts at once.</p>

    {
      data.allNodeBlog.edges.map(
        (item, i) => (
          <DrupalPost post={item} key={item.node.id} />
        )
      )
    }

    {
      data.allMarkdownRemark.edges.map(
        (item, i) => (
          <MarkdownPost post={item} key={item.node.id} />
        )
      )
    }
    
    <Link to="/drupal/">Drupal Posts</Link>&nbsp;
    <Link to="/markdown/">Markdown Posts</Link>
  </Layout>
)

export default IndexPage

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