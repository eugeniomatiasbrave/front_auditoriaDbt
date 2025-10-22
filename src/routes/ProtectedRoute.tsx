import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
	const auth = useContext(AuthContext);

	if (!auth?.isAuthenticated) {
		return <Navigate to="/login" replace />;
	}

	return (
		<div>
			<Outlet />
		</div>
	);
}