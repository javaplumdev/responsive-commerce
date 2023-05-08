import Cookies from './cookies';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
	if (!Cookies.get('cookie-user-token')) {
		return <Navigate to="/" />;
	}

	return children;
}

export default ProtectedRoute;
