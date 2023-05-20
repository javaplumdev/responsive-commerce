import React, { useContext } from 'react';
import Ellipse from '../../images/Ellipse 1.png';
import { ProductContextProvider } from '../../context/ProductContext';
import useGetItems from './useGetItems';
import { Spinner, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartComponent, Footer } from '../../components';
import Hero from './Hero';
import CarouselComponent from './CarouselComponent';

const Home = () => {
	const { data, isLoading } = useGetItems();
	const { addToCart } = useContext(ProductContextProvider);

	function LoadRenderData() {
		return (
			<React.Fragment>
				{data.map((item, index) => {
					return (
						<div
							key={index}
							className="card_item text-decoration-none m-2 my-3"
							style={{ maxWidth: '300px' }}
						>
							<Link to={`/product/${item.id}`}>
								<img
									src={item.image}
									alt={item.image}
									style={{
										width: '255px',
										height: '200px',
										objectFit: 'cover',
									}}
								/>
							</Link>

							<div>
								{item.name}
								<br></br>
								<p>
									<b>₱{item.price}</b>
								</p>
							</div>
							<Button
								className="me-3"
								variant="dark"
								onClick={() => {
									const product =
										data && data?.find((data) => data.id === item.id);
									addToCart(product);
								}}
							>
								Add to cart
							</Button>
						</div>
					);
				})}
			</React.Fragment>
		);
	}

	return (
		<div className="container mb-5">
			<div className="d-flex justify-content-end">
				<CartComponent />
			</div>
			<Hero />
			<div className="mt-5">
				{isLoading ? (
					<div>
						<Spinner animation="border" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					</div>
				) : (
					<div>
						<hr></hr>
						<h3>Products</h3>
						<div className="d-flex flex-wrap justify-content-center">
							<img src={Ellipse} className="ellipse" />
							<LoadRenderData />
						</div>
					</div>
				)}
			</div>
			<CarouselComponent />

			<div style={{ marginTop: '15em' }}>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
