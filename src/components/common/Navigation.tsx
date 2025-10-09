import { Link } from 'react-router-dom'

export const Navigation =() => {
	const isLoggedIn = true // true: user logged in. False: guest
	const isAdmin = false // true: admin user. False: regular user

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
							className="hover:bg-sky-600 px-3 py-2 rounded transition-colors"
						>
							Calcular Insulina
						</Link>
						<Link
							to="/vademecum"
							className="hover:bg-sky-600 px-3 py-2 rounded transition-colors"
						>
							Vademécum
						</Link>
						<Link
							to="/law"
							className="hover:bg-sky-600 px-3 py-2 rounded transition-colors"
						>
							Ley DBT
						</Link>
					</div>

					<div className="flex items-center space-x-4">
						{!isLoggedIn ? (
							<>
								<Link
									to="/login"
									className="hover:bg-sky-600 px-4 py-2 rounded transition-colors"
								>
									Iniciar Sesión
								</Link>
								<Link
									to="/register"
									className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded font-medium transition-colors"
								>
									Registrarse
								</Link>
							</>
						) : (
							<>
								<Link to="/dashboard" className="hover:bg-sky-600 px-3 py-2 rounded">
									Dashboard
								</Link>
								<Link to="/profile" className="hover:bg-sky-600 px-3 py-2 rounded">
									Perfil
								</Link>
								{isAdmin && (
									<Link
										to="/admin"
										className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded"
									>
										Admin
									</Link>
								)}
							</>
						)}
					</div>
				</div>
			</div>
		</nav>
	)
};