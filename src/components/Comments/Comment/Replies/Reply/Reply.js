import React from 'react';
import { connect } from 'react-redux';
import UserHeader from '../../../../User/UserHeader';

function Reply(props) {
	const pk = props.reply;
	const reply = props.comments[pk];
	const user = props.users[reply.owner];

	return (
		<div className="row span-100-12 card p-05">
			<UserHeader user={user} />
			<div className="row span-100-12 mt-05 small p-05 card">
				{reply.body.split("\n").map((p, idx) => <p key={idx}>{p}</p>)}
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	users: state.users,
	comments: state.comments
});

export default connect(mapStateToProps)(Reply);