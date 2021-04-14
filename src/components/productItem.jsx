const ProductItem = ({ product }) =>
	<li className='item'>
		<img src={product.img} alt={ product.name}/>
		<p>Name: {product.name}</p>
		<p>Price: {product.price}</p>
		<p>Count: {product.count}</p>
		</li>;

export default ProductItem;  