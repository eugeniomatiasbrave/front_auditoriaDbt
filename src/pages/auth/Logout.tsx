import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../services/endpoints";
import { postData, ApiResponse } from '../../services/axiosService.js';


export const Logout = () => {
	const [logoutting, setLoggingOut] = useState(false);
	const navigate = useNavigate();

	const handleLogout = async () => {
		setLoggingOut(true);
		try {
			const response = await postData<ApiResponse>(endpoints.LOGOUT, {});
			if (response) {
				navigate("/");
			}
		} catch (error) {
			// Manejar errores
			console.error("Logout error:", error);
		} finally {
			setLoggingOut(false);
		}
	};

	return (
		<div className="max-w-md mx-auto mt-12">
			<h2 className="text-2xl text-sky-800 font-bold mb-4">Cerrar Sesión</h2>
			<form className="bg-white p-6 rounded shadow-md space-y-4" onSubmit={e => e.preventDefault()}>
				<p className="text-gray-700 mb-4">
					¿Está seguro que desea cerrar sesión?
				</p>
				<div className="flex space-x-4">
					<button
						type="button"
						className="w-full bg-sky-600 font-bold text-white p-2 rounded"
						onClick={handleLogout}
						disabled={logoutting}
					>
						{logoutting ? "Cerrando..." : "Cerrar Sesión"}
					</button>
					<button
						type="button"
						className="w-full bg-gray-300 font-bold text-gray-700 p-2 rounded"
						onClick={() => navigate("/")}
						disabled={logoutting}
					>
						Cancelar
					</button>
				</div>
			</form>
		</div>
	);
};