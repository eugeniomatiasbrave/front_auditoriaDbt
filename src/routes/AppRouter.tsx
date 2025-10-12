import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "../App";

// Páginas (para rutas)
import { Landing, CalculateInsu, LawDbt, Vademecum } from "../pages/public";
import { Login, Register } from "../pages/auth";
import { Profile, Settings, UserDashboard, MedicationManager } from '../pages/private'

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
					<Route path="medication" element={<MedicationManager />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};



