import * as actionTypes from './actionTypes';

export const createPic = pic => {
	return {
		type: actionTypes.CREATE_PIC,
		pic
	}
}

export const deletePic = pk => {
	return {
		type: actionTypes.DELETE_PIC,
		pk
	}
}

export const updatePic = pic => {
	return {
		type: actionTypes.UPDATE_PIC,
		pic
	}
}