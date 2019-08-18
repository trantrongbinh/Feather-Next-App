import React from 'react'
import Button from '@material-ui/core/Button'

const posts = [
  { slug: 'hello-world', title: 'Hello world' },
  { slug: 'another-blog-post', title: 'Another blog post' }
]

export default class extends React.Component {
  static async getInitialProps ({ query, res }) {
    const post = posts.find(post => post.slug === query.slug)

    if (!post && res) {
      res.statusCode = 404
    }

    return { post }
  }

  render () {
    const { post } = this.props

    if (!post) return <h1>Post not found</h1>

    return (
      <div>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <h1>{post.title}</h1>
      </div>
    )
  }
}
