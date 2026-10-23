import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import { WhatsAppFloat } from './components/common';
import IntroLoader from './components/IntroLoader';
import { ScrollEffects } from './components/motion';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Industries from './pages/Industries';
import QualitySafety from './pages/QualitySafety';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const { pathname } = useLocation();
  return (
    <main key={pathname} className="page-enter">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/quality-safety-infrastructure" element={<QualitySafety />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clientele" element={<Navigate to="/projects" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <IntroLoader />
      <ScrollEffects />
      <ScrollToTop />
      <Header />
      <AnimatedRoutes />
      <Footer />
      <WhatsAppFloat />
    </BrowserRouter>
  );
}

export default App;
