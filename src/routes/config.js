import { LoginPage, RegisterPage, Home, ProductView } from '../views';
import { NavbarComponent } from '../components';
import ProtectedRoute from '../components/protectedRoute';

export const route_config = [
	{
		path: '/product/:id',
		component: (
			<ProtectedRoute>
				<NavbarComponent />
				<ProductView />
			</ProtectedRoute>
		),
	},
	{
		path: '/home',
		component: (
			<ProtectedRoute>
				<NavbarComponent />
				<Home />
			</ProtectedRoute>
		),
	},
	{
		path: '/register',
		component: <RegisterPage />,
	},
	{
		path: '/',
		component: <LoginPage />,
	},
];
