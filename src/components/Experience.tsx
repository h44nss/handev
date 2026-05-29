import {
  SiReact,
  SiTypescript,
  SiLaravel,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiMysql,
  SiFigma,
  SiGit,
  SiNodedotjs,
  SiPhp,
} from 'react-icons/si';

import { TbBrandVscode } from 'react-icons/tb';
import type { IconType } from 'react-icons';

import { useEffect, useRef } from 'react';

const timeline = [
  {
    period: '2024 – Present',
    role: 'Creative Technologist & Freelance Developer',
    org: 'Independent',
    desc: 'Designing and developing custom web experiences, scalable internal systems, and digital products for clients across various industries in Indonesia, combining creativity, functionality, and modern technology.',
    tags: ['React', 'TypeScript', 'Laravel', 'QA'],
  },
  {
    period: 'March 2026 – Present',
    role: 'Quality Assurance Engineer',
    org: 'PT Anak Digital Indonesia · Full Time',
    desc: 'Responsible for ensuring product quality through comprehensive testing, bug validation, and collaboration with development teams to maintain high standards of usability, stability, and performance.',
    tags: ['QA', 'Quality Assurance'],
  },
  {
    period: 'August 2023 – Present',
    role: 'Freelance IT Event Support',
    org: 'PT Seven Event Organizer · Freelance',
    desc: 'Provided technical and operational IT support for large-scale events including GIIAS, GIICOMVEC, GJAW, and IMOS, ensuring smooth system operations, registration workflows, and on-site technical reliability.',
    tags: ['IT Event Support', 'Freelance'],
  },
  {
    period: 'September 2025',
    role: 'Freelance IT Event Support',
    org: 'PT Lima Event Indonesia · Freelance',
    desc: 'Supported event technology operations for Muslimfest, handling technical troubleshooting, system monitoring, and ensuring seamless digital event experiences throughout the event execution.',
    tags: ['IT Event Support', 'Freelance'],
  },
  {
    period: 'March 2025 – July 2025',
    role: 'Project Coordinator & UI/UX Designer',
    org: 'Universitas Pamulang · Internship',
    desc: 'Coordinated project workflows while designing intuitive and user-centered interfaces. Collaborated with teams to improve user experience, project efficiency, and visual consistency across digital platforms.',
    tags: ['Project Coordinator', 'UI/UX Designer', 'Internship'],
  },
  {
    period: 'March 2025 – April 2025',
    role: 'Branch Relations Officer',
    org: 'Bank CIMB Niaga · Full Time',
    desc: 'Managed relationships with priority banking customers by delivering personalized financial solutions, maintaining customer satisfaction, and supporting portfolio growth through professional client engagement.',
    tags: ['Finance', 'Customer Relations', 'Banking'],
  },
  {
    period: 'June 2022 – August 2022',
    role: 'WordPress Developer',
    org: 'PT Jaya Konsultan · Internship',
    desc: 'Developed and customized e-commerce websites using WordPress and WooCommerce, focusing on responsive layouts, plugin integration, performance optimization, and user-friendly experiences.',
    tags: ['WordPress', 'WooCommerce'],
  },
  {
    period: '2023 – Present',
    role: 'Informatics Student',
    org: 'Universitas Pamulang',
    desc: 'Studying informatics and software engineering while actively building personal projects, exploring modern web technologies, and continuously improving technical and problem-solving skills.',
    tags: ['Learning', 'Projects', 'Community'],
  },
];

const tools: {
  name: string;
  icon: IconType;
}[] = [
    { name: 'React', icon: SiReact },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Laravel', icon: SiLaravel },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Figma', icon: SiFigma },
    { name: 'VS Code', icon: TbBrandVscode },
    { name: 'Git', icon: SiGit },
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'PHP', icon: SiPhp },
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
      { threshold: 0.08 }
    );

    const els =
      ref.current?.querySelectorAll(
        '.fade-up, .fade-in'
      );

    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [ref]);
}

