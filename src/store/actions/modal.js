import * as actionTypes from './actionTypes';

export const openModal = (modalType, modalProps) => {
	return {
		type: actionTypes.OPEN_MODAL,
		payload: {
			modalType,
			modalProps
		}
	}
}

export const closeModal = () => {
	return {
		type: actionTypes.CLOSE_MODAL
	}
}