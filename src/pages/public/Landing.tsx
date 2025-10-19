export const Landing = () => {
	return (
		<div className="py-16 mt-16 bg-neutral-50 flex items-center justify-center">
			<div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-10 max-w-2xl w-full flex flex-col items-center border border-indigo-100">
				<div className="relative mb-6 w-28 h-28 flex items-center justify-center">
					{/* Trama decorativa de líneas curvas con tonos más intensos */}
					<svg
						className="absolute -top-8 left-1/2 -translate-x-1/2"
						width="120"
						height="40"
						viewBox="0 0 120 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10 30 Q 60 0 110 30"
							stroke="#0ea5e9" // sky-500
							strokeWidth="2"
							fill="none"
							opacity="0.85"
						/>
						<path
							d="M20 35 Q 60 10 100 35"
							stroke="#0369a1" // sky-700
							strokeWidth="1.5"
							fill="none"
							opacity="0.7"
						/>
					</svg>
					<svg
						className="absolute -bottom-8 left-1/2 -translate-x-1/2"
						width="120"
						height="40"
						viewBox="0 0 120 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10 10 Q 60 40 110 10"
							stroke="#0ea5e9" // sky-500
							strokeWidth="2"
							fill="none"
							opacity="0.85"
						/>
						<path
							d="M20 5 Q 60 30 100 5"
							stroke="#0369a1" // sky-700
							strokeWidth="1.5"
							fill="none"
							opacity="0.7"
						/>
					</svg>
					<div className="w-28 h-28 flex items-center justify-center rounded-full border-4 border-sky-800 bg-white drop-shadow-lg z-10">
						<img
							src="https://img.icons8.com/ios-filled/100/075985/syringe.png"
							alt="Jeringa"
							className="w-18 h-18"
						/>
					</div>
				</div>
				<h1 className="text-2xl font-black text-sky-700 mb-4 tracking-tight">
					Auditoría DBT
				</h1>
				<p className="text-base text-gray-700 mb-8 font-medium text-center">
					Lleva el control y la transparencia de tus datos al siguiente nivel.<br />
					Descubre una plataforma moderna, segura y fácil de usar para auditar tus procesos de datos.
				</p>
				<a
					href="/login"
					className="bg-gradient-to-r from-sky-500 to-sky-800 hover:from-sky-800 hover:to-sky-500 text-white font-bold py-3 px-10 rounded-sm shadow-lg transition-all duration-200 text-base"
				>
					Iniciar ahora
				</a>
			</div>
		</div>
	);
};
