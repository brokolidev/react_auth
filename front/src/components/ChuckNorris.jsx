import React, { useEffect, useState } from 'react';

const ChuckNorris = ({ token }) => {
	const [fact, setFact] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchFact = async () => {
			try {
				const response = await fetch('http://localhost:3333/fact', {
					method: 'GET',
					headers: {
						'Authorization': `Bearer ${token}`,
						'Content-Type': 'application/json',
					},
				});

				if (!response.ok) {
					throw new Error('Failed to fetch Chuck Norris fact.');
				}

				const data = await response.json();
				console.log(data);
				setFact(data.fact);
			} catch (error) {
				setError(error.message);
			}
		};

		fetchFact();
	}, [token]);

	return (
		<div>
			<h2>Chuck Norris Fact</h2>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			{fact && <p>{fact}</p>}
		</div>
	);
};

export default ChuckNorris;
