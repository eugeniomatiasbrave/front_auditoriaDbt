import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getData, ApiResponse } from '../../services/axiosService';
import { endpoints } from '../../services/endpoints';
import { Loading } from '../common/Loading';

interface DetailId {
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

export const DetailsMedication = () => {
	const { id } = useParams<{ id: string }>();
	const navigate = useNavigate();
	const [detailId, setDetailId] = useState<DetailId | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchMedications = async () => {
			try {
				setLoading(true);
				setError(null);

				if (!id) {
					setError('No medication ID provided');
					setLoading(false);
					return;
				}

				const response = await getData<ApiResponse<DetailId>>(endpoints.MEDICATION_DETAILS(id));

				if (response.success) {
					setDetailId(response.data);
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
	}, [id]);

	return (
		<div className="max-w-2xl mx-auto mt-12 p-4 rounded-lg shadow-md">
			<h1 className='text-2xl text-sky-700 font-bold mb-4'>Medication Details</h1>

			{loading ? (
				<Loading />
			) : error ? (
				<p className="text-red-500">Error: {error}</p>
			) : detailId ? (
				<>
					<div className=" text-sky-900 p-6 mb-4">
						<h3 className="text-xl text-sky-800 font-bold mb-4">{detailId.name}</h3>
						<p><strong>Presentation:</strong> {detailId.presentation}</p>
						<p><strong>Potency:</strong> {detailId.potency}</p>
						<p><strong>Drug:</strong> {detailId.drug}</p>
						<p><strong>Laboratory:</strong> {detailId.laboratory}</p>
						<p><strong>Coverage:</strong> {detailId.coverage}</p>
						<p><strong>Units:</strong> {detailId.units}</p>
						<p><strong>Troquel:</strong> {detailId.troquel}</p>
						<p><strong>Category ID:</strong> {detailId.categoryId}</p>
						<p><strong>Description:</strong> {detailId.description}</p>
					</div>
					<button
						className="bg-sky-700 hover:bg-sky-800 text-white font-semibold py-2 px-4 rounded shadow"
						onClick={() => navigate('/medication')}
					>
						← Volver a la tabla
					</button>
				</>
			) : (
				<p>No medication details available.</p>
			)}
		</div>
	);
};
