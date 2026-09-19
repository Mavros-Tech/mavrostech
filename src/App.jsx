import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Partnerships from './pages/Partnerships'
import Demos from './pages/Demos'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppIntegration from './components/WhatsAppIntegration'

function App() {
  const location = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = document.querySelectorAll('.reveal, .fade-scale');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    // Scroll to top on route change or to hash with navbar offset
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          const y = element.getBoundingClientRect().top + window.scrollY - 88;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Navigate to="/#services" replace />} />
        <Route path="/process" element={<Navigate to="/#process" replace />} />
        <Route path="/work" element={<Navigate to="/#work" replace />} />
        <Route path="/impact" element={<Navigate to="/#impact" replace />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/partnerships" element={<Partnerships />} />
        <Route path="/demos" element={<Demos />} />
      </Routes>
      <Footer />
      <WhatsAppIntegration />
    </>
  )
}

export default App
