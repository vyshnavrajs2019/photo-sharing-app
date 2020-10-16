import React from 'react';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import Pics from '../../components/Media/Pics/Pics';
import { withRouter, Redirect } from 'react-router';
import { connect } from 'react-redux';

function Profile(props) {
	const username = props.match.params.username;
	let user = props.users[username];
	if (!user)
		return <Redirect to="/" />;

	const pics = Object.values(props.pics).filter(pic => pic.owner === username);

	return (
		<div className="row span-100-6 p-05 mt-05">
			<ProfileHeader user={user} />
			<div className="row span-100-12 card p-05 mt-1">
				<div className="row span-100-12 card p-05 mb-05">
					<h3>Shared Photos</h3>
				</div>
				<Pics pics={pics} />
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	users: state.users,
	pics: state.pics
});


export default connect(mapStateToProps)(withRouter(Profile));