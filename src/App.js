import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Practise from './pages/index';
import Home from './pages/home';  // Correctly importing the Home component
import Contact from './pages/contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer';
import LostPage from './pages/noPage';
import Experience from './pages/experience';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Define the route for the Projects page */}
        <Route path="/projects" element={<Practise />} />
        {/* Define the home route */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        {/* Define a catch-all route for 404 Not Found */}
        <Route path="*" element={<LostPage />} />
        <Route path='/about' element={<About />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
