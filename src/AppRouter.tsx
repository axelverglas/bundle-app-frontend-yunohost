// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Bundle from './pages/Bundle/Bundle';
import BundleNew from './pages/BundleNew';

const AppRouter: React.FC = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bundle" element={<Bundle />} />
            <Route path="/new-bundle" element={<BundleNew />} />
        </Routes>
    </Router>
  );
};

export default AppRouter;
