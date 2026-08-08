import { useState, useEffect, useRef } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Lab', href: '#playground' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  dark: boolean;
  toggleDark: () => void;
}

export default function Navbar({ dark, toggleDark }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 50);
      setHidden(y > lastY.current && y > 200);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${hidden ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className={`mx-auto transition-all duration-500 ${scrolled ? `mt-3 mx-4 md:mx-8 rounded-2xl ${dark ? 'bg-dark-card/80 backdrop-blur-xl border border-dark-border shadow-2xl' : 'bg-warm-bg/80 backdrop-blur-xl border border-warm-glow/20 shadow-lg'}` : 'px-6 py-0'}`}>
          <div className={`flex items-center justify-between h-16 ${scrolled ? 'px-5' : 'px-6 md:px-12 pt-4'}`}>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-clash font-semibold text-lg tracking-tight" style={{ color: 'var(--text-primary)' }}>
              Hantech<span className="text-warm-accent">.</span>
            </button>

            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <button key={link.label} onClick={() => handleNav(link.href)}
                  className="underline-anim text-sm font-satoshi font-medium tracking-wide transition-colors duration-300"
                  style={{ color: 'var(--muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--muted)')}>
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button id="dark-mode-toggle" onClick={toggleDark}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${dark ? 'bg-dark-border text-dark-accent hover:bg-dark-accent hover:text-dark-bg' : 'bg-warm-bg2 text-warm-brown hover:bg-warm-accent hover:text-white'}`}
                aria-label="Toggle dark mode">
                {dark ? <Sun size={15} /> : <Moon size={15} />}
              </button>
              <button id="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}
                className={`md:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${dark ? 'bg-dark-border text-dark-text' : 'bg-warm-bg2 text-warm-brown'}`}
                aria-label="Toggle menu">
                {menuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
              <button onClick={() => handleNav('#contact')}
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-satoshi font-medium text-white transition-all duration-300"
                style={{ background: 'var(--accent)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--brown)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--accent)'; }}>
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className={`fixed inset-0 z-40 transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }} onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-0 right-0 bottom-0 w-72 transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'} ${dark ? 'bg-dark-card' : 'bg-warm-bg'} flex flex-col p-8 pt-24`}>
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button key={link.label} onClick={() => handleNav(link.href)}
                className="text-left font-clash font-semibold text-2xl transition-colors duration-300"
                style={{ color: 'var(--text-primary)' }}>
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-auto">
            <button onClick={() => handleNav('#contact')}
              className="w-full text-center py-3 px-6 rounded-2xl font-satoshi font-medium text-white transition-all duration-300"
              style={{ background: 'var(--accent)' }}>
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
