import { Outlet } from 'react-router-dom';

export default function OutletWrapper() {
	{
		return (
			<div style={{ width: '100vw', height: '100vh' }}>
				<Outlet />
			</div>
		);
	}
}
