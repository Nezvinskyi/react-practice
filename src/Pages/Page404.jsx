import {useHistory} from 'react-router-dom';

const Page404 = () => {
	const history = useHistory()
	const handleGoHome = () => {
		history.push({
			pathname: '/',
		})
	} 
	return (
		<div className="404">
			<h2>404</h2>
			<p>Page is not found</p>
			<button onClick={handleGoHome}>Go back</button>
		</div>
	);
};
 
export default Page404;