import { useEffect, useRef } from 'react';
import { Code2, TestTube, Server, Palette, Globe } from 'lucide-react';

const roles = [
  { icon: Code2, title: 'Frontend Developer', desc: 'Building pixel-perfect, performant interfaces with React, TypeScript, and modern CSS.', color: '#C97B63' },
  { icon: TestTube, title: 'QA Engineer', desc: 'Ensuring quality through systematic testing, automation, and meticulous attention to detail.', color: '#D8B08C' },
  { icon: Server, title: 'IT Operations', desc: 'Managing infrastructure, event tech, and seamless digital operations at scale.', color: '#5E4636' },
  { icon: Palette, title: 'UI Designer', desc: 'Crafting warm, editorial interfaces that balance aesthetics with function.', color: '#C97B63' },
  { icon: Code2, title: 'Fullstack Developer', desc: 'Architecting cohesive internal tools, dashboards, and data systems.', color: '#D8B08C' },
  { icon: Globe, title: 'Experience Builder', desc: 'Connecting technology and humanity through thoughtful digital storytelling.', color: '#5E4636' },
];

function useIntersect(ref: React.RefObject<Element | null>) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    const els = ref.current?.querySelectorAll('.fade-up, .fade-in');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ref]);
}

export default function About({ dark }: { dark: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  useIntersect(sectionRef);

  const card = dark
    ? 'bg-dark-card border border-dark-border'
    : 'bg-white/60 border border-warm-glow/20';

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 px-6 md:px-12 lg:px-20 relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      {/* Section Label */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-4 fade-up">
          <span className="font-satoshi text-xs tracking-widest uppercase" style={{ color: 'var(--accent)' }}>Identity</span>
          <div className="h-px flex-1 max-w-16" style={{ background: 'var(--accent)', opacity: 0.4 }} />
        </div>

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 items-end">
          <h2 className="font-clash text-section font-bold fade-up" style={{ color: 'var(--text-primary)' }}>
            A creative mind
            <br />
            <span className="italic font-display" style={{ color: 'var(--accent)' }}>wired for</span>
            <br />
            systems.
          </h2>
          <p className="font-satoshi text-lg leading-relaxed fade-up delay-200" style={{ color: 'var(--muted)' }}>
            I'm Han — a creative technologist based in Indonesia who lives at the intersection of design and engineering. I believe great technology should feel warm, intentional, and deeply human.
            <br /><br />
            Whether I'm debugging a QA pipeline or designing a landing page, I bring the same obsessive care to every pixel and every process.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large card — Philosophy */}
          <div
            className={`col-span-1 sm:col-span-2 lg:col-span-2 rounded-3xl p-8 bento-card fade-up ${card}`}
            style={{ backdropFilter: 'blur(12px)' }}
          >
            <span className="font-satoshi text-xs tracking-widest uppercase mb-4 block" style={{ color: 'var(--accent)' }}>Philosophy</span>
            <blockquote className="font-clash font-semibold text-2xl md:text-3xl leading-snug mb-6" style={{ color: 'var(--text-primary)' }}>
              "Good craft doesn't shout.
              <br />
              <span className="italic font-display" style={{ color: 'var(--accent)' }}>It resonates."</span>
            </blockquote>
            <p className="font-satoshi leading-relaxed" style={{ color: 'var(--muted)' }}>
              I approach every project as a small story — with a beginning that hooks, a middle that flows, and an end that lingers. Technology is my medium, but experience is the art.
            </p>
          </div>

          {/* Stats card */}
          <div className={`rounded-3xl p-8 bento-card fade-up delay-100 ${card}`} style={{ backdropFilter: 'blur(12px)' }}>
            <span className="font-satoshi text-xs tracking-widest uppercase mb-6 block" style={{ color: 'var(--accent)' }}>By the numbers</span>
            <div className="space-y-6">
              {[
                { num: '3+', label: 'Years building' },
                { num: '20+', label: 'Projects shipped' },
                { num: '5', label: 'Roles worn' },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div className="font-clash font-bold text-4xl" style={{ color: 'var(--text-primary)' }}>{num}</div>
                  <div className="font-satoshi text-sm" style={{ color: 'var(--muted)' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Roles grid */}
          {roles.map((role, i) => {
            const Icon = role.icon;
            return (
              <div
                key={role.title}
                className={`rounded-3xl p-6 bento-card fade-up ${card}`}
                style={{ backdropFilter: 'blur(12px)', transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${role.color}18` }}>
                    <Icon size={18} style={{ color: role.color }} />
                  </div>
                  <div>
                    <h3 className="font-clash font-semibold text-sm mb-1" style={{ color: 'var(--text-primary)' }}>{role.title}</h3>
                    <p className="font-satoshi text-xs leading-relaxed" style={{ color: 'var(--muted)' }}>{role.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Values card */}
          <div className={`col-span-1 sm:col-span-2 lg:col-span-3 rounded-3xl p-8 bento-card fade-up delay-300 ${card}`} style={{ backdropFilter: 'blur(12px)' }}>
            <span className="font-satoshi text-xs tracking-widest uppercase mb-6 block" style={{ color: 'var(--accent)' }}>What I value</span>
            <div className="flex flex-wrap gap-3">
              {['Clarity', 'Craft', 'Calmness', 'Curiosity', 'Consistency', 'Collaboration', 'Coffee ☕', 'Context'].map((v) => (
                <span
                  key={v}
                  className="px-4 py-2 rounded-full font-satoshi text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default"
                  style={{ background: `rgba(201,123,99,0.12)`, color: 'var(--accent)', border: '1px solid rgba(201,123,99,0.25)' }}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
