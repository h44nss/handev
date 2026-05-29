import { useEffect, useRef } from 'react';
import { FlaskConical, MousePointer2, Bot, Puzzle, Wand2 } from 'lucide-react';

const experiments = [
  {
    icon: MousePointer2,
    title: 'Motion Studies',
    desc: 'Micro-animation explorations — hover states, page transitions, and cursor effects that feel alive.',
    tag: 'UI Experiments',
    status: 'Ongoing',
    color: '#C97B63',
  },
  {
    icon: Bot,
    title: 'AI Tools',
    desc: 'Small utilities powered by LLMs — prompt builders, content assistants, and smart form helpers.',
    tag: 'AI / LLM',
    status: 'Active',
    color: '#D8B08C',
  },
  {
    icon: Puzzle,
    title: 'Random Builds',
    desc: 'Weekend projects and proof-of-concepts — things built out of curiosity, not necessity.',
    tag: 'Side Projects',
    status: 'Growing',
    color: '#5E4636',
  },
  {
    icon: Wand2,
    title: 'Concept Designs',
    desc: 'Unsolicited redesigns and UI concepts for apps I use and love, reimagined with my own aesthetic.',
    tag: 'Design',
    status: 'Occasional',
    color: '#C97B63',
  },
  {
    icon: FlaskConical,
    title: 'Component Lab',
    desc: 'A living collection of reusable UI components — built for my own design system and open to remix.',
    tag: 'Code',
    status: 'Ongoing',
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

export default function Playground({ dark }: { dark: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  useIntersect(sectionRef);

  const card = dark
    ? 'bg-dark-card border border-dark-border'
    : 'bg-white/50 border border-warm-glow/15';

  return (
    <section
      id="playground"
      ref={sectionRef}
      className="py-28 px-6 md:px-12 lg:px-20 relative"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4 fade-up">
            <span className="font-satoshi text-xs tracking-widest uppercase" style={{ color: 'var(--accent)' }}>The Lab</span>
            <div className="h-px w-16" style={{ background: 'var(--accent)', opacity: 0.4 }} />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-clash text-section font-bold fade-up delay-100" style={{ color: 'var(--text-primary)' }}>
              Experimental
              <br />
              <span className="italic font-display" style={{ color: 'var(--accent)' }}>playground.</span>
            </h2>
            <p className="md:max-w-xs font-satoshi leading-relaxed fade-up delay-200" style={{ color: 'var(--muted)' }}>
              Where I build without constraints. A space for experiments, curiosity-driven builds, and creative exploration.
            </p>
          </div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large Featured Card */}
          <div
            className={`lg:col-span-2 rounded-3xl p-8 bento-card fade-up relative overflow-hidden ${card}`}
            style={{ backdropFilter: 'blur(12px)' }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 opacity-20 pointer-events-none"
              style={{
                background: 'radial-gradient(circle, #C97B63 0%, transparent 70%)',
                transform: 'translate(30%, -30%)',
              }}
            />
            <div className="relative z-10">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-satoshi font-medium mb-6"
                style={{ background: 'rgba(201,123,99,0.12)', color: 'var(--accent)', border: '1px solid rgba(201,123,99,0.25)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-warm inline-block" />
                Currently Building
              </span>
              <h3 className="font-clash font-bold text-3xl mb-3" style={{ color: 'var(--text-primary)' }}>
                Warm Design System
              </h3>
              <p className="font-satoshi leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
                A personal component library built on the aesthetic principles of warmth, editorial spacing, and calm interactions. Think Radix UI meets editorial magazine.
              </p>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'CSS', 'Storybook'].map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-xs font-satoshi" style={{ background: 'rgba(201,123,99,0.1)', color: 'var(--accent)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Side cards */}
          {experiments.slice(0, 4).map((exp, i) => {
            const Icon = exp.icon;
            return (
              <div
                key={exp.title}
                className={`group rounded-3xl p-6 bento-card fade-up relative overflow-hidden ${card} ${i === 0 ? '' : ''}`}
                style={{ backdropFilter: 'blur(12px)', transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${exp.color}18` }}
                  >
                    <Icon size={16} style={{ color: exp.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-satoshi text-xs px-2 py-0.5 rounded-full" style={{ background: 'rgba(201,123,99,0.1)', color: 'var(--accent)' }}>
                        {exp.tag}
                      </span>
                      <span className="font-satoshi text-xs" style={{ color: 'var(--muted)', opacity: 0.6 }}>{exp.status}</span>
                    </div>
                  </div>
                </div>
                <h4 className="font-clash font-semibold text-base mb-2 transition-colors duration-300 group-hover:text-warm-accent" style={{ color: 'var(--text-primary)' }}>
                  {exp.title}
                </h4>
                <p className="font-satoshi text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {exp.desc}
                </p>

                <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: 'inset 0 0 0 1px rgba(201,123,99,0.3)' }} />
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="mt-10 text-center font-satoshi text-sm fade-up" style={{ color: 'var(--muted)' }}>
          More experiments brewing ☕ — follow along as things take shape.
        </p>
      </div>
    </section>
  );
}
