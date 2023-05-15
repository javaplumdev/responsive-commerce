import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
	getFirestore,
	doc,
	setDoc,
	onSnapshot,
	collection,
	serverTimestamp,
	query,
	orderBy,
	deleteDoc,
} from 'firebase/firestore';
import { db } from '../../firebase/config';
import { v4 as uuidv4 } from 'uuid';
import { ProductContextProvider } from '../../context/ProductContext';

function useBuyItems() {
	const [data, setData] = useState(null);
	const { currentUser } = useContext(ProductContextProvider);
	let navigate = useNavigate();

	useEffect(() => {
		onSnapshot(collection(db, 'checkout-pending'), (snapshot) => {
			setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
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

	return { buyItems, data, currentUser };
}

export default useBuyItems;
