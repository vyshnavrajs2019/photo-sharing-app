import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../../store/actions/modal';
import UserHeader from '../../User/UserHeader';
import { REPLIES_MODAL } from '../../../store/reducers/modal';

function Comment(props) {
	let repliesElement = null;
	const pk = props.comment;
	const comment = props.comments[pk];
	const user = props.users[comment.owner];

	if (props.showRepliesLink) {
		repliesElement = <span onClick={() => props.showReplies(comment)} className="anchor-text small mt-05">Replies</span>;
	}

	return (
		<div className="row span-100-12 card p-05">
			<UserHeader user={user} />
			<div className="row span-100-12 mt-05 small p-05 card">
				{comment.body.split("\n").map((p, idx) => <p key={idx}>{p}</p>)}
				{repliesElement}
			</div>
		</div>
	)
}

const mapStateToProps = state => ({
	users: state.users,
	comments: state.comments
});

const mapActionToProps = dispatch => ({
	showReplies: (comment) => dispatch(openModal(REPLIES_MODAL, { comment }))
});

export default connect(mapStateToProps, mapActionToProps)(Comment);