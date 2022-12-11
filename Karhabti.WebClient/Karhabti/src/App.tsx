import Home from './routes/home';
import Login from './routes/login';
import Signup from './routes/signup';
import CarSubmit from './routes/carSubmit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Avatar from './routes/avatar';
import Outlet from './components/_global/outlet/outletWrapper';
import UsrCtx from './context/userContext';
import Profile from './routes/profile';
import GasFills from './routes/gasFills';
import ProtectedLoggedInRoute from './components/_global/protectedRoutes/protectedLoggedInRoute';
import ProtectedNewRoute from './components/_global/protectedRoutes/protectedNewRoute';
export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<ProtectedNewRoute />} >
					<Route path='/' element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='add-car' element={<CarSubmit />} />
					<Route path='signup' element={<UsrCtx><Outlet /></UsrCtx>}>
						<Route path='' element={<Signup />} />
						<Route path='avatar' element={<Avatar />} />
					</Route>
				</Route>

				<Route element={<ProtectedLoggedInRoute />} >
					<Route path='profile' element={<Outlet />}>
						<Route path='' element={<Profile />} />
						<Route path='gas-fills' element={<GasFills />} />
					</Route>
				</Route>


			</Routes>
		</BrowserRouter>
	);
}
