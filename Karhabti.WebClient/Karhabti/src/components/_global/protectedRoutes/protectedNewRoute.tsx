import { Navigate, Outlet } from 'react-router-dom';

function useAuth() {
	const user = localStorage.getItem('user');
	return !!user;
}

export default function ProtectedNewRoute() {
	const auth = useAuth();
	return !auth ? <Outlet /> : <Navigate to={'/profile'} />;
}
