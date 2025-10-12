import { Outlet } from 'react-router-dom'
import { Header, Navbar, Footer } from './components'

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Navbar />
      <main className="container mx-auto p-4 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
};
