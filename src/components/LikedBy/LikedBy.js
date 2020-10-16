import React from 'react';
import UserHeader from '../User/UserHeader';
import { connect } from 'react-redux';

function LikedBy({ usernames, users }) {
	const likedUsers = usernames.map(user => users[user]);
	const userHeaders = likedUsers.map(user => <UserHeader key={user.username} user={user} />)
	return (
		<div className={"row span-100-12 keep-50-space"}>
			{userHeaders}
		</div>
	)
}

const mapStateToProps = state => ({
	users: state.users
});

export default connect(mapStateToProps)(LikedBy);