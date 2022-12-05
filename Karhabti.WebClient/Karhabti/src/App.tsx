import Home from './routes/home';
import Login from './routes/login';
import Signup from './routes/signup';
import CarSubmit from './routes/carSubmit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Avatar from './routes/avatar';
import OutletWrapper from './components/_global/outlet/outletWrapper';
import UserDataContextProvider from './context/userContext';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="signup"
					element={
						<UserDataContextProvider>
							<OutletWrapper />
						</UserDataContextProvider>
					}
				>
					<Route path="" element={<Signup />} />
					<Route path="avatar" element={<Avatar />} />
				</Route>
				<Route path="login" element={<Login />} />
				<Route path="add-car" element={<CarSubmit />} />
			</Routes>
		</BrowserRouter>
	);
}
