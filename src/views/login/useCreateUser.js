import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, doc, setDoc } from '../../firebase';
import { auth, db } from '../../firebase/config';

function useCreateUser() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;

				const userData = {
					email: email,
					password: password,
					createdAt: new Date(),
					uid: user.uid,
				};

				const userRef = doc(db, 'users', user.uid);
				setDoc(userRef, userData);
				navigate('/login');
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return { email, setEmail, password, setPassword, handleSubmit, error };
}

export default useCreateUser;
