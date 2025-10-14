import { useEffect, useState } from 'react';
import { getData, ApiResponse } from '../../services/axiosService';
import { endpoints } from '../../services/endpoints';
import { Loading } from '../../components';
// Tipo para Medication
interface Medication {
	id: string | number;
	name: string;
	presentation: string,
	potency: string,
	drug: string;
	laboratory: string,
	coverage: number,
	units: number,
	troquel: string,
	category: string,
	description: string
}

export const Vademecum = () => {
	const [medications, setMedications] = useState<Medication[]>([]);
	const [loading, setLoading] = useState<boolean>(true); // Loading state
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchMedications = async () => {
			try {
				setLoading(true);
				setError(null);

				const response = await getData<ApiResponse<Medication[]>>(endpoints.MEDICATIONS);

				if (response.success) {
					setMedications(response.data);
				} else {
					setError(response.message || 'Error al obtener medicamentos');
				}
			} catch (err) {
				const errorMessage = err instanceof Error ? err.message : 'Error desconocido';
				setError(`Error al cargar medicamentos: ${errorMessage}`);
				console.error('Error fetching medications:', err);
			} finally {
				setLoading(false);
			}
		};

		fetchMedications();
	}, []);

	// Loading state
	if (loading) {
		return (
			<Loading message="Cargando medicamentos..." />
		);
	}

	// Error state
	if (error) {
		return (
			<div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
				{error}
			</div>
		);
	}

	return (
		<div className="p-6">
			<h2 className="text-2xl text-gray-800 font-bold mb-6">Vademécum</h2>

			{medications.length === 0 ? (
				<p className="text-gray-600">No hay medicamentos disponibles.</p>
			) : (
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{medications.map((medication) => (
						<div
							key={medication.id}
							className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
							<h3 className="text-lg font-semibold text-gray-900 mb-2">
								{medication.name}
							</h3>
							<div className="space-y-2 text-sm">
								<p className="text-gray-600">
									<span className="font-medium">Principio activo:</span> {medication.drug}
								</p>
								<p className="text-gray-600">
									<span className="font-medium">Potencia:</span> {medication.potency}
								</p>
								<p className="text-gray-600">
									<span className="font-medium">Laboratorio:</span> {medication.laboratory}
								</p>
								<p className="text-gray-600">
									<span className="font-medium">Cobertura:</span> {medication.coverage}%
								</p>
								<p className="text-gray-600">
									<span className="font-medium">Unidades:</span> {medication.units}
								</p>
								<p className="text-gray-600">
									<span className="font-medium">Troquel:</span> {medication.troquel}
								</p>
								<p className="text-gray-600">
									<span className="font-medium">Categoría:</span> {medication.category}
								</p>
								<p className="text-gray-700">
									<span className="font-medium">Descripción:</span> {medication.description}
								</p>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};
