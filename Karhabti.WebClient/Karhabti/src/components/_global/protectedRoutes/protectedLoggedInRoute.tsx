import { Outlet, Navigate } from 'react-router-dom';

function useAuth() {
	const user = localStorage.getItem('user');
	return !!user;
}

export default function ProtectedLoggedInRoute() {
	const auth = useAuth();
	return auth ? <Outlet /> : <Navigate to={'/'} />;
}
