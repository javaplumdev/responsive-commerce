import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from '../../firebase';
import { auth } from '../../firebase/config';
import Cookies from '../../components/cookies';

function useLoginUser() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleLogin = (e) => {
		e.preventDefault();

		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				console.log(user);

				Cookies.set('cookie-user-token', user.accessToken);
				navigate('/home');
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return { handleLogin, setEmail, setPassword, error };
}

export default useLoginUser;
