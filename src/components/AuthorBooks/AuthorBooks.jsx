import {NavLink} from 'react-router-dom';

const AuthorBooks = ({ books }) => {
	return (
		<>
			<h2>Author's books: { }</h2>
			<ul>
				{books.map(book =>
					<li key={book.id}><NavLink to={`/books/${book.id}`}>{book.title }</NavLink></li>
					)}
			</ul>
		</>
	 );
}
 
export default AuthorBooks;