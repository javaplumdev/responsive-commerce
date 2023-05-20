import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	return (
		<footer className="mt-5">
			<Container>
				<Row>
					<Col md={6}>
						<h5>About Us</h5>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							auctor metus sit amet leo porta, et scelerisque est malesuada. Sed
							tincidunt ex a elit tristique, id tristique turpis suscipit.
							Mauris tristique tortor vel lacinia tempor.
						</p>
					</Col>
					<Col md={3}>
						<h5>Links</h5>
						<ul className="list-unstyled">
							<li>Home</li>
							<li>About</li>
							<li>Services</li>
							<li>Contact</li>
						</ul>
					</Col>
					<Col md={3}>
						<h5>Contact Us</h5>
						<ul className="list-unstyled">
							<li>123 Street, City</li>
							<li>Country</li>
							<li>Phone: 123-456-7890</li>
							<li>Email: info@example.com</li>
						</ul>
					</Col>
				</Row>
				<hr />
				<p className="text-center">© 2023 Everbloom. All rights reserved.</p>
			</Container>
		</footer>
	);
};

export default Footer;
