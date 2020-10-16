import React from 'react';
import UserHeader from '../../User/UserHeader';
import FullPic from './FullPic/FullPic';
import { connect } from 'react-redux';

function Feed(props) {
	const { users, pic } = props;
	const user = users[pic.owner];

	return (
		<div className="feed row span-100-12 p-05 card mb-1">
			<UserHeader user={user} />
			<div className="row span-100-12 mt-05"></div>
			<FullPic noModal pic={pic} />
		</div>
	)
}

const mapStateToProps = state => ({
	users: state.users
});

export default connect(mapStateToProps)(Feed);