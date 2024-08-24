import React, { Suspense, lazy } from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Top from "./Pages/Top"
import Preloader from './Componants/Preloader';
import Header from './Pages/Header';
import Footer from './Componants/Footer'; // Ensure the path is correct

const Home = lazy(() => import('./Componants/Home'));
const About = lazy(() => import('./Componants/About'));
const List = lazy(() => import('./Pages/List'));
const SinglePage = lazy(() => import('./Pages/SinglePage'));
const Contact = lazy(() => import('./Componants/Contact'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timer to simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <Router>
      <Top />
      <div className="container-fluid mb-5">
        <Header />
      </div>
      <div>
        <div className="container-fluid">
          <div className="row">
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/tour" element={<List />} />
                <Route path="/blog" element={<List />} />
                <Route path="/article/:name" element={<SinglePage />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
