import { useEffect, useState } from 'react';
import {
	doc,
	setDoc,
	onSnapshot,
	collection,
	deleteDoc,
} from 'firebase/firestore';
import { db } from '../../firebase/config';

function useGetPurchaces() {
	const [checkoutPending, setCheckoutPending] = useState(null);

	useEffect(() => {
		onSnapshot(collection(db, 'placed-order'), (snapshot) => {
			setCheckoutPending(
				snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			);
		});
	}, []);

	return { checkoutPending };
}

export default useGetPurchaces;
