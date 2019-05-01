import React from "react"

const DrupalPost = ({ post }) => (
  <div className="blog-post"
    style={{
      background: `#eafaff`,
      marginBottom: `1.45rem`,
      padding: `1rem 0`
    }}
  >
    <h2>{post.node.title}</h2>
    <p dangerouslySetInnerHTML={{__html: post.node.body.value}} />
    <div className="tags">
      {post.node.relationships.field_tags.map((tag, j) => (
        <span style={{ marginRight: `15px`}} key={tag.id}>{tag.name}</span>
      ))}
    </div>
  </div>
)

export default DrupalPost
