import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Standards from './pages/Standards';
import Training from './pages/Training';
import Clients from './pages/Clients';
import ContactUs from './pages/ContactUs';

// Scroll to top on route change helper
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => setIsQuoteOpen(true);
  const handleCloseQuote = () => setIsQuoteOpen(false);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
        
        {/* Navbar */}
        <Navbar onOpenQuote={handleOpenQuote} />

        {/* Main Routes */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenQuote={handleOpenQuote} />} />
            <Route path="/about" element={<AboutUs onOpenQuote={handleOpenQuote} />} />
            <Route path="/services" element={<Services onOpenQuote={handleOpenQuote} />} />
            <Route path="/standards" element={<Standards onOpenQuote={handleOpenQuote} />} />
            <Route path="/training" element={<Training onOpenQuote={handleOpenQuote} />} />
            <Route path="/clients" element={<Clients onOpenQuote={handleOpenQuote} />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenQuote={handleOpenQuote} />

        {/* Interactive Proposal Modal */}
        <QuoteModal isOpen={isQuoteOpen} onClose={handleCloseQuote} />

      </div>
    </BrowserRouter>
  );
}
