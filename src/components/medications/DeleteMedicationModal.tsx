
interface DeleteMedicationModalProps {
	open: boolean;
	medicationName: string;
	onConfirm: () => void;
	onCancel: () => void;
}

export const DeleteMedicationModal = ({
	open,
	medicationName,
	onConfirm,
	onCancel,
}: DeleteMedicationModalProps) => {
	if (!open) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
			<div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
				<h3 className="text-xl font-bold text-sky-800 mb-4 text-center">
					¿Eliminar medicamento?
				</h3>
				<p className="mb-6 text-center text-gray-700">
					¿Estás seguro que deseas eliminar <span className="font-semibold text-sky-700">{medicationName}</span>? Esta acción no se puede deshacer.
				</p>
				<div className="flex justify-center gap-4">
					<button
						className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded"
						onClick={onConfirm}
					>
						Eliminar
					</button>
					<button
						className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold px-4 py-2 rounded"
						onClick={onCancel}
					>
						Cancelar
					</button>
				</div>
			</div>
		</div>
	);
};