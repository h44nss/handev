import { useState, useEffect } from 'react';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Playground from './components/Playground';
import Currently from './components/Currently';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDark(prefersDark);
  }, []);

  useEffect(() => {
    if (dark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [dark]);

  const toggleDark = () => setDark((d) => !d);

  return (
    <div className={`grain min-h-screen transition-colors duration-500 ${dark ? 'dark' : ''}`} style={{ background: 'var(--bg-primary)' }}>
      <Navbar dark={dark} toggleDark={toggleDark} />
      <main>
        <Hero dark={dark} />
        <About dark={dark} />
        <Projects dark={dark} />
        <Services dark={dark} />
        <Playground dark={dark} />
        <Currently dark={dark} />
        <Experience dark={dark} />
        <Contact dark={dark} />
      </main>
      <Footer dark={dark} />
    </div>
  );
}

export default App;
