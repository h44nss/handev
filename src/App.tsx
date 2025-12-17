
import './index.css'
import Footer from './components/Footer'
import Hero from './components/Hero' 
import Services from './components/Services'  
import Portfolio from './components/Portfolio' 
import Contact from './components/Contact'  

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App
