import { Component } from 'react'
import './Dropdown.scss'

class Dropdown extends Component{
	state = {
		visible: false
	}

	toggle = ()=>{this.setState(prevState=> ({visible: !prevState.visible}) )}
	show = () => {
		this.setState({visible: true})
	}
	hide = () => {
		this.setState({visible: false})
	}


	render() {
		return (
			<div className = "Dropdown" >
				<button type='button' className='Dropdown__toggle' onClick = {this.toggle}>{this.state.visible ? 'Hide' : 'Show'}</button>
			
				{this.state.visible && (<div className="Dropdown__menu">
					Dropdown menu
				</div>)}
			</div>
		)
	}
}

export default Dropdown

//onMouseOver