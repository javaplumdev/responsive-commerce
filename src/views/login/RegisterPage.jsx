import React from 'react';
import useCreateUser from './useCreateUser';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
	const { setEmail, setPassword, handleSubmit } = useCreateUser();

	return (
		<div>
			Register User
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
