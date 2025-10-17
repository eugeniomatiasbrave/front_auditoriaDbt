import { useForm } from "react-hook-form";
import { postData, ApiResponse, ApiError } from '../../services/axiosService.js';
import { endpoints } from "../../services/endpoints";
import axios from "axios";



export const Login = () => {

	const { register, handleSubmit, reset } = useForm();

	return (
		<div className="max-w-md mx-auto mt-12">
			<h2 className="text-2xl text-sky-800 font-bold mb-4">Iniciar Sesión</h2>
			<form
				className="bg-white p-6 rounded shadow-md space-y-4 "
				onSubmit={handleSubmit(async (values) => {
					try {
						const response = await postData<ApiResponse>(endpoints.LOGIN, values);

						if (!response.success || response.data === null) {
							alert(response.message || "Credenciales inválidas");
							return;
						}
						reset();
						alert("Login exitoso");
						//console.log("Usuario logueado:", response);
					} catch (error: unknown) {
						// Captura el error lanzado por Axios
						if (axios.isAxiosError(error)) {
							const apiError = error.response?.data as ApiError | undefined;
							alert(apiError?.message || "Error inesperado");
						} else {
							alert("Error inesperado");
						}
					}
				})} >
				<div>
					<label className="block text-gray-700">Email</label>
					<input type="email"
						{...register("email", { required: "Este campo es obligatorio", pattern: { value: /^\S+@\S+$/i, message: "Email inválido" } })}
						className="text-black mt-1 block w-full border border-gray-300 rounded-md p-2"
						placeholder="Ingrese su email"
						autoComplete="off"
					/>
				</div>
				<div>
					<label className="block text-gray-700">Contraseña</label>
					<input type="password"
						{...register("password", { required: "Este campo es obligatorio" })}
						className="text-black mt-1 block w-full border border-gray-300 rounded-md p-2"
						placeholder="Ingrese su contraseña"
						autoComplete="off"
					/>

				</div>
				<button type="submit" className="w-full bg-sky-600 font-bold text-white p-2 rounded">
					Iniciar Sesión
				</button>
			</form>
		</div>
	);
}
