import React from 'react';
import {render} from 'react-dom';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';

import store, {history} from './store'

//main containers
import App from './containers/index';

import postList from './containers/Content/Post/postList';
import postDetail from './containers/Detail/postDetail';

//css
import css from './styles/style.styl';

const router = (
	<Provider store={store}>
		<Router
			history={history}
		>
			<Route path="/" component={App}>
				<IndexRoute
					component={postList}
				></IndexRoute>
				
				<Route
					path="/view/:postId" 
					component={postDetail}
				></Route>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));