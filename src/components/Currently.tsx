import { useEffect, useRef } from 'react';
import { Hammer, BookOpen, Music2, Coffee, Monitor } from 'lucide-react';

const items = [
  {
    icon: Hammer,
    label: 'Currently Building',
    value: 'Warm Design System + this portfolio',
    sub: 'React · TypeScript · CSS',
    color: '#C97B63',
  },
  {
    icon: BookOpen,
    label: 'Currently Learning',
    value: 'Advanced animation patterns',
    sub: 'Framer Motion · GSAP · CSS View Transitions',
    color: '#D8B08C',
  },
  {
    icon: Music2,
    label: 'Currently Listening',
    value: 'Lo-fi beats & ambient jazz',
    sub: 'Perfect for late-night builds 🎧',
    color: '#5E4636',
  },
  {
    icon: Coffee,
    label: 'Coffee Status',
    value: 'On my 2nd cup',
    sub: 'Pour-over, oat milk, no sugar',
    color: '#C97B63',
  },
  {
    icon: Monitor,
    label: 'Current Setup',
    value: 'VS Code · Figma · Notion',
    sub: 'Windows · Chrome Dev · Git Bash Terminal',
    color: '#D8B08C',
  },
];

function useIntersect(ref: React.RefObject<Element | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    const els = ref.current?.querySelectorAll('.fade-up, .fade-in');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
}

export default function Currently({ dark }: { dark: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  useIntersect(sectionRef);

  const card = dark
    ? 'bg-dark-card border border-dark-border'
    : 'bg-white/50 border border-warm-glow/15';

  return (
    <section
      id="currently"
      ref={sectionRef}
      className="py-28 px-6 md:px-12 lg:px-20 relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4 fade-up">
              <span className="font-satoshi text-xs tracking-widest uppercase" style={{ color: 'var(--accent)' }}>Right Now</span>
              <div className="h-px w-16" style={{ background: 'var(--accent)', opacity: 0.4 }} />
            </div>
            <h2 className="font-clash text-section font-bold fade-up delay-100" style={{ color: 'var(--text-primary)' }}>
              A peek behind
              <br />
              <span className="italic font-display" style={{ color: 'var(--accent)' }}>the screen.</span>
            </h2>
          </div>
          <p className="md:max-w-xs font-satoshi leading-relaxed fade-up delay-200" style={{ color: 'var(--muted)' }}>
            A small, cozy snapshot of what's on my mind, in my ears, and in my cup — right now.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`group rounded-3xl p-7 bento-card fade-up ${card}`}
                style={{ backdropFilter: 'blur(12px)', transitionDelay: `${i * 70}ms` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${item.color}18` }}
                >
                  <Icon size={18} style={{ color: item.color }} />
                </div>
                <p className="font-satoshi text-xs tracking-widest uppercase mb-2" style={{ color: 'var(--accent)' }}>
                  {item.label}
                </p>
                <h4 className="font-clash font-semibold text-lg mb-1" style={{ color: 'var(--text-primary)' }}>
                  {item.value}
                </h4>
                <p className="font-satoshi text-sm" style={{ color: 'var(--muted)' }}>
                  {item.sub}
                </p>
                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: 'inset 0 0 0 1px rgba(201,123,99,0.3)' }} />
              </div>
            );
          })}

          {/* Fun "Availability" card */}
          <div
            className={`sm:col-span-2 lg:col-span-1 rounded-3xl p-7 bento-card fade-up delay-400 relative overflow-hidden ${card}`}
            style={{ backdropFilter: 'blur(12px)' }}
          >
            <div
              className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 80% 20%, #C97B63 0%, transparent 60%)' }}
            />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-5">
                <span className="status-pulse w-2.5 h-2.5 rounded-full bg-green-400 block" />
                <span className="font-satoshi text-xs font-medium" style={{ color: '#4ade80' }}>Open to work</span>
              </div>
              <h4 className="font-clash font-bold text-xl mb-2" style={{ color: 'var(--text-primary)' }}>
                Available for projects
              </h4>
              <p className="font-satoshi text-sm leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
                Taking on freelance projects and creative collaborations. Got something interesting? Let's talk.
              </p>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-5 py-2.5 rounded-xl font-satoshi font-medium text-sm text-white transition-all duration-300"
                style={{ background: 'var(--accent)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--brown)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--accent)'; }}
              >
                Reach out →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
