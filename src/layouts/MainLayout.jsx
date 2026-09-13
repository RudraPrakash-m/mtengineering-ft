import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';
import ScrollToTop from '../components/shared/ScrollToTop';
import ToastContainerConfig from '../components/shared/ToastContainerConfig';

export default function MainLayout() {
  return (
    <div className="relative min-h-screen bg-[#FAF9F5] text-slate-900 flex flex-col justify-between selection:bg-amber-600 selection:text-white overflow-x-hidden">
      {/* Route change scroll reset */}
      <ScrollToTop />

      {/* Global Architectural Navigation */}
      <Navbar />

      {/* Main Page Slot */}
      <main className="grow">
        <Outlet />
      </main>

      {/* Atelier Footer */}
      <Footer />

      {/* React Toastify Architectural Notifications */}
      <ToastContainerConfig />
    </div>
  );
}
