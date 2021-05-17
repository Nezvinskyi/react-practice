const MovieDetails = ({ match: { params: { id } }, history, location: {state}}) => {
	return (
		<div className="movie-details">
			<h2>Movie details: {id}</h2>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, ratione!</p>

			<button
				onClick={() =>
					history.push({
						pathname: '/movie-search',
						search: `?query=${state.query}`
					})}>Go Back</button>
		</div>
	);
};
 
export default MovieDetails;