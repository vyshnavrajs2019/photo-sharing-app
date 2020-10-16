/* eslint-disable default-case */
import * as actionTypes from '../actions/actionTypes';
import { load, save } from '../../utils/persistor';

const initialState = load("auth") || {
	isAuthenticated: false,
	authUsername: null
}

const authenticate = (user, users) => {
	const { username, password } = user || {};
	const authUser = users[username];
	return authUser && authUser.username === username && authUser.password === password && authUser;
}

const signin = (user, users) => {
	const authState = {
		isAuthenticated: false,
		authUsername: null
	};
	const authUser = authenticate(user, users);
	if (authUser) {
		authState.isAuthenticated = true;
		authState.authUsername = authUser.username;
	}
	save("auth", authState);
	return authState;
}

const signout = () => {
	const authState = {
		isAuthenticated: false,
		authUsername: null
	};
	save("auth", authState);
	return authState;
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SIGNIN:
			return signin(action.user, action.users);

		case actionTypes.SIGNOUT:
			return signout();
	}

	return state;
}