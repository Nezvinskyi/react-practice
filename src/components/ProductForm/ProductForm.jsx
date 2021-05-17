import {useState} from 'react'
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	productForm: {
		display: 'flex',
		flexDirection: 'column'
	},
	label: {
		display: 'flex'
	},
	input: {
		flex: 1,
		marginLeft: 10,
	},
	fieldset: {
		display: 'flex',
		justifyContent: 'space-between',
	}
});

const initialState = {
	name: '',
	price: '',
	count: '',
	color: 'white',
	insurance: false,
	software: false,
	image: 'phone'
};

const ProductForm = ({ onSubmit }) => {
	const classes = useStyles()
	// const [name, setName] = useState('');
	// const [price, setPrice] = useState(0);
	// const [count, setCount] = useState(0);
	// const [image, setImage] = useState('phone');

	const [state, setState] = useState(initialState);
	const [error, setError] = useState('')
	const { name, price, count, color, image, insurance, software } = state;

	const handleSubmit = (e) => {
		e.preventDefault();

		// const hasEmptyField = Object.values(state).some(item => !item);
		// if (hasEmptyField) {
		// 	setError('Fields are required')
		// 	return
		// }

		const newItem = {
			id: Date.now(), //uuid
			name,
			price: Number(price),
			count: Number(count),
			color,
			insurance,
			software,
			img: image,
		};
		
		onSubmit(newItem);
		setState(initialState);
		setError('')
		// setName('');
		// setPrice('');
		// setCount('');
	}

	// const handleChangeName = (e) => setName(e.target.value);
	// const handleChangePrice = (e) => setPrice(e.target.value);
	// const handleChangeCount = (e) => setCount(e.target.value);
	// const handleChangeImage = (e) => setImage(e.target.value);

	const handleChange = (e) => {
		setState(prev => ({
			...prev,
			[e.target.name]: e.target.value
		}))
	};

	const handleCheckboxChange = (e) => {
		setState(prev => ({
			...prev,
			[e.target.name]: e.target.checked
		}))
	};

	return (
		<form className={classes.productForm} onSubmit={handleSubmit}>
			<label className={classes.label}>
				<span>Name:</span>
				<input className={classes.input} type="text" value={name} onChange={handleChange} name='name' />
			</label>

			<label className={classes.label}>
				<span>Price:</span>
				<input className={classes.input} type="number" value={price} onChange={handleChange} name='price' />
			</label>

			<label className={classes.label}>
				<span>Count:</span>
				<input className={classes.input} type="number" value={count} onChange={handleChange} name='count' />
			</label>

			<label className={classes.label}>
				<span>Image:</span>
				<select className={classes.input} value={image} onChange={handleChange} name='image'>
					<option value="phone">phone</option>
					<option value="notebook">notebook</option>
				</select>
			</label>

			<fieldset className={classes.fieldset}>
				<legend>Color: </legend>
				<label className="classes.label">
					<span>white</span>
					<input type="radio" name='color' value='white' onChange={handleChange} checked={color === 'white'} />
				</label>
				<label className="classes.label">
					<span>grey</span>
					<input type="radio" name='color' value='grey' onChange={handleChange} checked={color === 'grey'} />
				</label>
				<label className="classes.label">
					<span>black</span>
					<input type="radio" name='color' value='black' onChange={handleChange} checked={color === 'black'} />
				</label>
			</fieldset>

			<fieldset className={classes.fieldset}>
				<label>
					<span>Advanced insurance (12M)</span>
					<input type="checkbox" name='insurance' checked={insurance} onChange={handleCheckboxChange} />
				</label>
				<label>
					<span>Software</span>
					<input type="checkbox" name='software' checked={software} onChange={handleCheckboxChange} />
				</label>
			</fieldset>

			{error && <p>{error}</p>}
			<button type='submit'>+ Add</button>
		</form>
	);
};
 
export default ProductForm;