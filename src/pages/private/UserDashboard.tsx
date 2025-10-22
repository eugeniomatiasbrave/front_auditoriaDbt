import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export const UserDashboard = () => {
	const auth = useContext(AuthContext);
	const user = auth?.user;

	return (
		<div className="p-8 bg-white rounded shadow-md max-w-xl mx-auto mt-8">
			<h2 className="text-3xl text-sky-900 font-bold mb-2">
				¡Hola, {user?.firstName || "usuario"}!
			</h2>
			<p className="text-gray-700 mb-6">
				Este es tu panel personal. Aquí puedes gestionar tu perfil y acceder rápidamente a las funciones principales.
			</p>
			<div className="grid grid-cols-2 gap-4">
				<Link to="/medication" className="bg-sky-700 text-white px-4 py-3 rounded shadow hover:bg-sky-800 transition-colors text-center font-medium">
					Gestionar Medicamentos
				</Link>
				
			</div>
		</div>
	);
}