import React, { Component } from 'react';
import Form from '../UI/Form/Form';
import Input from '../UI/Input/Input';

export class Search extends Component {
	state = {
		query: ""
	}

	handleInputChange = (event) => {
		this.setState({ query: event.target.value });
	}

	handleSubmit = () => {

	}

	handleReset = () => { }

	render() {
		return (
			<Form 
				method="GET" 
				submitHandler={this.handleSubmit} 
				resetHandler={this.handleReset}>
					<Input
						type="text"
						value={this.state.query}
						placeholder="Search"
						changeHandler={this.handleInputChange} />
			</Form>
		)
	}
}

export default Search;
