import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
	backDrop: {
		display: 'flex',
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'grey'
	},
	modal: {
		width: 400,
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 5,
	}
})
const Modal = ({ onClose }) => {
	const classes = useStyles();
	return (
		<div className={classes.backDrop} onClick={onClose}>
			<div className={classes.modal}>
				<h3>My awesome Modal</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repellat corrupti magni id fuga porro eveniet, rerum, ad modi eaque eius ipsam error itaque, nesciunt illo dolores sit nulla ullam!</p>

				<button onClick={onClose}>Close</button>
			</div>
		</div>
	);
};
 
export default Modal;