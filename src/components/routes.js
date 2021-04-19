import Products from '../Pages/Products';
import Contacts from '../Pages/Contacts';
import Counters from '../Pages/Counters/';

/* <a href="/products">Products</a>
<a href="/products/24335">Product Detail</a>
<a href="/cart">Cart</a>
<a href="/order">Order</a>
<a href="/profile">Profile</a>
<a href="/contacts">Contacts</a>
<a href="/counters">Counters</a> */

export const routes = [
  {
    path: '/products',
    label: 'Products',
    component: Products,
  },
  {
    path: '/contacts',
    label: 'Contacts',
    component: Contacts,
  },
  {
    path: '/counters',
    label: 'Counters',
    component: Counters,
  },
];
