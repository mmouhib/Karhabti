import Home from './pages/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import CarSubmit from './pages/carSubmit/carSubmit';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

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
		path: '/add-car',
		element: <CarSubmit />,
	},
]);

export default function App() {
	return (
		<ChakraProvider>
			<div style={{ width: '100vw', height: '100vh' }}>
				<RouterProvider router={router} />
			</div>
		</ChakraProvider>
	);
}
