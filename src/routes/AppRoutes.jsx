import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../features/home/pages/Home';
import About from '../features/about/pages/About';
import Work from '../features/work/pages/Work';
import ProjectDetails from '../features/work/pages/ProjectDetails';
import Capabilities from '../features/capabilities/pages/Capabilities';
import Process from '../features/process/pages/Process';
import Contact from '../features/contact/pages/Contact';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:id" element={<ProjectDetails />} />
        <Route path="capabilities" element={<Capabilities />} />
        <Route path="process" element={<Process />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}



