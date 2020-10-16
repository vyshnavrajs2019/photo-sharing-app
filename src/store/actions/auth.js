import * as actionTypes from './actionTypes';

export const signin = (user, users) => ({
	type: actionTypes.SIGNIN,
	user,
	users
});

export const signout = () => ({
	type: actionTypes.SIGNOUT
});