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
};

export const SelectMedication = ({ selectedMedication, setSelectedMedication }: SelectMedicationProps) => {

	const [medications, setMedications] = useState<Medication[]>([]);

	useEffect(() => {
		const fetchMedications = async () => {
			const categoryId = 4; // Provide the appropriate categoryId value here
			const response = await getData<{ data: Medication[] }>(endpoints.CATEGORIES_MEDICATIONS (categoryId));
			setMedications(response.data);
		};

		fetchMedications();
	}, []);
	return (
	<div>
		<h3>Medicamentos (insulinas)</h3>
		<select 
			value={selectedMedication}
			onChange={e => setSelectedMedication(Number(e.target.value))}
		    className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-sky-400">
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