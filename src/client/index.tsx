import * as React from 'react'
import {render}  from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import {rootReducer} from '../common/reducers/rootReducers';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {Router, Route, browserHistory, IndexRedirect, IndexRoute} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import * as route from '../common/constants/RouteConstants';

import Landing from '../common/components/landing/Landing';
import UsersList from '../common/components/users/user-list/UsersList';
import UserAdd from '../common/components/users/user-add/UserAdd';

const composeEnhancers =
	typeof window === 'object' &&
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
		}) : compose;

const enhancer = composeEnhancers(
	applyMiddleware(thunk)
);

let store = createStore(
		rootReducer, 
		{}, 
		enhancer
);
const history = syncHistoryWithStore(browserHistory, store);
render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/'>
				<IndexRedirect to='/home' />
				<Route path="/home" component={Landing}>
					<Route path={route.USERS_LIST} component={UsersList} />
					<Route path={route.USER_ADD} component={UserAdd} />
				</Route>
			</Route>
		</Router>
	</Provider>, document.getElementById("react-root"))
