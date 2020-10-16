import React from 'react'
import Comment from './Comment/Comment';
import classes from './Comments.module.css';
import CommentForm from './CommentForm/CommentForm';

function Comments(props) {

	const { pic } = props;
	const comments = pic.comments;
	const commentElements = comments.map(comment => <Comment key={comment} comment={comment} showRepliesLink={props.showRepliesLink} />);

	return (
		<div className={"row span-100-12 " + classes.Comments}>
			<CommentForm pic={pic} />
			{commentElements}
		</div>
	)
}

export default Comments;