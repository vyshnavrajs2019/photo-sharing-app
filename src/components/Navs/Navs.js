import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { openModal } from '../../store/actions/modal';
import { signout } from '../../store/actions/auth';
import { AUTH_MODAL } from '../../store/reducers/modal';

export const SIGNIN_VIEW = "SIGNIN_VIEW";
export const SIGNUP_VIEW = "SIGNUP_VIEW";

function Navs(props) {
	let authLinks = (
		<React.Fragment>
			<span onClick={props.openSignInModal} className="anchor-text ml-05">Sign In</span>
			<span onClick={props.openSignUpModal} className="anchor-text ml-05">Create Account</span>
		</React.Fragment>
	);

	if (props.auth.isAuthenticated) {
		authLinks = (
			<React.Fragment>
				<NavLink to={"/profile/" + props.auth.authUsername} className="anchor-text ml-05">Me</NavLink>
				<span onClick={props.signoutUser} className="anchor-text ml-05">Signout</span>
			</React.Fragment>
		)
	}

	return (
		<div className="row span-100-12">
			<NavLink to="/" className="anchor-text ml-1">Feeds</NavLink>
			{authLinks}
		</div>
	)
}

const mapStateToProps = state => ({
	auth: state.auth
});

const mapActionToProps = dispatch => ({
	signoutUser: () => dispatch(signout()),
	openSignInModal: () => dispatch(openModal(AUTH_MODAL, { view: SIGNIN_VIEW })),
	openSignUpModal: () => dispatch(openModal(AUTH_MODAL, { view: SIGNUP_VIEW })),
});

export default connect(mapStateToProps, mapActionToProps)(Navs);