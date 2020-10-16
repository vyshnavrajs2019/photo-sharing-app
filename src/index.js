import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import './styles/main.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import modalReducer from './store/reducers/modal';
import userReducer from './store/reducers/user';
import picReducer from './store/reducers/pic';
import authReducer from './store/reducers/auth';
import commentReducer from './store/reducers/comment';

const rootReducer = combineReducers({
	auth: authReducer,
	pics: picReducer,
	users: userReducer,
	modal: modalReducer,
	comments: commentReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers());

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
