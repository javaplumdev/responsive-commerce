import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	doc,
	setDoc,
	onSnapshot,
	collection,
	deleteDoc,
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import { v4 as uuidv4 } from 'uuid';
import { ProductContextProvider } from '../../context/ProductContext';
import { toast } from 'react-toastify';

function useBuyItems() {
	const [data, setData] = useState(null);
	const [cart, setCartData] = useState(null);
	const { currentUser } = useContext(ProductContextProvider);
	let navigate = useNavigate();

	useEffect(() => {
		onSnapshot(collection(db, 'checkout-pending'), (snapshot) => {
			setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});

		onSnapshot(collection(db, 'cart'), (snapshot) => {
			setCartData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});
	}, []);

	const buyItems = async (filteredCart, sum) => {
		let requestOrderExist =
			data && data.find((item) => item.owner === currentUser.uid);

		if (requestOrderExist) {
			await setDoc(
				doc(db, 'checkout-pending', requestOrderExist.id),
				{
					id: requestOrderExist.id,
					items: filteredCart,
					sum: sum,
					owner: currentUser.uid,
					isApproved: false,
					sum: parseInt(sum),
				},
				{ merge: true }
			);
		} else {
			const generateCheckoutPendingId = uuidv4();

			await setDoc(doc(db, 'checkout-pending', generateCheckoutPendingId), {
				id: generateCheckoutPendingId,
				items: filteredCart,
				sum: sum,
				owner: currentUser.uid,
				isApproved: false,
				sum: sum,
			});
		}

		navigate('/checkout');
	};

	const placeOrder = async (data, sum, checkoutId) => {
		const placedOrderId = uuidv4();

		await setDoc(doc(db, 'placed-order', placedOrderId), {
			id: placedOrderId,
			checkOutId: checkoutId,
			items: data,
			sum: sum,
			owner: currentUser.uid,
			isApproved: false,
			sum: sum,
		});

		await deleteDoc(doc(db, 'checkout-pending', checkoutId));

		cart &&
			cart?.map((item) => {
				if (item?.owner === currentUser.uid) {
					deleteDoc(doc(db, 'cart', item?.cartId));
				}
			});

		toast.success('Placed order!', {
			position: 'top-center',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'light',
		});

		navigate(`/profile/${currentUser?.uid}`);
	};

	return { buyItems, data, currentUser, placeOrder };
}

export default useBuyItems;
