import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import PageLoader from '../components/shared/PageLoader';

// Lazy-loaded Feature Pages
const Home = lazy(() => import('../features/home/pages/Home'));
const About = lazy(() => import('../features/about/pages/About'));
const Work = lazy(() => import('../features/work/pages/Work'));
const ProjectDetails = lazy(() => import('../features/work/pages/ProjectDetails'));
const Capabilities = lazy(() => import('../features/capabilities/pages/Capabilities'));
const Process = lazy(() => import('../features/process/pages/Process'));
const Contact = lazy(() => import('../features/contact/pages/Contact'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
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
    </Suspense>
  );
}
