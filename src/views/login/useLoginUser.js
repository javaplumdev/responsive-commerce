import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from '../../firebase';
import { auth, db } from '../../firebase/config';

function useLoginUser() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);
				console.log('Logged in!');
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return { handleLogin, setEmail, setPassword };
}

export default useLoginUser;
