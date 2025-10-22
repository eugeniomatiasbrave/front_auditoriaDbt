import { Link } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Navbar = () => {
	const auth = useContext(AuthContext);
	const isAuthenticated = auth?.isAuthenticated;

	return (
		<nav className="bg-sky-900 text-white shadow-lg">
			<div className="container mx-auto px-4">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<Link to="/" className="text-xl font-bold hover:text-blue-200 transition-colors"
						>
							🏥 DBT Auditoría
						</Link>
					</div>

					<div className="hidden md:flex space-x-4">
						<Link
							to="/calculate"
							className="hover:bg-sky-600 px-3 py-2 rounded font-medium transition-colors"
						>
							Calcular Insulina
						</Link>
						<Link
							to="/vademecum"
							className="hover:bg-sky-600 px-3 py-2 rounded font-medium transition-colors"
						>
							Vademécum
						</Link>
						<Link
							to="/law"
							className="hover:bg-sky-600 px-3 py-2 rounded font-medium transition-colors"
						>
							Ley DBT
						</Link>
					</div>

					<div className="flex items-center space-x-4">
						<>
							{!isAuthenticated ? (
								<>
									<Link
										to="/login"
										className="hover:bg-gray-500 px-4 py-2 rounded font-medium transition-colors"
									>
										Iniciar Sesión
									</Link>
									<Link
										to="/register"
										className="hover:bg-gray-500 px-4 py-2 rounded font-medium transition-colors"
									>
										Registrarse
									</Link>
								</>
							) : (
								// Menú desplegable
								<div className="relative group">
									<button className="flex items-center px-4 py-2 bg-sky-600 rounded hover:bg-sky-800 transition-colors">
										👤 {auth.user?.firstName || "Usuario"}
										<svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
										</svg>
									</button>
									<div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
										<Link to="/userdashboard" className="block px-4 py-2 hover:bg-gray-100">UserDashboard</Link>
										<Link to="/medication" className="block px-4 py-2 hover:bg-gray-100">Medicamentos</Link>
										<Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Perfil</Link>
										<Link to="/logout" className="block px-4 py-2 hover:bg-gray-100">Cerrar Sesión</Link>
									</div>
								</div>
							)}
						</>

					</div>
				</div>
			</div>
		</nav>
	)
};