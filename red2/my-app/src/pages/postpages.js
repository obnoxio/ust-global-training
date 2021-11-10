import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchPosts } from '../actions/postactions'
import { Post } from '../components/post'

const PostsPage = ({ dispatch, loading, posts, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  // Show loading, error, or success state
  const renderPosts = () => {
    if (loading) return <p>Loading posts... now</p>
    if (hasErrors) return <p>Unable to display posts.</p>
    return posts.map((post) => <Post key={post.id} post={post} />)
  }

  return (
    <section>
      <h1>Posts here</h1>
      {renderPosts()}
    </section>
  )
}

const mapStateToProps = (state) => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors,
})

export default connect(mapStateToProps)(PostsPage)