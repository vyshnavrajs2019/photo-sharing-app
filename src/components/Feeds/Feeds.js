import React from 'react';
import Feed from './Feed/Feed';
import { connect } from 'react-redux';

function Feeds(props) {
	let feeds = null;
	if (props.auth.isAuthenticated) {
		const authUsername = props.auth.authUsername;
		const feedProps = Object.values(props.pics).filter(pic => props.users[pic.owner].followers.includes(authUsername)).map(pic => [props.users[pic.owner], pic]);
		feeds = feedProps.map(([user, pic]) => <Feed key={pic.pk} user={user} pic={pic} />)
	} else {
		// TODO
	}

	return (
		<div className="feeds row span-100-6 p-05 mt-05">
			{feeds}
		</div>
	)
}

const mapStateToProps = state => ({
	auth: state.auth,
	pics: state.pics,
	users: state.users
});

export default connect(mapStateToProps)(Feeds);