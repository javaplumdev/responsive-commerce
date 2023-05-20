import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className="mt-5">
			<Container>
				<Row>
					<Col md={6}>
						<h5>About Us</h5>
						<p>
							Make your special one special today. "Unleash Everlasting Joy with
							Ever Bloom: Uniquely Artful, Exceptionally Fresh, and
							Competitively Priced." With the Ever Bloom Guarantee, we stand
							behind our promise to deliver not just flowers, but a unique form
							of art. Each arrangement is meticulously crafted, embodying our
							artistic vision and attention to detail.
						</p>
					</Col>
					<Col md={3}>
						<h5>Links</h5>
						<ul className="list-unstyled">
							<li>
								<Link to="/home" className="text-dark text-decoration-none">
									Home
								</Link>
							</li>
							<li>
								<Link to="/about" className="text-dark text-decoration-none">
									About
								</Link>
							</li>
							<li>
								<Link to="/contact" className="text-dark text-decoration-none">
									Contacts
								</Link>
							</li>
						</ul>
					</Col>
					<Col md={3}>
						<h5>Contact Us</h5>
						<ul className="list-unstyled">
							<li>Batangas City</li>
							<li>Country: PH</li>
							<li>Phone: 09123456789</li>
							<li>Email: everbloomguarantee@gmail.com</li>
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
