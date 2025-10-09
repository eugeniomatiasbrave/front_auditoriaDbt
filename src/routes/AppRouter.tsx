import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "../App";

// Páginas públicas
import { Landing } from "../pages/public/Landing";
import { CalculateInsu } from "../pages/public/CalculateInsu";
import { LawDbt } from "../pages/public/LawDbt";
import { Vademecum } from "../pages/public/Vademecum";

// Páginas de autenticación
import { Login } from "../pages/auth/Login";
import { Register } from "../pages/auth/Register";

// Páginas privadas
import { Profile } from "../pages/private/Profile";
import { Settings } from "../pages/private/Settings";
import { UserDashboard } from "../pages/private/UserDashboard";

// Páginas de admin
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { MedicineManager } from "../pages/admin/MedicineManager";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Landing />} />
					<Route path="calculate" element={<CalculateInsu />} />
					<Route path="law" element={<LawDbt />} />
					<Route path="vademecum" element={<Vademecum />} />
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="dashboard" element={<UserDashboard />} />
					<Route path="profile" element={<Profile />} />
					<Route path="settings" element={<Settings />} />
					<Route path="admin" element={<AdminDashboard />} />
					<Route path="admin/medicines" element={<MedicineManager />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};



