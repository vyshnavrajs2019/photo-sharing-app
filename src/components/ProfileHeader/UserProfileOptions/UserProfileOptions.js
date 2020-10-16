import React from 'react';
import FollowButton from '../FollowButton/FollowButton';
import Button from '../../UI/Button/Button';
import { connect } from 'react-redux';
import PrimaryButton from '../../UI/Button/PrimaryButton';
import { openModal } from '../../../store/actions/modal';
import { NEW_PIC_MODAL } from '../../../store/reducers/modal';
import { updateUser } from '../../../store/actions/user';

function UserProfileOptions(props) {
	const user = props.user;
	const authUsername = props.auth.authUsername;

	const isOwner = authUsername === user.username;
	const isFollower = user.followers.includes(authUsername);

	const toggleFollow = () => {
		const updatedUser = { ...user };
		if (user.followers.includes(authUsername)) {
			updatedUser.followers = updatedUser.followers.filter(_ => _ !== authUsername);
		} else {
			updatedUser.followers.push(authUsername);
		}
		props.updateUser(updatedUser);
	}

	return (
		<div className="row span-100-12 p-05 card horizontal-center">
			{isOwner ? (
				<React.Fragment>
					<div className="span-100-4">
						<PrimaryButton handleClick={props.openNewPicModal} label="Add New Pic" />
					</div>
					<div className="span-100-4-ml-5">
						<Button handleClick={props.openChangeProfilePicModal} label="Change Profile Pic" />
					</div>
				</React.Fragment>
			) : <div className="span-100-4">
					<FollowButton isFollower={isFollower} handleClick={toggleFollow} {...props} />
				</div>}
		</div>
	)
}

const mapStateToProps = state => ({
	auth: state.auth,
});

const mapActionToProps = dispatch => ({
	openNewPicModal: () => dispatch(openModal(NEW_PIC_MODAL)),
	openChangeProfilePicModal: () => dispatch(openModal(NEW_PIC_MODAL, { hideDescription: true })),
	updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mapStateToProps, mapActionToProps)(UserProfileOptions);