import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo} from '../../redux/todos/todos-operations';
import './TodoEditor.scss'

class TodoEditor extends Component {
	state = {
		message: ''
	};
	
	handleChange = event => {
		this.setState({ message: event.currentTarget.value })
	};

	handleSubmit = event => {
		event.preventDefault();

		if (this.state.message) {
			this.props.onSubmit(this.state.message);
			this.props.onSave();
			this.setState({ message: '' })
			return
		}

		alert('please enter the text')
	};
	render() { 
		return (
			<form className='TodoEditor' onSubmit={this.handleSubmit}>
				<textarea className='TodoEditor__textarea' value={this.state.message} onChange={this.handleChange}></textarea>

				<button type='submit' className='TodoEditor__button'>Save</button>
			</form>
		 );
	};
};

const mapDispatchToProps = dispatch => ({
	onSubmit: (text)=>dispatch(addTodo(text))
})
 
export default connect(null, mapDispatchToProps)(TodoEditor);