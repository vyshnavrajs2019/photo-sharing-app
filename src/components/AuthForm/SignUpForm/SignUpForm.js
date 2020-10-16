import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';
import PrimaryButton from '../../UI/Button/PrimaryButton';
import { validateLength, validationMessage, MIN_LENGTH, VALUE_NOT_AVAILABLE, PASSWORDS_DONOT_MATCH } from '../../../utils/validations';
import { createUser } from '../../../store/actions/user';
import { closeModal } from '../../../store/actions/modal';

export class SignUpForm extends Component {
	state = {
		username: "",
		password: "",
		confirmPassword: "",
		errorMsgs: []
	}

	createUser = () => {
		const user = {
			username: this.state.username,
			password: this.state.password,
			name: {
				firstName: "",
				lastName: ""
			},
			profileImgURL: "https://www.catbytes.community/sites/default/files/styles/user_profile_picture/public/default_images/default-user_1.png?itok=wBudL_7y",
			isActive: true,
			followers: [],
		};
		this.props.createUser(user);
		this.props.closeModal();
	}

	validateCredentials = () => {
		const errorMsgs = [];

		const username = this.state.username;
		const password = this.state.password;
		const confirmPassword = this.state.confirmPassword;

		// Check username valid
		let isUsernameValid = true;
		if (!validateLength(username, { minLength: 6 })) {
			errorMsgs.push({
				field: "username",
				error: validationMessage(MIN_LENGTH, { 0: "Username", 1: 6 })
			});
			isUsernameValid = false;
		}
		else if (this.props.users[username]) {
			errorMsgs.push({
				field: "username",
				error: validationMessage(VALUE_NOT_AVAILABLE, { 0: "Username" })
			});
			isUsernameValid = false;
		}

		// Check password valid
		let isPasswordValid = true;
		if (!validateLength(password, { minLength: 8 })) {
			errorMsgs.push({
				field: "password",
				error: validationMessage(MIN_LENGTH, { 0: "Password", 1: 8 })
			});
			isPasswordValid = false;
		}
		if (password !== confirmPassword) {
			errorMsgs.push({
				field: "password",
				error: validationMessage(PASSWORDS_DONOT_MATCH, { 0: "Passwords" })
			});
			isPasswordValid = false;
		}
		this.setState({ errorMsgs });
		return isUsernameValid && isPasswordValid;
	}

	onSubmitHandler = () => {
		this.validateCredentials() && this.createUser();
	}

	onInputChangeHandler = (property, event) => {
		this.setState({ [property]: event.target.value });
	}

	render() {
		const usernameErrors = this.state.errorMsgs.filter(error => error.field === "username").map(error => <span className="error small span-100-12">{error.error}</span>);
		const passwordErrors = this.state.errorMsgs.filter(error => error.field === "password").map(error => <span className="error small span-100-12">{error.error}</span>);

		return (
			<Form
				classes="keep-50-space"
				submitHandler={this.onSubmitHandler}
				method="POST">
				<div className="row span-100-12 keep-50-space">
					{usernameErrors}
					<Input
						changeHandler={(event) => this.onInputChangeHandler('username', event)}
						value={this.state.username}
						type="text"
						placeholder="Username" />
				</div>
				<div className="row span-100-12 keep-50-space">
					{passwordErrors}
					<Input
						changeHandler={(event) => this.onInputChangeHandler('password', event)}
						value={this.state.password}
						type="password"
						placeholder="Password" />
				</div>
				<div className="row span-100-12 keep-50-space">
					<Input
						changeHandler={(event) => this.onInputChangeHandler('confirmPassword', event)}
						value={this.state.confirmPassword}
						type="password"
						placeholder="Confirm Password" />
				</div>
				<div className="row span-100-12">
					<PrimaryButton
						handleClick={() => { }}
						type="submit"
						label="Sign Up" />
				</div>
			</Form>
		)
	}
}

const mapStateToProps = state => {
	return {
		users: state.users
	}
}

const mapActionsToProps = dispatch => {
	return {
		createUser: user => dispatch(createUser(user)),
		closeModal: () => dispatch(closeModal())
	}
}

export default connect(mapStateToProps, mapActionsToProps)(SignUpForm);