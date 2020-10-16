/* eslint-disable default-case */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Modal.module.css';
import { closeModal } from '../../../store/actions/modal';
import { LIKED_USERS_MODAL, REPLIES_MODAL, AUTH_MODAL, NEW_PIC_MODAL, FULL_PIC_MODAL } from '../../../store/reducers/modal';
import Replies from '../../Comments/Comment/Replies/Replies';
import LikedBy from '../../LikedBy/LikedBy';
import Auth from '../../../containers/Auth/Auth';
import NewPicForm from '../../ProfileHeader/NewPicForm/NewPicForm';
import FullPic from '../../Feeds/Feed/FullPic/FullPic';

class Modal extends Component {
	render() {
		let modalElement = null;
		// console.log(this.props);

		switch (this.props.modal.modalType) {
			case REPLIES_MODAL:
				modalElement = <Replies {...this.props.modal.modalProps} />
				break;
			case LIKED_USERS_MODAL:
				modalElement = <LikedBy {...this.props.modal.modalProps} />
				break;
			case AUTH_MODAL:
				modalElement = <Auth {...this.props.modal.modalProps} />
				break;
			case NEW_PIC_MODAL:
				modalElement = <NewPicForm {...this.props.modal.modalProps} />
				break;
			case FULL_PIC_MODAL:
				modalElement = <FullPic {...this.props.modal.modalProps} />
				break;
		}


		return (
			<div className={classes.Modal + " row span-100-12 horizontal-center vertical-center p-1"}>
				<div onClick={this.props.closeModal} className={classes.ModalOverlay}></div>
				<div className="row span-100-6 p-05 pl-1 pr-1 pb-1" style={{ background: "white" }}>
					<div className="row span-100-12 mb-05 horizontal-end">
						<button onClick={this.props.closeModal} type="button" className={classes.CloseButton + " btn horizontal-center vertical-center"}><svg enableBackground="new 0 0 512.001 512.001" height="512" viewBox="0 0 512.001 512.001" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m512.001 84.853-84.853-84.853-171.147 171.147-171.148-171.147-84.853 84.853 171.148 171.147-171.148 171.148 84.853 84.853 171.148-171.147 171.147 171.147 84.853-84.853-171.148-171.148z" /></g></svg></button>
					</div>
					<div className={classes.ScrollableContainer + " row span-100-12 card p-05"}>
						{modalElement}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return { modal: state.modal }
}

const mapActionToProps = dispatch => {
	return {
		closeModal: () => dispatch(closeModal())
	}
}

export default connect(mapStateToProps, mapActionToProps)(Modal);