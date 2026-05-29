import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: '01',
    title: 'Budi Luhur Algorithm Certification Platform',
    role: 'Fullstack Developer',
    desc: 'An interactive certification platform designed for algorithm examinations with a modern interface, real-time assessments, and seamless user experience for students.',
    image: 'https://h.top4top.io/p_3801ymbq81.png',
    tags: ['Next JS', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    category: 'Education Platform',
    year: '2026',
    featured: true,
    url: 'https://sertifikasi-kampus-budi-luhur.vercel.app//',
  },

  {
    id: '02',
    title: 'Ramadhan Tracker',
    role: 'Fullstack Developer',
    desc: 'A modern spiritual productivity platform to track daily Ramadhan activities, habits, prayers, and personal progress throughout the holy month.',
    image: 'https://e.top4top.io/p_3801ui4jd1.png',
    tags: ['React JS', 'Tailwind', 'Framer Motion', 'Supabase'],
    category: 'Lifestyle App',
    year: '2026',
    url: 'https://ramadan-saas.vercel.app/',
  },

  {
    id: '03',
    title: 'Panti Daki Open Trip',
    role: 'Fullstack Developer',
    desc: 'A cozy outdoor experience platform for mountain open trips, designed with cinematic visuals, trip booking features, and modern adventure branding.',
    image: 'https://c.top4top.io/p_3801030wy1.png',
    tags: ['React', 'Tailwind', 'SEO'],
    category: 'Travel Platform',
    year: '2026',
    url: 'https://redzone-yogz.vercel.app/',
  },

  {
    id: '04',
    title: 'Event Management System',
    role: 'Fullstack Developer',
    desc: 'A digital event management platform built to simplify event organization, attendee management, scheduling, and operational workflows.',
    image: 'https://d.top4top.io/p_3801pvdbn1.png',
    tags: ['React', 'Tailwind', 'SEO'],
    category: 'Management System',
    year: '2026',
    url: 'https://prototype-event-management.vercel.app/',
  },

  {
    id: '05',
    title: 'Qala Reservation',
    role: 'Fullstack Developer',
    desc: 'An elegant reservation platform designed to streamline bookings, customer management, and scheduling with a seamless modern interface.',
    image: 'https://k.top4top.io/p_38010j5fl1.png',
    tags: ['PHP', 'MySQL', 'Laravel'],
    category: 'Reservation Platform',
    year: '2026',
    // url: 'https://qala-reservation.vercel.app/',
  },

  {
    id: '06',
    title: 'Adana Mega Panel ERP',
    role: 'Frontend Developer',
    desc: 'A modern ERP dashboard interface focused on operational efficiency, data management, reporting systems, and enterprise workflows.',
    image: 'https://g.top4top.io/p_3654s4u6k1.jpeg',
    tags: ['Next JS', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    category: 'ERP Dashboard',
    year: '2026',
    url: 'https://adanamegapanel.com',
  },

  {
    id: '07',
    title: 'Redzone Company Profile',
    role: 'Fullstack Developer',
    desc: 'A modern company profile website crafted with clean layouts, strong visual identity, and optimized digital branding experiences.',
    image: 'https://i.top4top.io/p_3654gyg2k1.png',
    tags: ['React', 'Tailwind', 'SEO'],
    category: 'Company Website',
    year: '2026',
    url: 'https://redzone-yogz.vercel.app/',
  },

  {
    id: '08',
    title: 'TravelWMe',
    role: 'Fullstack Developer',
    desc: 'A travel and ticketing platform built to provide smooth booking experiences, destination discovery, and modern travel interactions.',
    image: 'https://g.top4top.io/p_3654cemqc1.png',
    tags: ['Laravel', 'PHP', 'MySQL'],
    category: 'Travel Platform',
    year: '2026',
    url: 'https://h44nss.github.io/travelwme-17/',
  },

  {
    id: '09',
    title: 'UMKM Food Catalog',
    role: 'Fullstack Developer',
    desc: 'A digital culinary showcase platform helping local UMKM businesses display menus, products, and ordering experiences online.',
    image: 'https://d.top4top.io/p_3654s0pe61.png',
    tags: ['Laravel', 'PHP', 'MySQL'],
    category: 'Food Platform',
    year: '2026',
    url: 'https://h44nss.github.io/Cloop-food/',
  },

  {
    id: '10',
    title: 'Online Lottery System',
    role: 'Fullstack Developer',
    desc: 'A real-time digital lottery system designed for live events with instant winner selection and interactive audience engagement.',
    image: 'https://d.top4top.io/p_36547pe9w1.png',
    tags: ['Laravel', 'PHP', 'MySQL'],
    category: 'Event Tool',
    year: '2025',
    // url: '',
  },

  {
    id: '11',
    title: 'Book Catalog',
    role: 'Developer',
    desc: 'A minimal digital library experience featuring smart search, clean organization, and intuitive book exploration interfaces.',
    image: 'https://e.top4top.io/p_36543abcc2.png',
    tags: ['Laravel', 'PHP', 'MySQL'],
    category: 'Catalog Website',
    year: '2025',
    // url: '',
  },
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
      { threshold: 0.1 }
    );

    const els =
      ref.current &&
      ref.current.querySelectorAll('.fade-up');

    if (els) {
      els.forEach((el: Element) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, [ref]);
}

