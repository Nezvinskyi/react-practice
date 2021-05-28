import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const styles = {
    link: {
      display: 'inline-block',
      textDecoration: 'none',
      padding: 12,
      fontWeight: 700,
      color: '#2A363B',
    },
    activeLink: {
      color: '#E84A5F',
    },
  };

  return (
    <div>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Main
      </NavLink>
      <NavLink
        to="/todos"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Todos
      </NavLink>
    </div>
  );
};

export default Navigation;
