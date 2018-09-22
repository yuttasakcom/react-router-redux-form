import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../state/posts/actions'
import { Link } from 'react-router-dom'

class PostShow extends Component {
    componentDidMount() {
        const {id} = this.props.match.params
        this.props.fetchPost(id)
    }

    render() {
        const {post} = this.props

        if(!post) {
            return <div>Loading...</div>
        }

        return (
            <div className="container">
                <nav>
                    <Link to="/">Back To Index</Link>
                </nav>
                <h3>Title: {post.title}</h3>
            </div>
        )
    }
}

const mapStateToProps = ({posts}, ownProps) => {
    return { post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchPost})(PostShow)
