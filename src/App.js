import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import logo from './assets/HMTI.png';

import Home from './pages/Home';
import GaleriKarya from './pages/GaleriKarya';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <Helmet>
        <title>HMTI</title>
        <link rel="icon" type="image/png" href={logo} />
      </Helmet>

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollPosition > 50 ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo TI PolSI" className="h-12 w-12 object-cover" />
          </div>

          


          {/* Mobile Menu button */}
          <button onClick={toggleMenu} className={`md:hidden ${scrollPosition > 50 ? 'text-blue-800' : 'text-white'}`}>
            ☰
          </button>
        </div>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeri" element={<GaleriKarya />} />
      </Routes>
    </Router>
  );
}

export default App;
