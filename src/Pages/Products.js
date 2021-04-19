import { useState } from 'react';
import ProductList from '../components/productList';

const products = [
  {
    id: 1,
    name: 'phone 1',
    price: 800,
    count: 10,
    img: 'iphone1',
  },
  {
    id: 2,
    name: 'phone 2',
    price: 900,
    count: 11,
    img: 'iphone',
  },
  {
    id: 3,
    name: 'phone 3',
    price: 1100,
    count: 8,
    img: 'iphone',
  },
  {
    id: 4,
    name: 'notebook',
    price: 1800,
    count: 11,
    img: 'notebook',
  },
];

const Products = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'phone 1',
      price: 900,
      count: 10,
      img: 'iphone1',
    },
  ]);

  return (
    <div className="products">
      <ProductList products={products} />
    </div>
  );
};

export default Products;
