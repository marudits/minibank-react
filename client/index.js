import React from 'react';
import { render } from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

import store, { history } from './store'

//css
import css from './styles/style.styl';

//containers
import App from './containers/index';
import BankList from './containers/bank/bankList';
import ReviewList from './containers/review/reviewList';
import PropertyList from './containers/property/propertyList';

const router = (
	<Provider store={store}>
		<Router
			history={ history }
		>
			<Route path="/" component={ App }>
				<IndexRoute component={ BankList }></IndexRoute>	
				<Route path="/bank" component={ BankList} ></Route>
				<Route path="/review" component={ ReviewList} ></Route>
				<Route path="/property" component={ PropertyList} ></Route>
			</Route>
		</Router>
	</Provider>
)

render(router, document.getElementById('root'));