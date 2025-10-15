import { useState } from "react";
import { SelectCategory, SelectMedication } from "../../components";

export const CalculateInsu = () => {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedMedication, setSelectedMedication] = useState<number>(0);
	const [uiDia, setUiDia] = useState<number>(6);
	const [dispensa, setDispensa] = useState<number>(30);
	const [resultado, setResultado] = useState<number | null>(null); // Estado para mostrar el resultado

	const handleBox = (e: React.FormEvent) => {
		e.preventDefault(); // Evita el submit por defecto
		if (selectedMedication > 0 && uiDia >= 6 && uiDia <= 200) {
			const unidadesCaja = selectedMedication;
			const unidadesDispensa = uiDia * dispensa;
			const cajasDispensa = unidadesDispensa / unidadesCaja;
			const cajasDispensaRedondeadas = Math.ceil(cajasDispensa);
			setResultado(cajasDispensaRedondeadas);
		} else {
			setResultado(null); // O puedes mostrar un mensaje de error
		}
	};

	return (
		<>
			<div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg text-gray-800">
				<h2 className="text-2xl font-bold mb-4 text-sky-700">Calculadora de Insulina</h2>
				<div className="mb-6">
					<p className="mb-2">Realizar el cálculo ágil y preciso en el departamento de auditoría.</p>
					<p className="mb-2">Calcular las cajas a dispensar por los coordinadores ante la falla del sistema dispensador.</p>
					<p>Dar respuesta a los Afiliados en el contact center respecto a la cantidad por recibir.</p>
				</div>
				<form className="space-y-6" onSubmit={handleBox}>
					<div>
						<h6 className="text-lg font-semibold mb-2 text-sky-600">CALCULADOR DE INSULINAS A DISPENSAR</h6>
						<p className="mb-4 text-sm text-gray-600">Ingresar los datos en los campos y realizar el cálculo.</p>
						<h3>Unidades día</h3>
						<input
							type="number"
							placeholder="Ingresar las UI día que se aplica el paciente"
							required
							min={6}
							max={200}
							className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-sky-400"
							value={uiDia}
							onChange={e => setUiDia(Number(e.target.value))}
						/>
					</div>
					<SelectCategory
						selectedCategory={selectedCategory}
						setSelectedCategory={setSelectedCategory}
					/>
					<SelectMedication
						selectedMedication={selectedMedication}
						setSelectedMedication={setSelectedMedication}
						categoryId={selectedCategory}
					/>
					<h3>Tipo de dispensa</h3>
					<div className="flex gap-6">
						<label className="flex items-center gap-2">
							<input
								type="radio"
								name="dispensa"
								className="accent-sky-600"
								value={30}
								checked={dispensa === 30}
								onChange={e => setDispensa(Number(e.target.value))}
							/> Mensual
						</label>
						<label className="flex items-center gap-2">
							<input
								type="radio"
								name="dispensa"
								className="accent-sky-600"
								value={60}
								checked={dispensa === 60}
								onChange={e => setDispensa(Number(e.target.value))}
							/> Bimestral
						</label>
						<label className="flex items-center gap-2">
							<input
								type="radio"
								name="dispensa"
								className="accent-sky-600"
								value={90}
								checked={dispensa === 90}
								onChange={e => setDispensa(Number(e.target.value))}
							/> Trimestral
						</label>
					</div>
					<div className="flex gap-4">
						<button className="bg-sky-600 text-white px-4 py-2 rounded hover:bg-sky-700 transition" type="submit">
							Calcular
						</button>
						<button
							className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300 transition"
							type="reset"
							onClick={() => setResultado(null)}
						>
							Reset
						</button>
					</div>
					{resultado !== null && (
						<div className="mt-4 text-lg font-bold text-sky-700">
							Cajas a dispensar: {resultado}
						</div>
					)}
					<div className="mt-4 text-xs text-gray-500">
						<p>* Rango aceptable de UI es entre 6 y 200 UI.</p>
						<p>* Las cajas de insulinas no son divisibles, se entregan cajas enteras.</p>
						<p>* Cajas a dispensar mensual, bimestral o trimestral según convenio.</p>
					</div>
				</form>
			</div>
		</>
	);
};
