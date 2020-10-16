import React, { Component } from 'react'
import Form from '../../UI/Form/Form';
import Input from '../../UI/Input/Input';
import TextArea from '../../UI/Input/TextArea';
import { updateUser } from '../../../store/actions/user';
import { connect } from 'react-redux';
import { validateLength, validationMessage, MIN_LENGTH } from '../../../utils/validations';
import { deepCopy } from '../../../utils/clone';
import PrimaryButton from '../../UI/Button/PrimaryButton';
import { closeModal } from '../../../store/actions/modal';
import { createPic } from '../../../store/actions/pic';

export class NewPicForm extends Component {
	state = {
		imgURL: {
			value: "",
			errors: []
		},
		description: {
			value: "",
			errors: []
		}
	}

	submitHandler = () => {
		const newState = deepCopy(this.state);
		const isImgURLValid = validateLength(this.state.imgURL.value, { minLength: 10 });
		if (!isImgURLValid) {
			newState.imgURL.errors = [validationMessage(MIN_LENGTH, { 0: "URL", 1: 10 })]
		}

		let isDescriptionValid = true;
		if (!this.props.hideDescription) {
			isDescriptionValid = validateLength(this.state.description.value, { maxLength: 200 });
		}

		if (isImgURLValid && isDescriptionValid) {
			const user = deepCopy(this.props.users[this.props.auth.authUsername]);
			if (this.props.hideDescription) {
				// Profile
				user.profileImgURL = newState.imgURL.value;
				this.props.updateUser(user);
			} else {
				// New Pic
				const pic = {
					pk: new Date().getTime(),
					imgURL: this.state.imgURL.value,
					owner: this.props.auth.authUsername,
					createdOn: new Date(),
					updatedOn: new Date(),
					body: this.state.description.value,
					likes: [],
					comments: []
				};
				this.props.createPic(pic);
			}
			this.props.closeModal();
		} else {
		}
	}

	onInputChangeHandler = (property, event) => {
		this.setState({ [property]: { value: event.target.value, errors: [] } });
	}

	render() {
		return (
			<Form classes="keep-50-space" method="POST" submitHandler={this.submitHandler}>
				<div className="row span-100-12 keep-50-space">
					{}
					<Input
						changeHandler={(event) => this.onInputChangeHandler('imgURL', event)}
						value={this.state.imgURL.value}
						type="url"
						placeholder="Pic URL" />
				</div>
				{this.props.hideDescription ? null : (
					<div className="row span-100-12 keep-50-space">
						{}
						<TextArea
							changeHandler={(event) => this.onInputChangeHandler('description', event)}
							value={this.state.description.value}
							placeholder="Description (optional)" />
					</div>
				)}
				<div className="row span-100-12">
					<PrimaryButton
						handleClick={() => { }}
						type="submit"
						label="Add" />
				</div>
			</Form>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	users: state.users
});

const mapActionToProps = dispatch => ({
	updateUser: user => dispatch(updateUser(user)),
	closeModal: () => dispatch(closeModal()),
	createPic: (pic) => dispatch(createPic(pic))
});

export default connect(mapStateToProps, mapActionToProps)(NewPicForm);