import { useEffect, useState } from "react";
import { endpoints } from "../../services/endpoints";
import { getData } from "../../services/axiosService";

type Category = {
	id: number;
	name: string;
	description: string;
	createdAt: string;
	updatedAt: string;
};

type SelectCategoryProps = {
	selectedCategory: string;
	setSelectedCategory: (value: string) => void;
};

export const SelectCategory = ({ selectedCategory, setSelectedCategory }: SelectCategoryProps) => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await getData<Category[]>(endpoints.CATEGORIES_ALL);
				setCategories(response);
			} catch (err) {
				console.error("Error fetching categories:", err);
				setError("Error al cargar categorías");
			} finally {
				setLoading(false);
			}
		};
		fetchCategories();
	}, []);

	return (
		<div>
			<h3>Categorías</h3>
			{loading && <p>Cargando categorías...</p>}
			{error && <p className="text-red-500">{error}</p>}
			<select
				value={selectedCategory}
				onChange={e => setSelectedCategory(e.target.value)}
				className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-sky-400"
				disabled={loading}
			>
				<option value="" >Categorías</option>
				{categories.map(cat => (
					<option key={cat.id} value={cat.id.toString()}>
						{cat.name}
					</option>
				))}
			</select>
		</div>
	);
};