export default function Projects({
  dark,
}: {
  dark: boolean;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useIntersect(sectionRef);

  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id='projects'
      ref={sectionRef}
      className='relative py-32 px-6 md:px-12 lg:px-20 overflow-hidden'
      style={{
        background: 'var(--bg-primary)',
      }}
    >
      {/* ambient blur */}
      <div className='absolute top-0 left-1/3 w-[500px] h-[500px] bg-[#c97b63]/10 blur-[140px] rounded-full pointer-events-none' />

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* header */}
        <div className='flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-24'>
          <div className='max-w-2xl'>
            <div className='flex items-center gap-3 mb-5 fade-up'>
              <span
                className='uppercase tracking-[0.3em] text-[11px] font-medium'
                style={{ color: 'var(--accent)' }}
              >
                Selected Works
              </span>

              <div
                className='w-16 h-px'
                style={{
                  background: 'var(--accent)',
                  opacity: 0.3,
                }}
              />
            </div>

            <h2
              className='fade-up text-5xl md:text-7xl leading-[0.95] font-bold tracking-tight'
              style={{
                color: 'var(--text-primary)',
                fontFamily: 'Clash Display',
              }}
            >
              Crafted with
              <br />
              intention &
              <span
                className='italic ml-4'
                style={{
                  color: 'var(--accent)',
                }}
              >
                warmth.
              </span>
            </h2>
          </div>

          <p
            className='fade-up max-w-sm text-sm leading-8'
            style={{
              color: 'var(--muted)',
            }}
          >
            A curated collection of digital products,
            systems, and interfaces blending
            functionality with warm modern aesthetics.
          </p>
        </div>

        {/* grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
          {projects.map((project, i) => (
            <a
              key={project.id}
              href={project.url}
              target='_blank'
              rel='noopener noreferrer'
              onMouseEnter={() =>
                setHovered(project.id)
              }
              onMouseLeave={() =>
                setHovered(null)
              }
              className={`
                fade-up
                group
                relative
                overflow-hidden
                rounded-[32px]
                transition-all
                duration-700
                hover:-translate-y-1
                block
                ${project.featured
                  ? 'md:col-span-2'
                  : ''
                }
              `}
              style={{
                background: dark
                  ? 'rgba(255,255,255,0.03)'
                  : 'rgba(255,255,255,0.45)',

                backdropFilter: 'blur(14px)',

                border:
                  hovered === project.id
                    ? '1px solid rgba(201,123,99,0.25)'
                    : '1px solid rgba(201,123,99,0.08)',

                transitionDelay: `${i * 70}ms`,
              }}
            >
              {/* image */}
              <div
                className={`
                  relative
                  overflow-hidden
                  ${project.featured
                    ? 'aspect-[16/8]'
                    : 'aspect-[4/3]'
                  }
                `}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-contain bg-[#efe7da] transition-transform duration-700 group-hover:scale-[1.03]'
                />

                {/* overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none' />

                {/* number */}
                <div className='absolute top-6 left-6'>
                  <span
                    className='text-5xl md:text-6xl font-bold opacity-20'
                    style={{
                      color: 'white',
                      fontFamily: 'Clash Display',
                    }}
                  >
                    {project.id}
                  </span>
                </div>

                {/* view button */}
                <div className='absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                  <div className='w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20'>
                    <ExternalLink
                      size={18}
                      color='white'
                    />
                  </div>
                </div>
              </div>

              {/* content */}
              <div className='p-7 md:p-8'>
                <div className='flex items-center justify-between mb-5'>
                  <div className='flex items-center gap-3 flex-wrap'>
                    <span
                      className='text-[11px] uppercase tracking-widest px-3 py-1 rounded-full'
                      style={{
                        background:
                          'rgba(201,123,99,0.10)',
                        color: 'var(--accent)',
                      }}
                    >
                      {project.category}
                    </span>

                    <span
                      className='text-xs'
                      style={{
                        color: 'var(--muted)',
                      }}
                    >
                      {project.year}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className='opacity-40 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100 transition-all duration-500'
                    style={{
                      color: 'var(--accent)',
                    }}
                  />
                </div>

                <h3
                  className='text-3xl md:text-4xl leading-tight font-bold mb-3'
                  style={{
                    color: 'var(--text-primary)',
                    fontFamily: 'Clash Display',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  className='text-sm mb-4'
                  style={{
                    color: 'var(--accent)',
                  }}
                >
                  {project.role}
                </p>

                <p
                  className='text-sm leading-8 mb-7 max-w-xl'
                  style={{
                    color: 'var(--muted)',
                  }}
                >
                  {project.desc}
                </p>

                {/* tags */}
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 rounded-full text-xs'
                      style={{
                        background: dark
                          ? 'rgba(255,255,255,0.05)'
                          : 'rgba(94,70,54,0.06)',

                        color: 'var(--muted)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* hover glow */}
              <div
                className='absolute inset-0 pointer-events-none transition-opacity duration-700'
                style={{
                  opacity:
                    hovered === project.id
                      ? 1
                      : 0,

                  boxShadow:
                    'inset 0 0 80px rgba(201,123,99,0.06)',
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}