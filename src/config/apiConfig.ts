export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || "https://braveauditoriadbt-production.up.railway.app",
  TIMEOUT: 8000, // 8 segundos
  RETRY_ATTEMPTS: 3, // Número de reintentos para peticiones fallidas
} as const;

// "http://localhost:3000",
