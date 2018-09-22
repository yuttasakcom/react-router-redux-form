import axios from 'axios'

export const FETCH_POSTS = 'fetch_posts'
export const CREATE_POST = 'create_post'
export const FETCH_POST = 'fetch_post'
export const DELETE_POST = 'delete_post'

const ROOT_URL = 'https://jsonplaceholder.typicode.com'

export const fetchPosts = () => {
    const request = axios.get(`${ROOT_URL}/posts`)

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export const createPost = (data, cb) => {
    let params = {
        body: 'bar',
        userId: 1,
        ...data
    }
    const request = axios.post(`${ROOT_URL}/posts`, JSON.stringify(params))
    .then(() => cb())

    return {
        type: CREATE_POST,
        payload: request
    }
}

export const fetchPost = id => {
    const request = axios.get(`${ROOT_URL}/posts/${id}`)

    return {
        type: FETCH_POST,
        payload: request
    }
}

export const deletePost = id => {
    axios.delete(`${ROOT_URL}/posts/${id}`)

    return {
        type: DELETE_POST,
        payload: id
    }
}
