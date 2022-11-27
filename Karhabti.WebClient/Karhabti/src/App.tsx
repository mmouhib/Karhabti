import Home from './pages/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/signup',
		element: <Signup />,
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
