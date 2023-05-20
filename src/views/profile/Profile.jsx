import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { ProductContextProvider } from '../../context/ProductContext';
import { MdPendingActions, MdOutlineLocalShipping } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';
import useGetPurchaces from './useGetPurchaces';

const Profile = () => {
	const { currentUser } = useContext(ProductContextProvider);
	const { email } = currentUser || {};
	const { checkoutPending } = useGetPurchaces();
	const userPlacedOrder =
		checkoutPending &&
		checkoutPending?.filter((item) => item.owner === currentUser?.uid);

	const approvedOrder =
		userPlacedOrder &&
		userPlacedOrder?.filter((item) => item.status === 'Approved');

	const toShipOrder =
		userPlacedOrder &&
		userPlacedOrder?.filter((item) => item.status === 'To ship');

	return (
		<Container>
			<h3>Profile</h3>
			<p>{email}</p>
			<div className="mt-5 ">
				Purchases
				<hr></hr>
				<div className="justify-content-around d-flex">
					<div>
						<MdPendingActions size={30} />
						<span className="me-3">Placed Order</span>
						<p className="text-center fs-1">{userPlacedOrder?.length}</p>
					</div>
					<div>
						<AiFillCheckCircle size={30} />
						<span>Approved Order</span>
						<p className="text-center fs-1">{approvedOrder?.length}</p>
					</div>
					<div>
						<MdOutlineLocalShipping size={30} />
						<span>To ship Order</span>
						<p className="text-center fs-1">{toShipOrder?.length}</p>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Profile;
