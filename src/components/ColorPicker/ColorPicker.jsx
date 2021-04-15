import './ColorPicker.css' 

// const styles = {
// 	option: {
// 		display: 'inline-block',
// 		width: 40,
// 		height: 40,
// 		margin: 4
// 	},
// }

const ColorPicker = ({options}) => {
	return <div className='ColorPicker' >
		<h1  className='ColorPicker__title'>Color Picker</h1>
		{options.map(({label, color}) => (
			<span key={label} className= 'ColorPicker__option' style={{ backgroundColor: color}}></span>
		))}
	</div>
}

export default ColorPicker