import { useEffect, useRef } from 'react';
import { Code2, LayoutDashboard, Rocket, Wrench, TestTube, Radio } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    desc: 'Clean, performant web applications built with modern frameworks. From MVPs to production-grade systems.',
    tags: ['React', 'TypeScript', 'Next.js', 'Laravel'],
    index: '01',
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard Systems',
    desc: 'Data-rich admin panels and internal dashboards that make complex information intuitive and actionable.',
    tags: ['Charts', 'Data Tables', 'Filters', 'Export'],
    index: '02',
  },
  {
    icon: Rocket,
    title: 'Landing Pages',
    desc: 'High-converting, visually striking landing pages crafted for campaigns, products, and brand launches.',
    tags: ['SEO', 'Animation', 'CRO', 'Speed'],
    index: '03',
  },
  {
    icon: Wrench,
    title: 'Internal Tools',
    desc: 'Custom-built tools that streamline workflows, automate tasks, and empower teams to move faster.',
    tags: ['CRUD', 'Forms', 'API', 'Auth'],
    index: '04',
  },
  {
    icon: TestTube,
    title: 'QA Testing',
    desc: 'Systematic quality assurance — manual and automated — ensuring your product ships bug-free and reliable.',
    tags: ['Test Plans', 'Bug Reports', 'Regression', 'UAT'],
    index: '05',
  },
  {
    icon: Radio,
    title: 'IT Event Operations',
    desc: 'End-to-end IT support for events: registration systems, live infrastructure, ticketing, and on-site tech.',
    tags: ['Events', 'Live Systems', 'Ticketing', 'Support'],
    index: '06',
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

export default function Services({ dark }: { dark: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  useIntersect(sectionRef);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-28 px-6 md:px-12 lg:px-20 relative"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 items-end">
          <div>
            <div className="flex items-center gap-3 mb-4 fade-up">
              <span className="font-satoshi text-xs tracking-widest uppercase" style={{ color: 'var(--accent)' }}>Services</span>
              <div className="h-px w-16" style={{ background: 'var(--accent)', opacity: 0.4 }} />
            </div>
            <h2 className="font-clash text-section font-bold fade-up delay-100" style={{ color: 'var(--text-primary)' }}>
              How I can
              <br />
              <span className="italic font-display" style={{ color: 'var(--accent)' }}>help you.</span>
            </h2>
          </div>
          <p className="font-satoshi text-lg leading-relaxed fade-up delay-200" style={{ color: 'var(--muted)' }}>
            Not just a developer — a thinking partner. I bring technical depth and creative sensibility to every engagement, whether it's a 2-day sprint or a 3-month build.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`group relative rounded-3xl p-7 bento-card fade-up transition-all duration-500 cursor-default overflow-hidden ${
                  dark ? 'bg-dark-card border border-dark-border' : 'bg-white/50 border border-warm-glow/15'
                }`}
                style={{ backdropFilter: 'blur(12px)', transitionDelay: `${i * 70}ms` }}
              >
                {/* Index number watermark */}
                <span
                  className="absolute top-4 right-6 font-clash font-bold text-6xl opacity-[0.04] select-none transition-opacity duration-500 group-hover:opacity-[0.08]"
                  style={{ color: 'var(--accent)' }}
                >
                  {service.index}
                </span>

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110"
                  style={{ background: 'rgba(201,123,99,0.12)' }}
                >
                  <Icon size={20} style={{ color: 'var(--accent)' }} />
                </div>

                {/* Text */}
                <h3 className="font-clash font-semibold text-lg mb-3 transition-colors duration-300 group-hover:text-warm-accent" style={{ color: 'var(--text-primary)' }}>
                  {service.title}
                </h3>
                <p className="font-satoshi text-sm leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
                  {service.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-satoshi font-medium"
                      style={{ background: dark ? 'rgba(255,255,255,0.05)' : 'rgba(94,70,54,0.07)', color: 'var(--muted)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(201,123,99,0.35)' }}
                />
              </div>
            );
          })}
        </div>

        {/* CTA Block */}
        <div
          className={`mt-10 rounded-3xl p-8 md:p-12 fade-up delay-400 flex flex-col md:flex-row items-center justify-between gap-6 ${
            dark ? 'bg-dark-card border border-dark-border' : 'bg-white/60 border border-warm-glow/20'
          }`}
          style={{ backdropFilter: 'blur(12px)' }}
        >
          <div>
            <h3 className="font-clash font-bold text-2xl mb-2" style={{ color: 'var(--text-primary)' }}>
              Have a project in mind?
            </h3>
            <p className="font-satoshi" style={{ color: 'var(--muted)' }}>
              Let's explore what we can build together.
            </p>
          </div>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex-shrink-0 px-8 py-3.5 rounded-2xl font-satoshi font-semibold text-white transition-all duration-300 magnetic whitespace-nowrap"
            style={{ background: 'var(--accent)' }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--brown)'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = 'var(--accent)'; }}
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
}
