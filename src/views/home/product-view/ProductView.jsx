import React, { useContext } from 'react';
import { ProductContextProvider } from '../../../context/ProductContext';
import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { CartComponent } from '../../../components';
import { SAMPLE_DATA_PICTURE } from '../../../config/imageData';
import useGetItems from '../../home/useGetItems';
import { Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductView = () => {
	const { addToCart } = useContext(ProductContextProvider);
	const { id } = useParams();
	const { data, isLoading } = useGetItems();

	const product = data && data?.find((item) => item.id === id);
	const { name, price, id: productId, image } = product || {};

	function ProductViewComponent() {
		return (
			<React.Fragment>
				<div className="d-flex flex-wrap mt-3">
					<div style={{ maxWidth: '525px' }} className="me-3">
						<img
							src={image}
							style={{
								width: '100%',
								height: '300px',
								objectFit: 'cover',
							}}
						/>
					</div>
					<div className="mx-3 mt-3">
						<h4>{name}</h4>
						<p className="fw-bold">₱{price}</p>
						<p>This is sample description</p>
						<Button
							className="me-3"
							variant="outline-dark"
							onClick={() => addToCart(product)}
						>
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
											key={item.id}
											to={`/product/${item.id}`}
											className="text-decoration-none text-dark m-2"
											style={{
												width: '255px',
												height: '250px',
											}}
										>
											<img
												src={item.image}
												className="w-100"
												style={{
													width: '100%',
													height: '200px',
													objectFit: 'cover',
												}}
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
			</React.Fragment>
		);
	}

	return (
		<Container>
			<div className="d-flex justify-content-between align-items-center">
				<p>ProductView</p> <CartComponent />
			</div>
			{isLoading ? (
				<div className="justify-content-center d-flex align-items-center">
					<Spinner animation="border" role="status">
						<span className="visually-hidden">Loading...</span>
					</Spinner>
				</div>
			) : (
				<ProductViewComponent />
			)}
		</Container>
	);
};

export default ProductView;
