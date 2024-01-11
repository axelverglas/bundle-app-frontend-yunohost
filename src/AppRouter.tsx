// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Bundle from './pages/Bundle';
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
