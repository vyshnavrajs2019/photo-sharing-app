import React from 'react';
import ReplyForm from './ReplyForm/ReplyForm';
import Reply from './Reply/Reply';
import { connect } from 'react-redux';

function Replies(props) {
	
	const comment = props.comments[props.comment.pk];
	const replies = comment.replies;
	const replyElements = replies.map(reply => <Reply key={reply} reply={reply} />);

	return (
		<div className={"row span-100-12 keep-50-space"}>
			<ReplyForm comment={comment} />
			{replyElements}
		</div>
	)
}

const mapStateToProps = state => ({
	comments: state.comments
});

export default connect(mapStateToProps)(Replies);