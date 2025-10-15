import { API_CONFIG } from "../config/apiConfig";

const API_BASE_URL: string = API_CONFIG.BASE_URL;

export const endpoints = {
  // Medications
  MEDICATIONS: `${API_BASE_URL}/api/medications`,
  MEDICATION_DETAILS: (id: string) => `${API_BASE_URL}/api/medications/${id}`,
  // Categories
  CATEGORIES_ALL: `${API_BASE_URL}/api/categories`, // Todas las categorías
  CATEGORIES_MEDICATIONS: (categoryId: number) => `${API_BASE_URL}/api/categories/${categoryId}/medications`, // Medicamentos por categoría
};
