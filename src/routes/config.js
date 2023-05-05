import { LoginPage, RegisterPage } from '../views';

export const route_config = [
	{
		path: '/register',
		component: <RegisterPage />,
		isExact: false,
	},
	{
		path: '/',
		component: <LoginPage />,
		isExact: true,
	},
];
