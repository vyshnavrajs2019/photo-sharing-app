import React from 'react'
import Pic from '../../Media/Pics/Pic/Pic';
import classes from './UserProfilePic.module.css';

function UserProfilePic(props) {
	return (
		<div className={classes.UserProfilePic}>
			<Pic {...props} />
		</div>
	)
}

export default UserProfilePic
