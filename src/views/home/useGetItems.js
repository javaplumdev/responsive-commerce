import React, { useEffect, useState } from 'react';
import { onSnapshot, collection } from '../../firebase';
import { db } from '../../firebase/config';

function useGetItems() {
	const [data, setData] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		onSnapshot(collection(db, 'items'), (snapshot) => {
			setData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

			setIsLoading(false);
		});
	}, []);

	return { data, isLoading };
}

export default useGetItems;
