import React, { createContext, useState } from 'react';
import useGetItems from '../views/home/useGetItems';

export const ProductContextProvider = createContext();

export function ProductParentContext({ children }) {
	const { data: marketData } = useGetItems();

	const [showCartCanvas, setShowCartCanvas] = useState(false);
	const [data, setData] = useState(marketData);

	const handleShowCartCanvas = () => setShowCartCanvas(true);
	const handleCloseCartCanvas = () => setShowCartCanvas(false);

	function increaseItemQty(id) {
		console.log(id);
	}

	function decreaseItemQty(id) {
		console.log(id);
	}

	return (
		<ProductContextProvider.Provider
			value={{
				increaseItemQty,
				decreaseItemQty,
				handleShowCartCanvas,
				handleCloseCartCanvas,
				showCartCanvas,
			}}
		>
			{children}
		</ProductContextProvider.Provider>
	);
}
