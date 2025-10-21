import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getData, ApiResponse, deleteData } from '../../services/axiosService';
import { endpoints } from '../../services/endpoints';
import { Loading } from '../../components';
import { DeleteMedicationModal } from "../../components";

interface Medication {
	id: string | number;
	name: string;
	presentation: string;
	potency: string;
	drug: string;
	laboratory: string;
	coverage: number;
	units: number;
	troquel: string;
	categoryId: string;
	description: string;
}

/*
Nombre	Presentación	Potencia	Droga	Laboratorio	Cobertura	Unidades	Troquel	Categoría	Detalles	Acciones	Eliminar
INSULINA APIDRA SOLOSTAR	100UI/ml lap.prellx5x3ml	100 UI/ml	insulina glulisina	Sanofi-Aventis	100	1500	5524683	1

*/

export const MedicationManager = () => {
	const [medications, setMedications] = useState<Medication[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [search, setSearch] = useState<string>('');
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedMedication, setSelectedMedication] = useState<{ id: string | number; name: string } | null>(null);


	const navigate = useNavigate();

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


	const handleDeleteClick = (medication: { id: string | number; name: string }) => {
		setSelectedMedication(medication);
		setModalOpen(true);
	};

	const handleConfirmDelete = async () => {
    if (selectedMedication) {
        try {
            const response = await deleteData<ApiResponse<Medication>>(endpoints.MEDICATION_DELETE(String(selectedMedication.id)));
            if (response.success) {
                // Actualiza la lista local eliminando el medicamento
                setMedications(meds => meds.filter(med => med.id !== selectedMedication.id));
            } else {
                setError(response.message || "No se pudo eliminar el medicamento");
            }
		} catch {
			setError("Error al eliminar el medicamento");
		} finally {
			setModalOpen(false);
			setSelectedMedication(null);
		}
    }
};

	const handleCancelDelete = () => {
		setModalOpen(false);
		setSelectedMedication(null);
	};


	const filteredMedications = medications.filter((med) =>
		med.name.toLowerCase().includes(search.toLowerCase()) ||
		med.drug.toLowerCase().includes(search.toLowerCase()) ||
		med.laboratory.toLowerCase().includes(search.toLowerCase())
	);

	if (loading) {
		return <Loading message="Cargando medicamentos..." />;
	}

	if (error) {
		return (
			<div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
				{error}
			</div>
		);
	}

	return (
		<div>
			<h2 className="text-2xl text-sky-800 font-bold mb-6 text-center">Gestión de Medicamentos</h2>
			<div className="flex justify-between items-center mb-4 ">
				<button
					className="bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 px-4 rounded shadow"
					onClick={() => { navigate('/medication/create') }}
				>
					+ Nuevo Medicamento
				</button>
				<input
					type="text"
					placeholder="Buscar medicamento..."
					className="border border-sky-300 rounded px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-sky-400"
					value={search}
					onChange={e => setSearch(e.target.value)}
				/>
			</div>
			<div className="overflow-x-auto rounded-lg shadow-lg border border-gray-300 ">
				<table className="min-w-full bg-white text-sm text-blue-950 rounded-lg shadow-md">
					<thead>
						<tr className="bg-sky-100 text-sky-800">
							<th className="py-2 px-4 text-left">Nombre</th>
							<th className="py-2 px-4 text-left">Presentación</th>
							<th className="py-2 px-4 text-left">Potencia</th>
							<th className="py-2 px-4 text-left">Droga</th>
							<th className="py-2 px-4 text-left">Laboratorio</th>
							<th className="py-2 px-4 text-left">Cobertura</th>
							<th className="py-2 px-4 text-left">Unidades</th>
							<th className="py-2 px-4 text-left">Troquel</th>
							<th className="py-2 px-4 text-left">Categoría</th>
							<th className="py-2 px-4 text-left">Detalles</th>
							<th className="py-2 px-4 text-left">Acciones</th>
							<th className="py-2 px-4 text-left">Eliminar</th>
						</tr>
					</thead>
					<tbody>
						{filteredMedications.map((med) => (
							<tr key={med.id} className="border-b hover:bg-sky-50">
								<td className="py-2 px-4">{med.name}</td>
								<td className="py-2 px-4">{med.presentation}</td>
								<td className="py-2 px-4">{med.potency}</td>
								<td className="py-2 px-4">{med.drug}</td>
								<td className="py-2 px-4">{med.laboratory}</td>
								<td className="py-2 px-4">{med.coverage}</td>
								<td className="py-2 px-4">{med.units}</td>
								<td className="py-2 px-4">{med.troquel}</td>
								<td className="py-2 px-4">{med.categoryId}</td>
								<td className="py-2 px-4">
									<button onClick={() => navigate(`/medication/${med.id}`)} className="text-blue-600 hover:underline mr-2">Ver Detalles</button>
								</td>
								<td className="py-2 px-4">
									<button onClick={() => { navigate(`/medication/${med.id}/edit`) }} className="text-blue-600 hover:underline mr-2">Editar</button>
								</td>
								<td className="py-2 px-4">
									<button
										className="text-red-600 hover:underline"
										onClick={() => handleDeleteClick({ id: med.id, name: med.name })}
									>
										Eliminar
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<DeleteMedicationModal
				open={modalOpen}
				medicationName={selectedMedication?.name || ""}
				onConfirm={handleConfirmDelete}
				onCancel={handleCancelDelete}
			/>
		</div>
	);
};