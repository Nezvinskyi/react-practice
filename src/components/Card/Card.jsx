import { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Badge from '@material-ui/core/Badge';
import { getCart } from '../../utils/productsApi';
import { useSelector } from 'react-redux';

const getTodosCount = state => state.todos.items.length;

const Cart = () => {
  const count = useSelector(getTodosCount);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    getCart().then(data => setCart(data));
  }, []);
  return (
    <IconButton>
      <Badge badgeContent={count} color="secondary">
        <ShoppingCartOutlinedIcon />
      </Badge>
    </IconButton>
  );
};

export default Cart;
