import ProductList from '../components/productList';

const products = [
  {
    id: 1,
    name: 'phone 1',
    price: 800,
    count: 10,
    img:
      'https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg',
  },
  {
    id: 2,
    name: 'phone 2',
    price: 900,
    count: 0,
    img:
      'https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg',
  },
  {
    id: 3,
    name: 'phone 3',
    price: 1100,
    count: 8,
    img:
      'https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg',
  },
  {
    id: 4,
    name: 'notebook',
    price: 1800,
    count: 11,
    img:
      'https://cdn.pixabay.com/photo/2014/05/02/21/49/laptop-336373_1280.jpg',
  },
];

const Products = () => (
  <div className="products">
    <ProductList products={products} />
  </div>
);

export default Products;
