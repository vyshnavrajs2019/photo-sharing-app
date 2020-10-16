import React, { Component } from 'react';
import Form from '../UI/Form/Form';
import Input from '../UI/Input/Input';
import Suggestion from './Suggestion/Suggestion';

export class Search extends Component {
	state = {
		query: ""
	}

	handleInputChange = (event) => {
		this.setState({ query: event.target.value });
	}

	handleReset = () => { 
		this.setState({ query: "" })
	}

	render() {
		return (
			<Form 
				method="GET">
					<Input
						type="text"
						value={this.state.query}
						placeholder="Search"
						changeHandler={this.handleInputChange} />
					<Suggestion clearQuery={this.handleReset} query={this.state.query} />
			</Form>
		)
	}
}

export default Search;