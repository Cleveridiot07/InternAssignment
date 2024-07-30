import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Loader from './components/Loader'; // Import your custom loader
import Footer from './components/Footer';
import Gallery from './pages/Gallery';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/AboutUs'));
const Academics = lazy(() => import('./pages/Academics'));
const Admissions = lazy(() => import('./pages/Admission'));
const Contact = lazy(() => import('./components/ContactForm'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Set the time you want to show the loader (in milliseconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/gallery' element={<Gallery/>}/>
          </Routes>
        </Suspense>
      )}
      <Footer/>
    </Router>
  );
};

export default App;
