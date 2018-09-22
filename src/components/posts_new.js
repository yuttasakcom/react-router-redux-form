import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost } from '../state/posts/actions'

class PostNew extends Component {
    renderField(field) {
        const {meta} = field
        const className = `form-control ${meta.touched && meta.error ? 'border border-warning' : ''}`
        return (
            <div className='form-group'>
                <label>{field.label}</label>
                <input
                    type="text"
                    {...field.input}
                    className={className}
                />
                <div className="text-danger">{meta.touched ? meta.error : ''}</div>
            </div>
        )
    }

    onSubmit(value) {
        this.props.createPost(value, () => {
            this.props.history.push('/')
        })
    }

    render() {
        const { handleSubmit } = this.props

        return (
            <div className="container mt-5">
                <form onSubmit={handleSubmit(value => this.onSubmit(value))}>
                    <Field
                        label="Title"
                        name="title"
                        component={this.renderField}
                    />

                    <Field
                        label="Categories"
                        name="categories"
                        component={this.renderField}
                    />

                    <Field
                        label="Content"
                        name="content"
                        component={this.renderField}
                    />

                    <button className="btn btn-primary" type="submit">Submit</button>
                    <Link to="/" className="btn btn-danger ml-1">Cancel</Link>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {}

    if (!values.title) {
        errors.title = 'Enter a title'
    }

    if (!values.categories) {
        errors.categories = 'Enter some categories'
    }

    if (!values.content) {
        errors.content = 'Enter some content please'
    }

    return errors
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(connect(null, {createPost})(PostNew))
