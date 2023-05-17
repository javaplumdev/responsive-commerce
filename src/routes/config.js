import {
	LoginPage,
	RegisterPage,
	Home,
	ProductView,
	Checkout,
	Profile,
} from '../views';
import { NavbarComponent } from '../components';
import ProtectedRoute from '../components/protectedRoute';

export const route_config = [
	{
		path: '/profile/:id',
		component: (
			<ProtectedRoute>
				<NavbarComponent />
				<Profile />
			</ProtectedRoute>
		),
	},
	{
		path: '/checkout',
		component: (
			<ProtectedRoute>
				<NavbarComponent />
				<Checkout />
			</ProtectedRoute>
		),
	},
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
