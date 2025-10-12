export const Footer = () => {
	return (
		<footer className="bg-sky-950 text-white mt-auto">
			<div className="container mx-auto px-4 py-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

					<div>
						<h3 className="font-bold mb-2">DBT Auditoría</h3>
						<p className="text-gray-300 text-sm">
							Sistema para gestión de diabetes y medicamentos
						</p>
					</div>

					<div>
						<h3 className="font-bold mb-2">Enlaces útiles</h3>
						<ul className="text-gray-300 text-sm space-y-1">
							<li>Ley de Diabetes</li>
							<li>Vademécum</li>
							<li>Calculadora</li>
						</ul>
					</div>

					<div>
						<h3 className="font-bold mb-2">Contacto</h3>
						<p className="text-gray-300 text-sm">
							info@dbtauditoria.com
						</p>
					</div>

				</div>

				<hr className="border-gray-600 my-4" />

				<div className="text-center text-gray-400 text-sm">
					© 2024 DBT Auditoría. Todos los derechos reservados.
				</div>
			</div>
		</footer>
	)
};