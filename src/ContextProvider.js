import { useState } from 'react';
import { ProductParentContext } from './context/ProductContext';
import useGetItems from './views/home/useGetItems';

function ContextProvider({ children }) {
	return <ProductParentContext>{children}</ProductParentContext>;
}

export default ContextProvider;
