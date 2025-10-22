import { useForm } from "react-hook-form";
import { postData, ApiResponse, ApiError } from '../../services/axiosService.js';
import { endpoints } from "../../services/endpoints";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { IUser } from "../../types/interfaces";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';


export const Register = () => {
	const { register: registerForm, handleSubmit, formState: { errors } , reset} = useForm();
	const auth = useContext(AuthContext);
	const navigate = useNavigate();
	const isAuthenticated = auth?.isAuthenticated;

	useEffect(() => {
		if (isAuthenticated) {
			navigate("/userdashboard");
		}
	}, [isAuthenticated, navigate]);

	const handleBack = () => {
            navigate("/");
    };

	return (
		<div className="max-w-md mx-auto mt-12 relative">
			 <button
                type="button"
                onClick={handleBack}
                className="absolute top-1 right-1 text-xs bg-amber-300 border-amber-500 rounded text-gray-700 hover:text-sky-600 transition-colors px-3 py-1"
            >
                X
            </button>
			<form
				className="bg-white p-6 rounded shadow-md space-y-4 "
				onSubmit={handleSubmit(async (values) => {
					try {
						const response = await postData<ApiResponse>(endpoints.REGISTER, values);
						if (response.success && response.data) {
							auth?.register(response.data as IUser);
							Swal.fire({
								icon: 'success',
								title: '¡Registro exitoso!',
								text: response.message,
								confirmButtonColor: '#0ea5e9',
							});
							navigate("/userdashboard");
						}
					} catch (error: unknown) {
						// Captura el error lanzado por Axios
						if (axios.isAxiosError(error)) {
							const apiError = error.response?.data as ApiError | undefined;
							Swal.fire({
								icon: 'error',
                                title: 'Error',
                                text: apiError?.message || "Error inesperado",
								confirmButtonColor: '#0ea5e9',
                            });
						} else {
							Swal.fire({
								icon: 'error',
								title: 'Error',
								text: error instanceof Error ? error.message : "Error inesperado",
								confirmButtonColor: '#0ea5e9',
							});
						}
					} finally {
						reset();
					}
				})} >
					<h2 className="text-2xl text-sky-800 font-bold mb-4">Registro</h2>
				<div>
					<label className="block text-gray-700">Nombre de usuario</label>
					<input
						type="text"
						{...registerForm("firstName", { required: "Este campo es obligatorio" })}
						className="text-black mt-1 block w-full border border-gray-300 rounded-md p-2 focus:bg-white focus:border-sky-600 focus:outline-none"
						placeholder="Ingrese su nombre de usuario"
						autoComplete="off"
					/>
				</div>
				{errors.firstName && (
					<p className="text-red-500 text-sm">El nombre es requerido</p>
				)}
				<div>
					<label className="block text-gray-700">Apellido</label>
					<input
						type="text"
						{...registerForm("lastName", { required: "Este campo es obligatorio" })}
						className="text-black mt-1 block w-full border border-gray-300 rounded-md p-2"
						placeholder="Ingrese su apellido"
						autoComplete="off"
					/>
				</div>
				{errors.lastName && (
					<p className="text-red-500 text-sm">El apellido es requerido</p>
				)}
				<div>
					<label className="block text-gray-700">Email</label>
					<input type="email"
						{...registerForm("email", { required: "Este campo es obligatorio", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })}
						className="text-black mt-1 block w-full border border-gray-300 rounded-md p-2"
						placeholder="Ingrese su email"
						autoComplete="off"
					/>
				</div>
				{errors.email && (
					<p className="text-red-500 text-sm">El email es requerido</p>
				)}
				<div>
					<label className="block text-gray-700">Contraseña</label>
					<input type="password"
						{...registerForm("password", { required: "Este campo es obligatorio" })}
						className="text-black mt-1 block w-full border border-gray-300 rounded-md p-2"
						placeholder="Ingrese su contraseña"
						autoComplete="off"
					/>
				</div>
				{errors.password && (
					<p className="text-red-500 text-sm">La contraseña es requerida</p>
				)}
				<button type="submit" className="w-full bg-sky-600 font-bold text-white p-2 rounded">
					Registrarse
				</button>
			</form>
		</div>
	);
}