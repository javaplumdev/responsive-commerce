import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Dropdown, NavDropdown } from 'react-bootstrap';
import useLogoutUser from './useLogoutUser';
import { BiHomeAlt } from 'react-icons/bi';
import { useContext } from 'react';
import { ProductContextProvider } from '../../context/ProductContext';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
	const { handleSignOut } = useLogoutUser();
	const { currentUser } = useContext(ProductContextProvider);

	return (
		<React.Fragment>
			<Navbar
				collapseOnSelect
				expand="md"
				bg="light"
				variant="light"
				className="mb-3"
			>
				<Container>
					<Navbar.Brand href="/home">
						<Link
							to="/home"
							className="text-dark text-decoration-none d-flex align-items-center"
						>
							<img
								src="https://scontent.fmnl17-4.fna.fbcdn.net/v/t1.15752-9/272265117_362486718671653_6925294884897779525_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeFJu-F1uhYY6doay-jCVf2ABnoNkGlBd6UGeg2QaUF3pX-tj4dKBOefq1XFgHjE9h5et2T1NIoukOtZ4hICiaK2&_nc_ohc=527cd1S_quAAX8zJBSw&_nc_ht=scontent.fmnl17-4.fna&oh=03_AdRs3-iXq6kkhIRorGDd1IEt9Xm34YWTNiNlDcjIem3-Mw&oe=648EFE1B"
								style={{ width: '55px', borderRadius: '50%' }}
							/>
							<Link
								to="/home"
								className="navbar__text mx-2 text-decoration-none text-dark"
							>
								Ever Bloom
							</Link>
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link>
								<Link to="/about" className="text-decoration-none text-dark">
									About us
								</Link>
							</Nav.Link>
							<Nav.Link>
								<Link to="/contact" className="text-decoration-none text-dark">
									Contacts
								</Link>
							</Nav.Link>
						</Nav>
						<Nav>
							<Dropdown>
								<Dropdown.Toggle variant="outline-dark"></Dropdown.Toggle>

								<Dropdown.Menu>
									<Dropdown.Item href={`/profile/${currentUser?.uid}`}>
										Profile
									</Dropdown.Item>
									<Dropdown.Item onClick={() => handleSignOut()}>
										Logout
									</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	);
};

export default NavbarComponent;
