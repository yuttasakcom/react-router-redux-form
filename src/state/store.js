import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import { reducer as formReducer } from 'redux-form'

import PostsReducer from './posts/reducers/reducer_posts'

const reducers = combineReducers({
    posts: PostsReducer,
    form: formReducer
})

const store = createStore(reducers, {}, applyMiddleware(ReduxPromise))

export default store
