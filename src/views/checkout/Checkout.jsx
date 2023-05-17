import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import useBuyItems from './useBuyItems';

const Checkout = () => {
	const { data, currentUser, placeOrder } = useBuyItems();

	const filteredData =
		data && data?.filter((item) => item.owner === currentUser.uid);

	let checkoutData = filteredData && filteredData[0]?.items;
	let checkOutPending = filteredData?.find((item) => item?.id)?.id;

	return (
		<Container>
			<h4>Checkout | Products ordered</h4>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>Product name</th>
						<th>Quantity</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					{checkoutData?.length === 0 ? (
						<tr>No data</tr>
					) : (
						checkoutData &&
						checkoutData?.map((item, index) => {
							return (
								<tr key={index}>
									<td>{item.name}</td>
									<td>{item.qty}</td>
									<td>₱{item.price}</td>
								</tr>
							);
						})
					)}
				</tbody>
			</Table>
			<div className="d-flex justify-content-end mt-3 ">
				<div className="d-flex align-items-center">
					<p>Order Total ({checkoutData?.length} item):</p>
					<h3 className="mx-3">{filteredData && filteredData[0]?.sum}</h3>
				</div>
				<Button
					variant="primary"
					onClick={() =>
						placeOrder(checkoutData, filteredData[0]?.sum, checkOutPending)
					}
				>
					Place order
				</Button>
			</div>
		</Container>
	);
};

export default Checkout;
