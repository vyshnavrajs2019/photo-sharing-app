import React, { Component } from 'react';
import { SIGNIN_VIEW, SIGNUP_VIEW } from '../../components/Navs/Navs';
import SignInForm from '../../components/AuthForm/SignInForm/SignInForm';
import SignUpForm from '../../components/AuthForm/SignUpForm/SignUpForm';

export class Auth extends Component {
	render() {
		let view = null;
		if (this.props.view === SIGNIN_VIEW)
			view = <SignInForm {...this.props} />;
		else if(this.props.view === SIGNUP_VIEW)
			view = <SignUpForm {...this.props} />;
		return view;
	}
}

export default Auth;