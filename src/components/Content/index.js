import Products from '../../Pages/Products';
import Contacts from '../../Pages/Contacts';

const Content = () => {
  const { pathname } = window.location;
  return (
    <div className="content">
      {pathname === '/products' && <Products />}
      {pathname === '/contacts' && <Contacts />}
    </div>
  );
};

export default Content;
