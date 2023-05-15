import React, { useContext } from 'react';
import { Badge, Button, Offcanvas, OffcanvasBody } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs';
import { ProductContextProvider } from '../../context/ProductContext';
import { BsXCircle } from 'react-icons/bs';
import useBuyItems from '../../views/checkout/useBuyItems';

const CartComponent = () => {
	const {
		handleShowCartCanvas,
		handleCloseCartCanvas,
		decreaseItemQty,
		increaseItemQty,
		showCartCanvas,
		currentUser,
		grandTotal,
		removeItem,
		cart,
		user,
	} = useContext(ProductContextProvider);
	const { buyItems } = useBuyItems();

	const fileredCart = cart && cart?.filter((item) => item.owner === user?.uid);
	const filteredTotal =
		cart && cart?.filter((item) => item.owner === currentUser.uid);

	console.log(filteredTotal);

	const sum = filteredTotal.reduce((accumulator, currentObject) => {
		return accumulator + currentObject.totalItemPrice;
	}, 0);

	console.log(sum);

	return (
		<React.Fragment>
			<Button
				variant="outline-dark"
				className="p-2"
				onClick={handleShowCartCanvas}
			>
				<BsCart size="1.5em" />{' '}
				<Badge bg="danger" className="rounded-circle">
					{fileredCart?.length}
				</Badge>
			</Button>
			<Offcanvas
				show={showCartCanvas}
				onHide={handleCloseCartCanvas}
				placement="end"
			>
				<Offcanvas.Header closeButton>Cart</Offcanvas.Header>
				<OffcanvasBody>
					{fileredCart.length === 0 ? (
						<p>No length</p>
					) : (
						<div>
							{fileredCart.map((item) => {
								return (
									<div key={item.id} className="cart-items mt-2">
										<div className="mb-1 d-flex justify-content-between">
											<div>
												<h5>{item.name}</h5>
												<p>
													Item total price: <b>₱{item.totalItemPrice}</b>
												</p>
											</div>
											<p className="fw-bolder fs-5">₱{item.price}</p>
										</div>
										<div className="d-flex justify-content-between align-items-center mb-3">
											<div className="d-flex ">
												<Button
													variant="outline-dark"
													className="px-3"
													onClick={() =>
														increaseItemQty(
															item.cartId,
															item.qty,
															item.price,
															item.totalItemPrice
														)
													}
												>
													+
												</Button>

												<h5 className="px-3">{item.qty}</h5>

												<Button
													variant="outline-dark"
													className="px-3"
													onClick={() =>
														decreaseItemQty(
															item.cartId,
															item.qty,
															item.price,
															item.totalItemPrice
														)
													}
												>
													-
												</Button>
											</div>

											<BsXCircle
												onClick={() => removeItem(item.cartId)}
												className="BsXCircle text-danger"
												size="1.4em"
											/>
										</div>
										<hr></hr>
									</div>
								);
							})}
						</div>
					)}
					<br></br>
					<div
						className="sub-total w-100 d-flex align-items-center justify-content-between"
						style={{ height: '75px' }}
					>
						<div className="d-flex">Sub total: {sum}</div>
						<div className="me-4">
							<Button onClick={() => buyItems(fileredCart, sum)}>Buy</Button>
						</div>
					</div>
				</OffcanvasBody>
			</Offcanvas>
		</React.Fragment>
	);
};

export default CartComponent;
