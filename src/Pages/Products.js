import { useEffect, useState } from 'react';
import { getProducts, addProduct, deleteProduct } from '../utils/productsApi';
import ProductList from '../components/productList';
import ProductForm from '../components/ProductForm';

// const products = [
//   {
//     id: 1,
//     name: 'phone 1',
//     price: 800,
//     count: 10,
//     img: 'iphone1',
//   },
//   {
//     id: 2,
//     name: 'phone 2',
//     price: 900,
//     count: 11,
//     img: 'iphone',
//   },
//   {
//     id: 3,
//     name: 'phone 3',
//     price: 1100,
//     count: 8,
//     img: 'iphone',
//   },
//   {
//     id: 4,
//     name: 'notebook',
//     price: 1800,
//     count: 11,
//     img: 'notebook',
//   },
// ];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddProduct = newItem => {
    setIsLoading(true);

    addProduct(newItem)
      .then(data => setProducts(prev => [...prev, data]))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const handleDeleteProduct = id => {
    setIsLoading(true);

    deleteProduct(id)
      .then(() => setProducts(prev => prev.filter(item => item.id !== id)))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  //componentDidMount
  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem('products'));

    setIsLoading(true);

    getProducts()
      .then(data => setProducts(data))
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem('products', JSON.stringify(products));
  // }, [products]);

  return (
    <div className="products">
      <ProductForm onSubmit={handleAddProduct} />

      {error && (
        <p>
          {error} <button onClick={() => setError(undefined)}>x</button>{' '}
        </p>
      )}

      {isLoading && <p>Loading</p>}
      <ProductList products={products} onDelete={handleDeleteProduct} />
    </div>
  );
};

export default Products;
