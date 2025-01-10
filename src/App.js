import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

const App = () => {
  useEffect(() => {
    Aos.init();

    // Use individual web-vitals functions to log the metrics
    getCLS(console.log); // Cumulative Layout Shift
    getFID(console.log); // First Input Delay
    getLCP(console.log); // Largest Contentful Paint
    getFCP(console.log); // First Contentful Paint
    getTTFB(console.log); // Time to First Byte
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
