import moment from 'moment';
import { useState, useEffect } from "react";

const Timer = () => {
	const [date, setDate] = useState(new Date());
	const formattedDate = moment(date).format('YYYY MM DD hh:mm:ss')

	//did mount
	useEffect(() => {
		const id = setInterval(() => {
			setDate(new Date())
		}, 1000)

		console.log('did mount');
		return () => {
			console.log('will unmount')
			clearInterval(id)
		};
	}, [])

	// // did update
	// useEffect(() => { })
	
	return (
		<div className="timer">
			<fieldset>
				<legend>Timer</legend>
				<p>current date: { formattedDate }</p>
			</fieldset>
		</div>
	 );
}
 
export default Timer;