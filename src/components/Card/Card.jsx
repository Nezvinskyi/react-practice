import {useState, useEffect} from 'react';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import {getCart} from '../../utils/productsApi';

const Cart = () => {
	const [cart, setCart] = useState([])
	useEffect(() => {
		getCart().then(data=>setCart(data))
	}, [])
	return (
		<IconButton>
			<Badge badgeContent={cart.length} color="secondary">
				<ShoppingCartOutlinedIcon />
			</Badge>
		</IconButton>
	);
};
 
export default Cart;