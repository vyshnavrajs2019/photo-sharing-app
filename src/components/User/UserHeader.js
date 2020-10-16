import React from 'react';
import { closeModal } from '../../store/actions/modal';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

function UserHeader(props) {
	const { user } = props;

	const handleClick = () => {
		props.closeModal();
		props.history.push("/profile/" + user.username + "/");
	}

	return (
		<div className="row span-100-12 p-05 card vertical-center">
			<span className="anchor-text" onClick={handleClick}>{user.username}</span>
		</div>
	)
}

const mapActionToProps = dispatch => ({
	closeModal: () => dispatch(closeModal())
});

export default connect(null, mapActionToProps)(withRouter(UserHeader));