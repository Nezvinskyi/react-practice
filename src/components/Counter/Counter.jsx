import { Component } from 'react'
import './Counter.scss'
import Value from "./Value";
import Controls from "./Controls";


class Counter extends Component{

	static defaultProps = {
		initialValue: 123
	}

	static propTypes = {
		//
	}

	state = {
		value: this.props.initialValue,
	}

	handleIncrement = (event) => {
		this.setState(prevState => ({ value: prevState.value + 1 }))

	}

	handleDecrement = () => {

		this.setState(prevState => ({ value: prevState.value - 1 }))
	}

	handleReset = () => {
		this.setState({value: 0})
	}

	render() {
		// const { step } = this.props;
		return (
			<div className='Counter'>

				<Value value={this.state.value} />

				<Controls onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onReset={this.handleReset}/>

		</div>);
}
}

export default Counter