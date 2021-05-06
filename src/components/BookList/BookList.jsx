import { Link , withRouter} from 'react-router-dom';
import BookPreview from '../BookPreview';
import './BookList.scss';

const BookList = ({ books, location }) => {
	return (
		   <ul className='BookList'>
          {books.map(book => (
            <li key={book.id}>
              {
								<Link to={{
									pathname: `/books/${book.id}`,
									state: {
										from: location,
									}
								}}>
									<BookPreview {...book}/>
                </Link>
              }
            </li>
          ))}
        </ul>
	 );
}
 
export default withRouter(BookList);