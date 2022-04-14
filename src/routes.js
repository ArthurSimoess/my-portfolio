import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';
import ProjectPage from './pages/ProjectsPage/ProjectsPage';

function RoutesPages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="projects" element={<ProjectPage />} />
    </Routes>
  );
}

export default RoutesPages;
