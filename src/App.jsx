import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import SubmissionForm from './components/SubmissionForm';
import PortfolioList from './components/PortfolioList';
import Analytics from './components/Analytics';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/submission" element={<SubmissionForm />} />
          <Route path="/portfolio" element={<PortfolioList />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<div className="text-gray-500">Settings page placeholder</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
