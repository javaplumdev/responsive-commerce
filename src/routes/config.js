import {
	LoginPage,
	RegisterPage,
	Home,
	ProductView,
	Checkout,
	Profile,
	About,
	Contact,
} from '../views';
import { NavbarComponent, Footer } from '../components';
import ProtectedRoute from '../components/protectedRoute';

export const route_config = [
	{
		path: '/contact',
		component: (
			<ProtectedRoute>
				<NavbarComponent />
				<Contact />
			</ProtectedRoute>
		),
	},
	{
		path: '/about',
		component: (
			<ProtectedRoute>
				<NavbarComponent />
				<About />
			</ProtectedRoute>
		),
	},
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
