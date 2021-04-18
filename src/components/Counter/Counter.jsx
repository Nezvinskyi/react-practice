// из конспекта

import { Component } from 'react'

class Counter extends Component{
	constructor() {
		super();
		this.handleIncrement = this.handleIncrement.bind(this);
}

	static defaultProps = {
		step: 1,
	}

	handleIncrement(evt) {
		console.log(evt);
		console.log(this.props);
	}

	render() {
		const { step } = this.props;
		return (
			<div>
			<button type='button' onClick={this.handleIncrement}>Increment by {step}</button>
			<span>0</span>
			<button type='button'>Decrement by {step}</button>
		</div>);
}
}

export default Counter