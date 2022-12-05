import Home from './pages/home';
import Login from './pages/login/login';
import Signup from './pages/signup/signup';
import CarSubmit from './pages/carSubmit/carSubmit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Avatar from './pages/Avatar/avatar';
import OutletWrapper from './components/_global/outlet/outletWrapper';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="signup" element={<OutletWrapper />}>
					<Route path="" element={<Signup />} />
					<Route path="avatar" element={<Avatar />} />
				</Route>
				<Route path="login" element={<Login />} />
				<Route path="add-car" element={<CarSubmit />} />
			</Routes>
		</BrowserRouter>
	);
}
