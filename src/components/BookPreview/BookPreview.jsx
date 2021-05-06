import './BookPreview.scss'

const BookPreview = ({ imgUrl, title }) => {
	return (
		<div className="card">
			<div className="BookPreview-thumb">
				<img src={imgUrl} alt={title} />
			</div>
			<div className="card-body">
				<h4 className="card-title">{title}</h4>
			</div>

		</div>
	);
};
 
export default BookPreview;