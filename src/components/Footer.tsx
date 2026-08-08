import { Heart } from 'lucide-react';

const footerLinks = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Lab', href: '#playground' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer({ dark }: { dark: boolean }) {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer
      className="relative px-6 md:px-12 lg:px-20 py-16 overflow-hidden"
      style={{ background: dark ? '#141310' : '#2B2B2B', color: '#F3EDE4' }}
    >
      {/* Ambient blob */}
      <div
        className="absolute bottom-0 left-1/4 w-96 h-96 pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #C97B63 0%, transparent 70%)', filter: 'blur(60px)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 pb-12" style={{ borderBottom: '1px solid rgba(243,237,228,0.08)' }}>
          <div>
            <div className="font-clash font-bold text-3xl mb-2">
              Hantech<span style={{ color: '#C97B63' }}>.</span>
            </div>
            <p className="font-satoshi text-sm max-w-xs leading-relaxed" style={{ color: 'rgba(243,237,228,0.5)' }}>
              Creative Technologist & Digital Experience Builder. Building warm digital things from Indonesia.
            </p>
          </div>
          <div className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="font-satoshi text-sm transition-colors duration-300"
                style={{ color: 'rgba(243,237,228,0.5)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#C97B63')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(243,237,228,0.5)')}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Big closing text */}
        <div className="mb-12">
          <p
            className="font-clash font-bold leading-none select-none opacity-[0.04]"
            style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', color: '#F3EDE4' }}
          >
            HAN · TECH
          </p>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-satoshi text-xs flex items-center gap-1.5" style={{ color: 'rgba(243,237,228,0.35)' }}>
            © {year} Han. Crafted with{' '}
            <Heart size={11} className="inline" style={{ color: '#C97B63' }} />
            {' '}&amp; strong coffee.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-satoshi text-xs px-4 py-2 rounded-xl transition-all duration-300"
              style={{ color: 'rgba(243,237,228,0.5)', border: '1px solid rgba(243,237,228,0.1)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.color = '#C97B63';
                el.style.borderColor = 'rgba(201,123,99,0.4)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.color = 'rgba(243,237,228,0.5)';
                el.style.borderColor = 'rgba(243,237,228,0.1)';
              }}
            >
              Back to top ↑
            </button>
            <span className="font-satoshi text-xs" style={{ color: 'rgba(243,237,228,0.25)' }}>
              Built with React + TypeScript
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
