import { routes } from '../routes';
import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  active: {
    backgroundColor: '#5f4b32',
    color: 'white',
  },
});

const Menu = () => {
  const classes = useStyles();

  return (
    <div className="menu">
      {/* <Link to="/">Menu</Link> */}

      {routes.map(({ path, exact, label }) => (
        <NavLink
          activeClassName={classes.active}
          key={path}
          to={path}
          exact={exact}
        >
          {label}
        </NavLink>
      ))}

      {/* <Link to="/products">Products</Link>
    <Link to="/contacts">Contacts</Link> */}
    </div>
  );
};

export default Menu;
