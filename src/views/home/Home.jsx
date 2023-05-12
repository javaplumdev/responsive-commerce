import React from 'react';
import useGetItems from './useGetItems';
import { Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { SAMPLE_DATA_PICTURE } from '../../config/imageData';
import { CartComponent } from '../../components';

const Home = () => {
	const { data, isLoading } = useGetItems();

	function LoadRenderData() {
		return (
			<React.Fragment>
				{data.map((item, index) => {
					return (
						<div
							key={index}
							className="text-decoration-none m-2"
							style={{ maxWidth: '300px' }}
						>
							<Link to={`/product/${item.id}`}>
								<img
									src={SAMPLE_DATA_PICTURE}
									alt={SAMPLE_DATA_PICTURE}
									style={{ width: '100%', objectFit: 'cover' }}
								/>
							</Link>

							<div>
								{item.name}
								<br></br>
								<b>₱{item.price}</b>
							</div>
						</div>
					);
				})}
			</React.Fragment>
		);
	}

	return (
		<Container>
			<div className="d-flex justify-content-between align-items-center">
				<p>Items</p>
				<CartComponent />
			</div>
			<div className="mt-5">
				{isLoading ? (
					<div>
						<Spinner animation="border" role="status">
							<span className="visually-hidden">Loading...</span>
						</Spinner>
					</div>
				) : (
					<div className="d-flex flex-wrap justify-content-center">
						<LoadRenderData />
					</div>
				)}
			</div>
		</Container>
	);
};

export default Home;
