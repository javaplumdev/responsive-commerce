import React, { createContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase/config';
import {
	setDoc,
	doc,
	onSnapshot,
	collection,
	serverTimestamp,
	query,
	orderBy,
	deleteDoc,
	onAuthStateChanged,
} from '../firebase';
import { toast } from 'react-toastify';

export const ProductContextProvider = createContext();

export function ProductParentContext({ children }) {
	const [showCartCanvas, setShowCartCanvas] = useState(false);
	const [cart, setCart] = useState([]);
	const [user] = useAuthState(auth);
	const [grandTotal, setGrandTotal] = useState(0);
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		const queryData = query(
			collection(db, 'cart'),
			orderBy('timestamp', 'desc')
		);

		onSnapshot(queryData, (snapshot) => {
			setCart(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		});

		onSnapshot(collection(db, 'cart-sub-total'), (snapshot) => {
			setGrandTotal(
				snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
			);
		});
	}, []);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
		});

		return () => unsubscribe();
	}, []);

	const handleShowCartCanvas = () => setShowCartCanvas(true);
	const handleCloseCartCanvas = () => setShowCartCanvas(false);

	const increaseItemQty = async (id, qty, price, totalItemPrice) => {
		let itemQty = qty + 1;

		await setDoc(
			doc(db, 'cart', id),
			{ qty: itemQty, totalItemPrice: price * itemQty },
			{ merge: true }
		);

		await setDoc(
			doc(db, 'cart-sub-total', id),
			{ subTotal: totalItemPrice + price },
			{ merge: true }
		);
	};

	const decreaseItemQty = async (id, qty, price, totalItemPrice) => {
		let itemQty = qty - 1;

		await setDoc(
			doc(db, 'cart', id),
			{
				qty: qty <= 2 ? 1 : itemQty,
				totalItemPrice: qty <= 2 ? price : price * itemQty,
			},
			{ merge: true }
		);

		await setDoc(
			doc(db, 'cart-sub-total', id),
			{ subTotal: qty <= 2 ? price : totalItemPrice - price },
			{ merge: true }
		);
	};

	const removeItem = async (id) => {
		await deleteDoc(doc(db, 'cart', id));
	};

	const addToCart = async (data) => {
		const { name, price, id: productId } = data;
		const { uid } = user || {};

		const itemExist = cart.find((item) => item.cartId === productId + uid);

		if (itemExist) {
			toast.error('Item is already added!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});
		} else {
			toast.success('Item added to cart!', {
				position: 'top-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
			});

			await setDoc(doc(db, 'cart', productId + uid), {
				cartId: productId + uid,
				id: productId,
				name: name,
				price: parseInt(price),
				qty: 1,
				owner: uid,
				timestamp: serverTimestamp(),
				totalItemPrice: parseInt(price),
			});

			await setDoc(
				doc(db, 'cart-sub-total', productId + uid),
				{ subTotal: parseInt(price), owner: uid },
				{ merge: true }
			);
		}
	};

	return (
		<ProductContextProvider.Provider
			value={{
				user,
				cart,
				addToCart,
				removeItem,
				grandTotal,
				currentUser,
				showCartCanvas,
				increaseItemQty,
				decreaseItemQty,
				handleShowCartCanvas,
				handleCloseCartCanvas,
			}}
		>
			{children}
		</ProductContextProvider.Provider>
	);
}
