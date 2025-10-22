import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../services/endpoints";
import { postData, ApiResponse, ApiError } from '../../services/axiosService.js';
import { AuthContext } from "../../context/AuthContext";
import Swal from 'sweetalert2';

export const Logout = () => {
	const [logoutting, setLoggingOut] = useState(false);
	const navigate = useNavigate();
	const auth = useContext(AuthContext);

	const handleLogout = async () => {
		setLoggingOut(true);
		try {
			const response = await postData<ApiResponse>(endpoints.LOGOUT, {});
			auth?.logout();
			if (response) {
				Swal.fire({
					icon: 'success',
					title: 'Sesión cerrada',
					text: response.message || "Has cerrado sesión exitosamente.",
					confirmButtonColor: '#0ea5e9',
				}).then(() => {
					navigate("/");
				});
			}
		} catch (error: unknown) {
			let errorMsg = "Error inesperado";
			if ((error as ApiError)?.message) {
				errorMsg = (error as ApiError).message;
			}
			Swal.fire({
				icon: 'error',
				title: 'Error',
				text: errorMsg,
				confirmButtonColor: '#0ea5e9',
			});
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