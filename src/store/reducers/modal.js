/* eslint-disable default-case */
import * as actionTypes from '../actions/actionTypes';

export const REPLIES_MODAL = "REPLIES_MODAL";
export const LIKED_USERS_MODAL = "LIKED_USERS_MODAL";
export const AUTH_MODAL = "AUTH_MODAL";
export const NEW_PIC_MODAL = "NEW_PIC_MODAL";
export const FULL_PIC_MODAL = "FULL_PIC_MODAL";

const initialState = {
	isOpen: false,
	modalType: null,
	modalProps: null
}

const openModal = payload => {
	return {
		isOpen: true,
		modalType: payload.modalType,
		modalProps: payload.modalProps
	}
}

const closeModal = () => {
	return {
		isOpen: false,
		modalType: null,
		modalProps: null
	}
}

export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.OPEN_MODAL:
			return openModal(action.payload);

		case actionTypes.CLOSE_MODAL:
			return closeModal();
	}
	return state;
}