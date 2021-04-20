import React, { Component } from 'react';

class Form extends Component {
	state = {
		name: '',
		nickname: '',
		experience: 'junior',
		license: false
	};
	
	handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
	};
	
	handleSubmit = event => {
    event.preventDefault();
		this.props.onSubmit(this.state)
		this.reset()
	};

	handleLicenseChange = event => {
		this.setState({ license: event.currentTarget.checked })
	}
	
	reset = ()=> { this.setState({
		name: '',
		nickname: '',
	})}

	render() { 
		return (
			<form onSubmit={this.handleSubmit}>

				<label>
					Name
					<input
						type="text"
						value={this.state.name}
						name="name"
						onChange={this.handleChange}
					/>
				</label>

				<label>
					Nickname{' '}
					<input
						type="text"
						value={this.state.nickname}
						name="nickname"
						onChange={this.handleChange}
					/>
				</label>
				<br/>
				<p>Your level: </p>
				<label>
					<input type="radio" name="experience" value='junior' onChange={this.handleChange} checked={this.state.experience === 'junior' } />Junior
				</label> 
				<label>
					<input type="radio" name="experience" value='middle' onChange={this.handleChange} checked={this.state.experience === 'middle' } />Middle
				</label>
				<label>
					<input type="radio" name="experience" value='senior' onChange={this.handleChange} checked={this.state.experience === 'senior' } />Senior
				</label>
				<br />
				
				<label>
					<input type="checkbox" name="license" checked={ this.state.license} onChange={this.handleLicenseChange} /> I consent
				</label>


				<button type="submit" disabled={ !this.state.license }>Send</button>
			</form>
		 );
	};
};
 
export default Form;