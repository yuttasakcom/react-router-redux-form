import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter,Route, Switch } from 'react-router-dom'

import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from './state/store'

import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'
import PostsShow from './components/posts_show'

ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/posts/new" component={PostsNew} />
                <Route path="/posts/:id" component={PostsShow} />
                <Route path="/" component={PostsIndex} />
            </Switch>
        </div>
    </BrowserRouter>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
