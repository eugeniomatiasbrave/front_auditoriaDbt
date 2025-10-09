import { Outlet } from 'react-router-dom'
import { Header } from './components/common/Header'
import { Navigation } from './components/common/Navigation'
import { Footer } from './components/common/Footer'

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <Navigation />
      <main className="container mx-auto p-4 flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
};
