import React, { useState, useEffect } from 'react';
import spinner from '../spinner.gif';

const ChuckNorris = ({ token }) => {
	const [fact, setFact] = useState('');
	const [loading, setLoading] = useState(true); // Add loading state
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchFact = async () => {
			try {
				const response = await fetch('http://localhost:3333/fact', {
					headers: {
						'Authorization': `Bearer ${token}`
					}
				});

				if (response.ok) {
					const data = await response.json();
					setFact(data.fact);
					setLoading(false); // Set loading to false after fetching data
				} else {
					setError('Failed to fetch Chuck Norris fact.');
					setLoading(false); // Set loading to false after an error
				}
			} catch (error) {
				setError('An error occurred. Please try again.');
				setLoading(false); // Set loading to false after an error
			}
		};

		fetchFact();
	}, []);

	return (
		<div>
			<h2>Chuck Norris Fact</h2>
			{loading ? ( // Display loading spinner while fetching data
				<img src={spinner} alt="Loading..." />
			) : error ? (
				<p style={{ color: 'red' }}>{error}</p>
			) : (
				<p>{fact}</p>
			)}
		</div>
	);
};

export default ChuckNorris;
