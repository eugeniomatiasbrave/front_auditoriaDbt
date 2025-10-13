interface LoadingProps {
	message?: string;
}

export const Loading = ({ message = "Cargando..." }: LoadingProps) => {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="flex justify-center items-center p-8">
				<div className="text-lg text-gray-600">{message}</div>
			</div>
		</div>
	);
};
