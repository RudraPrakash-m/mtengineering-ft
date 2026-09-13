import { lazy, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../features/home/pages/Home';

// Lazy load secondary routes with explicit prefetch functions
export const loadAbout = () => import('../features/about/pages/About');
export const loadWork = () => import('../features/work/pages/Work');
export const loadProjectDetails = () => import('../features/work/pages/ProjectDetails');
export const loadCapabilities = () => import('../features/capabilities/pages/Capabilities');
export const loadProcess = () => import('../features/process/pages/Process');
export const loadContact = () => import('../features/contact/pages/Contact');

const About = lazy(loadAbout);
const Work = lazy(loadWork);
const ProjectDetails = lazy(loadProjectDetails);
const Capabilities = lazy(loadCapabilities);
const Process = lazy(loadProcess);
const Contact = lazy(loadContact);

// Preload all secondary chunks during browser idle time for 0ms navigation
function prefetchAllRoutes() {
  if (typeof window === 'undefined') return;
  const prefetch = () => {
    loadAbout();
    loadWork();
    loadProjectDetails();
    loadCapabilities();
    loadProcess();
    loadContact();
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(prefetch, { timeout: 2000 });
  } else {
    setTimeout(prefetch, 800);
  }
}

export default function AppRoutes() {
  useEffect(() => {
    prefetchAllRoutes();
  }, []);

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


