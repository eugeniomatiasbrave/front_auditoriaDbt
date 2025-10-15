import { useState } from "react";
import { SelectCategory, SelectMedication } from "../../components";



export const CalculateInsu = () => {
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedMedication, setSelectedMedication] = useState<number>(1);

	return (
		<>
			<div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg text-gray-800">
				<h2 className="text-2xl font-bold mb-4 text-sky-700">Calculadora de Insulina</h2>
				<div className="mb-6">
					<p className="mb-2">Realizar el cálculo ágil y preciso en el departamento de auditoría.</p>
					<p className="mb-2">Calcular las cajas a dispensar por los coordinadores ante la falla del sistema dispensador.</p>
					<p>Dar respuesta a los Afiliados en el contact center respecto a la cantidad por recibir.</p>
				</div>
				<form className="space-y-6">
					<div>
						<h6 className="text-lg font-semibold mb-2 text-sky-600">CALCULADOR DE INSULINAS A DISPENSAR</h6>
						<p className="mb-4 text-sm text-gray-600">Ingresar los datos en los campos y realizar el cálculo.</p>
						<input
							type="number"
							placeholder="Ingresar las UI día que se aplica el paciente"
							required
							min={6}
							max={200}
							className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-sky-400"
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

					<div className="flex gap-6">
						<label className="flex items-center gap-2">
							<input
								type="radio"
								name="dispensa"
								className="accent-sky-600"
								value="mensual"
							/> Mensual
						</label>
						<label className="flex items-center gap-2">
							<input
								type="radio"
								name="dispensa"
								className="accent-sky-600"
								value="bimestral"
							/> Bimestral
						</label>
						<label className="flex items-center gap-2">
							<input
								type="radio"
								name="dispensa"
								className="accent-sky-600"
								value="trimestral"
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
						>
							Reset
						</button>
					</div>
					<div className="mt-4 text-xs text-gray-500">
						<p>* Rango aceptable de UI es entre 6 y 200 UI.</p>
						<p>* Las cajas de insulinas no son divisibles, se entregan cajas enteras.</p>
						<p>* Cajas a dispensar mensual o trimestral según convenio.</p>
					</div>
				</form>
			</div>
		</>
	);
};
