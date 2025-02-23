import React, { useState } from 'react';

const LoginForm = ({ setToken }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		// Input validation
		if (username === '' || password === '') {
			setError('Username and password are required.');
			return;
		}

		// Fetch to the backend /login route
		try {
			const response = await fetch('http://localhost:3333/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
                //ensure that any casing of the username will work.
				body: JSON.stringify({ username: username.toLowerCase(), password }),
			});

			const data = await response.json();

			if (response.ok) {
				// Set the token in the parent component's state
				setToken(data.uuid);
			} else {
				setError(data.message || 'Login failed.');
			}
		} catch (error) {
			setError('An error occurred. Please try again.');
		}
	};

	return (
		<div>
			<h2>Login</h2>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">Username:</label>
					<input
						type="email"
						id="username"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LoginForm;
