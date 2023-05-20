import { useState } from 'react';
import { ProductParentContext } from './context/ProductContext';
import useGetItems from './views/home/useGetItems';
import { HelmetProvider } from 'react-helmet-async';

function ContextProvider({ children }) {
	return (
		<HelmetProvider>
			<ProductParentContext>{children}</ProductParentContext>
		</HelmetProvider>
	);
}

export default ContextProvider;
