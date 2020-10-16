/* eslint-disable default-case */
import * as actionTypes from '../actions/actionTypes';
import { save, load } from '../../utils/persistor';

const initialState = load("comments") || {};

const createComment = (state, comment) => {
	const updatedComments = {
		...state,
		[comment.pk]: comment
	};
	save("comments", updatedComments);
	return updatedComments;
}

const deleteComment = (state, pk) => {
	const updatedComments = { ...state };
	delete updatedComments[pk];
	save("comments", updatedComments);
	return updatedComments;
}

const updateComment = (state, comment) => {
	const updatedComments = { ...state };
	updatedComments[comment.pk] = comment;
	save("comments", updatedComments);
	return updatedComments;
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CREATE_COMMENT:
			return createComment(state, action.comment);

		case actionTypes.DELETE_COMMENT:
			return deleteComment(state, action.pk);

		case actionTypes.UPDATE_COMMENT:
			return updateComment(state, action.comment);
	}
	return state;
}