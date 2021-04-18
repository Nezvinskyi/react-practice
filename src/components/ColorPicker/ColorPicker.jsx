import React, { Component } from 'react';
import './ColorPicker.css'

class ColorPicker extends Component {
	state = {
		activeOptionIdx: 1,
	}

	setActiveIdx = (index) => {
		this.setState({activeOptionIdx: index})
}

makeOptionClassNames = (index) => {
	const optionClasses = ['ColorPicker__option']
		if (index === this.state.activeOptionIdx) {
			optionClasses.push('ColorPicker__option--active')
	}
	return optionClasses.join(' ')
}

	render() {
		const { activeOptionIdx } = this.state;
		const {options} = this.props

		const {label} = options[activeOptionIdx];

		return <div className='ColorPicker' >
			<h1 className='ColorPicker__title'>Color Picker</h1>
			<p>The color is {label} </p>
			{this.props.options.map(({ label, color }, index) => (

				<button
					key={label}
					className={this.makeOptionClassNames(index)}
					style={{
						backgroundColor: color						
					}}
					onClick ={()=>this.setActiveIdx(index)}
				></button>)
			)}
		</div>
	}
}

export default ColorPicker