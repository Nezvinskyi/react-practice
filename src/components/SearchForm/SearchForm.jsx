import React, { Component } from 'react';

class SearchForm extends Component {
	state = { query: '' };

	handleChange = event => {
		this.setState({ query: event.currentTarget.value });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.query)
		
		this.setState({ query: '' });
	};

	render() { 
		return (
			<form onSubmit= {this.handleSubmit}>
				<input type="text" value={this.state.query} onChange={ this.handleChange }/>
				<button type='submit'>Search</button>
			</form>
		 );
	}
}
 
export default SearchForm;