import ProductItem from './productItem'

const ProductList = ({ products }) => (
		<ul>
		{products.map(product => (
				!!product.count &&
				(<ProductItem key={product.id} product={product} />)
		
			))}
		</ul>
	)

export default ProductList