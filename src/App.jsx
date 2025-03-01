import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import QnAPage from './pages/QnAPage';
import LoadingPage from './pages/LoadingPage';
import ResultPage from './pages/ResultPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/qna" element={<QnAPage />} />
      <Route path="/loading" element={<LoadingPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
