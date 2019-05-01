import React from "react"

const MarkdownPost = ({ post }) => (
  <div className="blog-post"
    style={{
      background: `#eee`,
      marginBottom: `1.45rem`,
      padding: `1rem 0`
    }}
  >
    <h2>{post.node.frontmatter.title}</h2>
    <p dangerouslySetInnerHTML={{__html: post.node.html}} />
    <div className="tags">
      {post.node.frontmatter.tags.map((tag, j) => (
        <span style={{ marginRight: `15px`}} key={tag.j}>{tag}</span>
      ))}
    </div>
  </div>
)

export default MarkdownPost
