import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, deletePost } from '../state/posts/actions'
import { Link } from 'react-router-dom'
import _ from 'lodash'

class PostIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts()
    }

    onDeleteClick(id) {
        this.props.deletePost(id)
    }

    renderPosts() {
        return _.map(this.props.posts, post => <li key={post.id} className="list-group-item">
            <Link to={`/posts/${post.id}`}>
                {post.title}
            </Link> <button onClick={() => this.onDeleteClick(post.id)} className="btn btn-danger">Delete</button>
        </li>)
    }

    render() {
        return (
            <div>
                <nav>
                    <div>
                        <Link to="/posts/new">
                            Add a Post
                        </Link>
                    </div>
                </nav>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({posts}) => ({posts})

export default connect(mapStateToProps, {fetchPosts, deletePost})(PostIndex)
