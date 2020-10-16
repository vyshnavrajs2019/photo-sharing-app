import React from 'react';
import Button from '../../UI/Button/Button';
import PrimaryButton from '../../UI/Button/PrimaryButton';

function FollowButton(props) {
	let label = "Follow";
	if(props.isFollower) {
		label = "Following";
	}
	let button = <PrimaryButton {...props} label={label}  />
	if (props.follower) {
		button = <Button {...props} label={label} />
	}

	return button;
}

export default FollowButton;