import React, { useContext } from 'react';
import { Badge, Button, Offcanvas, OffcanvasBody } from 'react-bootstrap';
import { BsCart } from 'react-icons/bs';
import { ProductContextProvider } from '../../context/ProductContext';

const CartComponent = () => {
	const { handleShowCartCanvas, handleCloseCartCanvas, showCartCanvas } =
		useContext(ProductContextProvider);

	return (
		<React.Fragment>
			<Button
				variant="outline-dark"
				className="p-2"
				onClick={handleShowCartCanvas}
			>
				<BsCart size="1.5em" />{' '}
				<Badge bg="danger" className="rounded-circle">
					0
				</Badge>
			</Button>
			<Offcanvas
				show={showCartCanvas}
				onHide={handleCloseCartCanvas}
				placement="end"
			>
				<Offcanvas.Header closeButton>Cart</Offcanvas.Header>
				<OffcanvasBody>Hatdog</OffcanvasBody>
			</Offcanvas>
		</React.Fragment>
	);
};

export default CartComponent;
