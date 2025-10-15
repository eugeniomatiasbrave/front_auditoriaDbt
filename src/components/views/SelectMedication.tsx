import { useEffect, useState } from "react";
import { endpoints } from "../../services/endpoints";
import { getData } from "../../services/axiosService";

type Medication = {
	id: number;
	name: string;
	presentation: string;
	potency: string;
	drug: string;
	laboratory: string;
	converage: string;
	categoryId: number;
	description: string;
	createdAt: string;
	updatedAt: string;
};

type SelectMedicationProps = {
	selectedMedication: number;
	setSelectedMedication: (value: number) => void;
	categoryId: string; // Nueva prop para la categoría seleccionada
};

export const SelectMedication = ({ selectedMedication, setSelectedMedication, categoryId }: SelectMedicationProps) => {

	const [medications, setMedications] = useState<Medication[]>([]);

	useEffect(() => {
		const fetchMedications = async () => {

			if (!categoryId) {
                setMedications([]);
                return;
            }

			const response = await getData<{ data: Medication[] }>(
				endpoints.CATEGORIES_MEDICATIONS (Number(categoryId))
			);
			setMedications(response.data);
		};

		fetchMedications();
	}, [categoryId]);

	return (
	<div>
		<h3>Medicamentos (insulinas)</h3>
		<select 
			value={selectedMedication}
			onChange={e => setSelectedMedication(Number(e.target.value))}
		    className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-sky-400"
			disabled={!categoryId}
			>
			<option value="">Seleccione un medicamento</option>
			{medications.map(med => (
				<option key={med.id} value={med.id.toString()}>
					{med.name}
				</option>
			))}
		</select>
	</div>
	)
}