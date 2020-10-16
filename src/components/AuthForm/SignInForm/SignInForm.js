import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';
import PrimaryButton from '../../UI/Button/PrimaryButton';
import { validationMessage, validateLength, MIN_LENGTH, INVALID_CREDENTIALS } from '../../../utils/validations';
import { signin } from '../../../store/actions/auth';
import { updateUser } from '../../../store/actions/user';
import { closeModal } from '../../../store/actions/modal';
import { deepCopy } from '../../../utils/clone';
import sleep from '../../../utils/sleep';

export class SignInForm extends Component {
	state = {
		username: {
			value: "",
			errors: []
		},
		password: {
			value: "",
			errors: []
		},
		NON_FIELD_ERROR: [],
	}

	onSubmitHandler = async () => {
		const newState = deepCopy(this.state);

		const username = this.state.username.value;
		const password = this.state.password.value;

		const isUsernameValid = validateLength(username, { minLength: 6 });
		if (!isUsernameValid)
			newState.username.errors = [validationMessage(MIN_LENGTH, { 0: "Username", 1: 6 })];

		const isPasswordValid = validateLength(password, { minLength: 8 });
		if (!isPasswordValid)
			newState.password.errors = [validationMessage(MIN_LENGTH, { 0: "Password", 1: 6 })];

		if (isUsernameValid && isPasswordValid) {
			this.props.loginUser({ username, password }, this.props.users);
			await sleep(0);
			if (!this.props.auth.isAuthenticated) {
				newState.NON_FIELD_ERROR = [INVALID_CREDENTIALS];
			} else {
				if (this.checkIfAuthenticated())
					return;
			}
		}
		this.setState({ ...newState });
	}

	onInputChangeHandler = (property, event) => {
		this.setState({ [property]: { value: event.target.value, errors: [] }, NON_FIELD_ERROR: [] });
	}

	checkIfAuthenticated = () => {
		if (this.props.auth.isAuthenticated) {
			const username = this.props.auth.authUsername;
			const user = this.props.users[username];
			if (!user.isActive) {
				const authUser = { ...user, isActive: true };
				this.props.updateUser(authUser);
			}
			this.props.closeModal();
		}
		return this.props.auth.isAuthenticated;
	}

	componentDidMount() {
		this.checkIfAuthenticated();
	}

	// componentDidUpdate() {
	// 	this.checkIfAuthenticated();
	// }

	render() {
		const nonFieldErrors = this.state.NON_FIELD_ERROR.map((error, index) => <span className="error small span-100-12" key={index}>{error}</span>);
		const usernameErrors = this.state.username.errors.map((error, index) => <span className="error small span-100-12" key={index}>{error}</span>);
		const passwordErrors = this.state.password.errors.map((error, index) => <span className="error small span-100-12" key={index}>{error}</span>);

		return (
			<Form
				classes="keep-50-space"
				submitHandler={this.onSubmitHandler}
				method="POST">
				{nonFieldErrors.length ? (
					<div className="row span-100-12 keep-50-space">
						{nonFieldErrors}
					</div>
				) : null}
				<div className="row span-100-12 keep-50-space">
					{usernameErrors}
					<Input
						changeHandler={(event) => this.onInputChangeHandler('username', event)}
						value={this.state.username.value}
						type="text"
						placeholder="Username" />
				</div>
				<div className="row span-100-12 keep-50-space">
					{passwordErrors}
					<Input
						changeHandler={(event) => this.onInputChangeHandler('password', event)}
						value={this.state.password.value}
						type="password"
						placeholder="Password" />
				</div>
				<div className="row span-100-12">
					<PrimaryButton
						handleClick={() => { }}
						type="submit"
						label="Sign In" />
				</div>
			</Form>
		)
	}
}

const mapStateToProps = state => ({
	users: state.users,
	auth: state.auth
});

const mapActionToProps = dispatch => ({
	loginUser: (user, users) => dispatch(signin(user, users)),
	updateUser: user => dispatch(updateUser(user)),
	closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapActionToProps)(SignInForm);