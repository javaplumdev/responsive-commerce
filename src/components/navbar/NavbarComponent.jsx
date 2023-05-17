import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Dropdown } from 'react-bootstrap';
import useLogoutUser from './useLogoutUser';
import { BiHomeAlt } from 'react-icons/bi';
import { useContext } from 'react';
import { ProductContextProvider } from '../../context/ProductContext';

const NavbarComponent = () => {
	const { handleSignOut } = useLogoutUser();
	const { currentUser } = useContext(ProductContextProvider);

	return (
		<Container className="d-flex justify-content-between align-items-center py-3">
			<Link
				to="/home"
				className="text-dark text-decoration-none d-flex align-items-center"
			>
				<BiHomeAlt size="30" className="me-2" />
				Everbloom
			</Link>
			<Dropdown>
				<Dropdown.Toggle variant="outline-dark"></Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href={`/profile/${currentUser?.uid}`}>
						Profile
					</Dropdown.Item>
					<Dropdown.Item onClick={() => handleSignOut()}>Logout</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</Container>
	);
};

export default NavbarComponent;
