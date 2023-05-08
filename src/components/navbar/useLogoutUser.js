import { signOut } from '../../firebase';
import Cookies from '../cookies';
import { auth } from '../../firebase/config';

function useLogoutUser() {
	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				Cookies.remove('cookie-user-token');
				window.location.reload(true);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return { handleSignOut };
}

export default useLogoutUser;
