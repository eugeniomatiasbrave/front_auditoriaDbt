import { useForm } from "react-hook-form";
import { postData, ApiResponse } from '../../services/axiosService.js';
import { endpoints } from "../../services/endpoints";



export const Register = () => {

	const { register, handleSubmit } = useForm();

	return (
		<div className="max-w-md mx-auto mt-12">
			<h2 className="text-2xl text-sky-800 font-bold mb-4">Registro</h2>
			<form

				className="bg-white p-6 rounded shadow-md space-y-4 "
				onSubmit={handleSubmit(async (values) => {
					const response = await postData<ApiResponse>(endpoints.REGISTER, values);
					console.log(response);
				})} >
				<div>
					<label className="block text-gray-700">Nombre de usuario</label>
					<input
						type="text"
						{...register("firstName", { required: "Este campo es obligatorio" })}
						className="text-black mt-1 block w-full border border-gray-300 rounded-md p-2 focus:bg-white focus:border-sky-600 focus:outline-none"
						placeholder="Ingrese su nombre de usuario"
						autoComplete="off"
					/>
				</div>
				<div>
					<label className="block text-gray-700">Apellido</label>
					<input
						type="text"
						{...register("lastName", { required: "Este campo es obligatorio" })}
						className="text-black mt-1 block w-full border border-gray-300 rounded-md p-2"
						placeholder="Ingrese su apellido"
						autoComplete="off"
					/>
				</div>
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
					Registrarse
				</button>
			</form>
		</div>
	);
}