export default function Experience({
  dark,
}: {
  dark: boolean;
}) {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  useIntersect(sectionRef);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      style={{
        background: 'var(--bg-primary)',
      }}
    >
      {/* ambient blur */}
      <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#c97b63]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-4 fade-up">
            <span
              className="font-satoshi text-xs tracking-[0.3em] uppercase"
              style={{ color: 'var(--accent)' }}
            >
              Journey
            </span>

            <div
              className="h-px w-16"
              style={{
                background: 'var(--accent)',
                opacity: 0.4,
              }}
            />
          </div>

          <h2
            className="font-clash text-5xl md:text-7xl font-bold leading-[0.95] fade-up delay-100"
            style={{
              color: 'var(--text-primary)',
            }}
          >
            Experience &
            <br />

            <span
              className="italic font-display"
              style={{
                color: 'var(--accent)',
              }}
            >
              growth.
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Timeline */}
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="group relative flex gap-6 fade-up"
                style={{
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-3 h-3 rounded-full mt-1.5 transition-all duration-500 group-hover:scale-150"
                    style={{
                      background: 'var(--accent)',
                      boxShadow:
                        '0 0 0 4px rgba(201,123,99,0.15)',
                    }}
                  />

                  {i < timeline.length - 1 && (
                    <div
                      className="w-px flex-1 mt-2"
                      style={{
                        minHeight: '70px',
                        background:
                          'linear-gradient(to bottom, rgba(201,123,99,0.3), rgba(201,123,99,0.05))',
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pb-14">
                  <span
                    className="font-satoshi text-xs tracking-wider"
                    style={{
                      color: 'var(--accent)',
                    }}
                  >
                    {item.period}
                  </span>

                  <h4
                    className="font-clash font-semibold text-xl mt-1 mb-1"
                    style={{
                      color: 'var(--text-primary)',
                    }}
                  >
                    {item.role}
                  </h4>

                  <p
                    className="font-satoshi text-sm mb-3"
                    style={{
                      color: 'var(--accent)',
                      opacity: 0.8,
                    }}
                  >
                    {item.org}
                  </p>

                  <p
                    className="font-satoshi text-sm leading-8 mb-4 max-w-xl"
                    style={{
                      color: 'var(--muted)',
                    }}
                  >
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-satoshi"
                        style={{
                          background:
                            'rgba(201,123,99,0.1)',
                          color: 'var(--accent)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div>
            <h3
              className="font-clash font-semibold text-2xl mb-8 fade-up"
              style={{
                color: 'var(--text-primary)',
              }}
            >
              Tools & Stack
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {tools.map((tool, i) => {
                const Icon = tool.icon;

                return (
                  <div
                    key={tool.name}
                    className={`group flex items-center gap-3 rounded-2xl px-4 py-4 fade-up transition-all duration-500 hover:-translate-y-1 ${dark
                      ? 'bg-dark-card border border-dark-border'
                      : 'bg-white/50 border border-warm-glow/15'
                      }`}
                    style={{
                      backdropFilter: 'blur(12px)',
                      transitionDelay: `${i * 50}ms`,
                    }}
                  >
                    <span
                      className="opacity-80 group-hover:scale-110 transition-all duration-300"
                      style={{
                        color: 'var(--accent)',
                      }}
                    >
                      <Icon size={22} />
                    </span>

                    <span
                      className="font-satoshi text-sm font-medium"
                      style={{
                        color: 'var(--text-primary)',
                      }}
                    >
                      {tool.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Education */}
            <div
              className={`mt-10 rounded-[28px] p-7 fade-up delay-300 ${dark
                ? 'bg-dark-card border border-dark-border'
                : 'bg-white/50 border border-warm-glow/15'
                }`}
              style={{
                backdropFilter: 'blur(12px)',
              }}
            >
              <span
                className="font-satoshi text-xs tracking-[0.3em] uppercase mb-4 block"
                style={{
                  color: 'var(--accent)',
                }}
              >
                Education
              </span>

              <h4
                className="font-clash font-semibold text-lg mb-2"
                style={{
                  color: 'var(--text-primary)',
                }}
              >
                Computer Science / Informatics
              </h4>

              <p
                className="font-satoshi text-sm leading-7"
                style={{
                  color: 'var(--muted)',
                }}
              >
                Bachelor's Degree · 2023 — Present
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}