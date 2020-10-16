import React from 'react'
import { connect } from 'react-redux';
import classes from './Suggestion.module.css';
import { withRouter } from 'react-router';

function Suggestion({ query, users, clearQuery, history }) {

	const handleClick = (username) => {
		history.push(`/profile/${username}`);
		clearQuery();
	}

	const _users = Object.keys(users).filter(username => query.length && username.includes(query)).map(username => <span className="anchor-text p-05" onClick={() => handleClick(username)} key={username}>{username}</span>);

	if(!_users.length) 
		return null;

	return (
		<div className={classes.Suggestion + " card col"}>
			{_users}
		</div>
	)
}


const mapToStates = state => ({
	users: state.users
})

export default connect(mapToStates)(withRouter(Suggestion));