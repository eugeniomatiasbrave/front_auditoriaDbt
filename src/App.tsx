import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, CalculateInsu, LawDbt, Vademecum } from "./pages/public";
import { Login, Register, Logout } from "./pages/auth";
import { Profile, UserDashboard, MedicationManager } from './pages/private'
import { Header,Navbar,Footer,EditMedication,DetailsMedication,CreateMedication } from './components'


//import { ProtectedRoute } from './routes/ProtectedRoute'

export const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <Navbar />
        <main className="container mx-auto p-4 flex-1">
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<Landing />} />
            <Route path="calculate" element={<CalculateInsu />} />
            <Route path="law" element={<LawDbt />} />
            <Route path="vademecum" element={<Vademecum />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            {/* Rutas protegidas */}
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="logout" element={<Logout />} />

            {/* Rutas de medicamentos agrupadas */}
            <Route path="medication" >
              <Route index element={<MedicationManager />} />
              <Route path="create" element={<CreateMedication />} />
              <Route path=":id/edit" element={<EditMedication />} />
              <Route path=":id" element={<DetailsMedication />} />
            </Route>

            {/* Ruta 404 */}
            <Route path="*" element={<h1>404 - Not Found</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
};
