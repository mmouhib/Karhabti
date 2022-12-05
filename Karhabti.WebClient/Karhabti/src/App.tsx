import Home from './routes/home';
import Login from './routes/login';
import Signup from './routes/signup';
import CarSubmit from './routes/carSubmit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Avatar from './routes/avatar';
import Outlet from './components/_global/outlet/outletWrapper';
import UserContextProvider from './context/userContext';
import Profile from './routes/profile';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="signup"
					element={
						<UserContextProvider>
							<Outlet />
						</UserContextProvider>
					}
				>
					<Route path="" element={<Signup />} />
					<Route path="avatar" element={<Avatar />} />
				</Route>
				<Route path="login" element={<Login />} />
				<Route path="add-car" element={<CarSubmit />} />
				<Route path="profile" element={<Profile />} />
			</Routes>
		</BrowserRouter>
	);
}
