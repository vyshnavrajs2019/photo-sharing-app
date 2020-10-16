/* eslint-disable default-case */
import * as actionTypes from '../actions/actionTypes';
import { save, load } from '../../utils/persistor';

const initialState = load("users") || {};

const createUser = (state, user) => {
	const updatedUsers = { ...state, [user.username]: user };
	save("users", updatedUsers);
	return updatedUsers;
}

const deleteUser = (state, username) => {
	const updatedUsers = { ...state };
	delete updatedUsers[username];
	save("users", updatedUsers);
	return updatedUsers;
}

const updateUser = (state, user) => {
	const updatedUsers = { ...state };
	updatedUsers[user.username] = user;
	save("users", updatedUsers);
	return updatedUsers;
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CREATE_USER:
			return createUser(state, action.user);

		case actionTypes.DELETE_USER:
			return deleteUser(state, action.pk);

		case actionTypes.UPDATE_USER:
			return updateUser(state, action.user);
	}
	return state;
}