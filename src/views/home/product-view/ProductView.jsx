import React, { useContext } from 'react';
import { ProductContextProvider } from '../../../context/ProductContext';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { CartComponent } from '../../../components';
import { SAMPLE_DATA_PICTURE } from '../../../config/imageData';
import useGetItems from '../../home/useGetItems';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductView = () => {
	const { increaseItemQty, decreaseItemQty } = useContext(
		ProductContextProvider
	);
	const { id } = useParams();
	const { data } = useGetItems();

	const product = data && data?.find((item) => item.id === id);
	const { name, price, id: productId } = product;

	return (
		<Container>
			<div className="d-flex justify-content-between align-items-center">
				<p>ProductView</p> <CartComponent />
			</div>
			<div className="d-flex flex-wrap mt-3">
				<div style={{ maxWidth: '500px' }} className="me-3">
					<img
						src={SAMPLE_DATA_PICTURE}
						style={{
							width: '100%',
							height: '300px',
							objectFit: 'cover',
						}}
					/>
				</div>
				<div style={{ width: '300px' }}>
					<h4>{name}</h4>
					<p className="fw-bold">₱{price}</p>
					<p>This is sample description</p>
					<div className="d-flex my-3">
						<Button
							variant="outline-dark"
							className="px-3"
							onClick={() => increaseItemQty(productId)}
						>
							+
						</Button>
						<h5 className="px-3">0</h5>
						<Button
							variant="outline-dark"
							className="px-3"
							onClick={() => decreaseItemQty(productId)}
						>
							-
						</Button>
					</div>
					<Button className="me-3" variant="outline-dark">
						Add to cart
					</Button>
					<Button variant="dark" className="my-2">
						Buy now
					</Button>
				</div>
			</div>
			<div className="mt-5">
				<h4>Check more items</h4>
				<div className="d-flex flex-wrap">
					{data &&
						data?.map((item) => {
							if (item.id !== id) {
								const { name, price } = item;

								return (
									<Link
										to={`/product/${item.id}`}
										className="text-decoration-none text-dark me-2"
									>
										<img
											src={SAMPLE_DATA_PICTURE}
											className="w-100"
											style={{ height: '170px', objectFit: 'cover' }}
										/>
										<div>
											{name}
											<br></br>
											<b>₱{price}</b>
										</div>
									</Link>
								);
							}
						})}
				</div>
			</div>
		</Container>
	);
};

export default ProductView;
