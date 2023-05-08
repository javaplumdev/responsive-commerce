import React from 'react';
import useCreateUser from './useCreateUser';
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

const RegisterPage = () => {
	const { setEmail, setPassword, handleSubmit, error } = useCreateUser();

	return (
		<div>
			Register User
			{error && <Alert variant="danger">{error}</Alert>}
			<form onSubmit={handleSubmit}>
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
				<button type="submit">Create user</button>
			</form>
			<span>
				Already have account? <Link to="/">Log in here</Link>
			</span>
		</div>
	);
};

export default RegisterPage;
