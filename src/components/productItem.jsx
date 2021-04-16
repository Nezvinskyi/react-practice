import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { createUseStyles } from 'react-jss';

import {  loadImage } from "../utils/loadImage";

const useStyles = createUseStyles({
	item: {
		display: 'flex',
		marginBottom: 10,
		alignItems: 'flex-start',
		// '& img': {
		// 	width: 200,
		// },
		// '&:hover': {
		// 	backgroundColor: (x) => (x > 1000 ? 'cadetblue': 'coral'),
		// 	color: 'white',
		// }
	},

	card: {
		padding: 10,
	},

	image: {
		width: 200,
	}
})

const ProductItem = ({ product }) =>
{
	const classes = useStyles(product.price)
	return (
		<li className={classes.item}>
			<CardActionArea >
				<Card className={classes.card}>
					<img className={classes.image} src={loadImage(product.img)} alt={product.name} />
					<p>Name: {product.name}</p>
					<p>Price: {product.price}</p>
					<p>Count: {product.count}</p>
				</Card>
			</CardActionArea>
			<IconButton>
				<AddShoppingCartIcon />
			</IconButton>
			
		</li>)
}

export default ProductItem;  