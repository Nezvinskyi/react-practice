import {NavLink} from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
	return (
		<nav className='nav nav-pills'>
			<NavLink
				to={routes.home}
				exact
				className="nav-link"
				activeClassName="active"
			>
			Home
			</NavLink>
			<NavLink
				to={routes.authors}
				className="nav-link"
				activeClassName="active"
			>
				Authors
			</NavLink>
			<NavLink
				to={routes.books}
				className="nav-link"
				activeClassName="active"
			>
				Books
			</NavLink>
		</nav>
	 );
}
 
export default Navigation;