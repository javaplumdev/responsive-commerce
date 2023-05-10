import React from 'react';
import { Link } from 'react-router-dom';
import useLoginUser from './useLoginUser';
import { Alert, Button, Form } from 'react-bootstrap';

const LoginPage = () => {
	const { setEmail, setPassword, handleLogin, error } = useLoginUser();

	return (
		<div
			className="d-flex justify-content-center align-items-center"
			style={{ height: '100vh' }}
		>
			<div>
				<div>
					<p>Login page</p>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleLogin}>
						<Form.Group className="mb-3" controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								placeholder="Enter email"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>

						<Button type="submit" className="w-100 mb-3">
							Login user
						</Button>
						<p className="text-center w-100">
							Don't have account? <Link to="/register">Register here</Link>
						</p>
					</Form>
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
