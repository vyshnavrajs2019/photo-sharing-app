import React, { Component } from 'react';
import Form from '../../../../UI/Form/Form';
import TextArea from '../../../../UI/Input/TextArea';
import PrimaryButton from '../../../../UI/Button/PrimaryButton';
import { createComment, updateComment } from '../../../../../store/actions/comment';
import { connect } from 'react-redux';
import { deepCopy } from '../../../../../utils/clone';

class ReplyForm extends Component {
	state = {
		comment: ""
	}

	commentChangeHandler = (event) => {
		this.setState({ comment: event.target.value });
	}

	commentSubmitHandler = () => {
		const pk = new Date().getTime();
		this.props.createComment({
			pk,
			owner: this.props.auth.authUsername,
			createdOn: new Date(),
			updatedOn: new Date(),
			body: this.state.comment,
			replies: []
		});
		const updatedComment = deepCopy(this.props.comment);
		updatedComment.replies.push(pk);
		this.props.updateComment(updatedComment);
		this.setState({ comment: "" });
	}

	commentClearHandler = () => {
		this.setState({ comment: "" });
	}

	render() {
		return (
			<Form
				submitHandler={this.commentSubmitHandler}
				resetHandler={this.commentClearHandler}
				method="POST">
				<div className="row span-100-12 mb-05">
					<TextArea
						changeHandler={this.commentChangeHandler}
						placeholder="Your comment"
						value={this.state.comment} />
				</div>
				<div className="row span-100-3">
					<PrimaryButton
						type="submit"
						handleClick={() => { }}
						label="Post" />
				</div>
			</Form>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
});

const mapActionToProps = dispatch => ({
	createComment: comment => dispatch(createComment(comment)),
	updateComment: pic => dispatch(updateComment(pic))
});

export default connect(mapStateToProps, mapActionToProps)(ReplyForm);