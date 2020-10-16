import * as actionTypes from './actionTypes';

export const createUser = user => ({
	type: actionTypes.CREATE_USER,
	user
});

export const deleteUser = username => ({
	type: actionTypes.DELETE_USER,
	username
});

export const updateUser = user => ({
	type: actionTypes.UPDATE_USER,
	user
});