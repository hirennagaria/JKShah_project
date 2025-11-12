import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AuroraBackground } from '../components/AuroraBackground'

const RootLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-midnight text-slate-100">
      <AuroraBackground />
      <Navbar />
      <main className="relative z-10 pt-24 pb-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default RootLayout

