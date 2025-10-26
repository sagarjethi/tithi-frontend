import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Events from './pages/Events';
import Showcase from './pages/Showcase';
import Faucet from './pages/Faucet';
import Swag from './pages/Swag';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/faucet" element={<Faucet />} />
          <Route path="/swag" element={<Swag />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;