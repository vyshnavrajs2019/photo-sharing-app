import React, { Component } from 'react';
import UserProfilePic from './UserProfilePic/UserProfilePic';
import UserProfileOptions from './UserProfileOptions/UserProfileOptions';

export class ProfileHeader extends Component {
	render() {
		const user = this.props.user;
		const pic = {
			imgURL: user.profileImgURL
		}
		return (
			<div className="row span-100-12 horizontal-center vertical-start card p-05">
				<UserProfilePic pic={pic} />
				<div className="row span-100-12 mt-1 mb-1 horizontal-center">
					<h3>{user.username}</h3>
				</div>
				<UserProfileOptions user={user} />
			</div>
		)
	}
}

export default ProfileHeader;