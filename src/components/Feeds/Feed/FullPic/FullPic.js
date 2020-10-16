import React, { Component } from 'react';
import Pic from '../../../Media/Pics/Pic/Pic';
import Comments from '../../../Comments/Comments';
import { openModal } from '../../../../store/actions/modal';
import { LIKED_USERS_MODAL, AUTH_MODAL } from '../../../../store/reducers/modal';
import { connect } from 'react-redux';
import { updatePic } from '../../../../store/actions/pic';
import { deepCopy } from '../../../../utils/clone';
import { SIGNIN_VIEW } from '../../../Navs/Navs';

class FullPic extends Component {
	state = {
		showComments: false,
	}

	likeHandler = () => {
		if (this.props.auth.isAuthenticated) {
			const username = this.props.auth.authUsername;
			const pk = this.props.pic.pk;
			const pic = this.props.pics[pk];
			const updatedPic = deepCopy(pic);
			if (updatedPic.likes.includes(username)) {
				updatedPic.likes = updatedPic.likes.filter(_ => _ !== username);
			} else {
				updatedPic.likes.push(username);
			}
			this.props.updatePic(updatedPic);
		} else {
			this.props.openModal(AUTH_MODAL, { view: SIGNIN_VIEW });
		}
	}

	toggleComments = () => {
		this.setState({ showComments: !this.state.showComments });
	}

	render() {
		const pk = this.props.pic.pk;
		const pic = this.props.pics[pk];
		return (
			<React.Fragment>
				<Pic openModalWhenClicked={this.props.openModalWhenClicked} pic={pic} />
				<div className="row span-100-12 mt-05 card p-05 ">
					{pic.body.split("\n").map((p, idx) => <p key={idx}>{p}</p>)}
				</div>

				<div className="row span-100-12 mt-05 mb-05 p-05 small muted card">
					<button onClick={this.likeHandler} className="btn anchor-text">
						Likes {pic.likes.length}
						{pic.likes.includes(this.props.auth.authUsername) ? "(You liked)" : null}
					</button>
					<span onClick={() => this.props.openModal(LIKED_USERS_MODAL, { usernames: pic.likes })} className="ml-1 anchor-text">Liked by</span>
					<button className="btn ml-1 anchor-text" onClick={this.toggleComments}>Comments</button>
				</div>
				{this.state.showComments ? <Comments pic={pic} showRepliesLink /> : null}
			</React.Fragment>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	users: state.users,
	pics: state.pics
});

const mapActionToProps = dispatch => ({
	updatePic: pic => dispatch(updatePic(pic)),
	openModal: (modalType, modalProps) => dispatch(openModal(modalType, modalProps))
});

export default connect(mapStateToProps, mapActionToProps)(FullPic);