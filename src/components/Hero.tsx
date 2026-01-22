import { Menu, X, Code2 } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <nav className="absolute w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-emerald-400" />
            <span className="text-2xl font-bold">Han<span className="text-emerald-400">Dev</span></span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-emerald-400 transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-emerald-400 transition-colors">Layanan</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-emerald-400 transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-emerald-400 transition-colors">Kontak</button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-700 py-4">
            <div className="flex flex-col space-y-4 px-6">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-emerald-400 transition-colors">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-left hover:text-emerald-400 transition-colors">Layanan</button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left hover:text-emerald-400 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-emerald-400 transition-colors">Kontak</button>
            </div>
          </div>
        )}
      </nav>

      <div id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-400/10 border border-emerald-400/30 rounded-full">
            <span className="text-emerald-400 font-medium">Solusi Digital Untuk Bisnis Anda</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Jasa Pembuatan Website<br />
            <span className="text-emerald-400">Yang Powerful & Efisien</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Kami menyediakan sistem registrasi event custom, jasa pembuatan website profesional, tim IT freelancer berpengalaman, serta crew event yang siap mendukung dan mensukseskan acara Anda dari awal hingga akhir.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-emerald-400 text-slate-900 rounded-lg font-semibold hover:bg-emerald-300 transition-all transform hover:scale-105 shadow-lg shadow-emerald-400/50"
            >
              Mulai Konsultasi Gratis
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-all border border-slate-700"
            >
              Lihat Portfolio
            </button>
          </div>

          {/* <div className="grid grid-cols-3 gap-8 mt-20 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-slate-400">Event Sukses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">100+</div>
              <div className="text-slate-400">Client Puas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-slate-400">Support</div>
            </div>
          </div> */}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-30 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
