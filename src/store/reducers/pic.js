/* eslint-disable default-case */
import * as actionTypes from '../actions/actionTypes';
import { save, load } from '../../utils/persistor';
import { deepCopy } from '../../utils/clone';

const initialState = load("pics") || {};

const createPic = (state, pic) => {
	const updatedPics = {
		...state,
		[pic.pk]: pic
	};
	save("pics", updatedPics);
	return updatedPics;
}

const deletePic = (state, pk) => {
	const updatedPics = { ...state };
	delete updatedPics[pk];
	save("pics", updatedPics);
	return updatedPics;
}

const updatePic = (state, pic) => {
	const updatedPics = deepCopy(state); // { ...state };
	updatedPics[pic.pk] = pic;
	save("pics", updatedPics);
	return updatedPics;
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.CREATE_PIC:
			return createPic(state, action.pic);

		case actionTypes.DELETE_PIC:
			return deletePic(state, action.pk);

		case actionTypes.UPDATE_PIC:
			return updatePic(state, action.pic);
	}
	return state;
}