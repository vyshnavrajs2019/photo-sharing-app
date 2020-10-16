import * as actionTypes from './actionTypes';

export const createComment = comment => ({
	type: actionTypes.CREATE_COMMENT,
	comment
});

export const deleteComment = pk => ({
	type: actionTypes.DELETE_COMMENT,
	pk
});

export const updateComment = comment => ({
	type: actionTypes.UPDATE_COMMENT,
	comment
});