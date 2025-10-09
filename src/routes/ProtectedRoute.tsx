
/*
import { Navigate } from 'react-router-dom';

// Ejemplo simple de protección (para más adelante)
const ProtectedRoute = ({ children, requireAdmin = false }) => {
	const isLoggedIn = true // Tu lógica aquí
	const isAdmin = true    // Tu lógica aquí

	if (!isLoggedIn) return <Navigate to="/login" />
	if (requireAdmin && !isAdmin) return <Navigate to="/dashboard" />

	return children
}

export default ProtectedRoute;

*/

// Por ahora no es necesario, ya que no hay rutas protegidas implementadas