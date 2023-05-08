import React from 'react';
import { Link } from 'react-router-dom';
import useLoginUser from './useLoginUser';
import { Alert } from 'react-bootstrap';

const LoginPage = () => {
	const { setEmail, setPassword, handleLogin, error } = useLoginUser();

	return (
		<div>
			<div>
				{error && <Alert variant="danger">{error}</Alert>}
				<form onSubmit={handleLogin}>
					<input
						type="email"
						placeholder="email"
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
					<input
						type="password"
						placeholder="password"
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
					<button type="submit">Login user</button>
				</form>
			</div>
			<span>
				Don't have account? <Link to="/register">Register here</Link>
			</span>
		</div>
	);
};

export default LoginPage;
