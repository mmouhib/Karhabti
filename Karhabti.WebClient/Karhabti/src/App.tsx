import Home from './pages/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import CarSubmit from './pages/carSubmit/carSubmit';

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
	{
		path: '/addcar',
		element: <CarSubmit />,
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
