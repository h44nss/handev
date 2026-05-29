import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Sparkles, Zap } from 'lucide-react';

export default function Hero({
  dark,
}: {
  dark: boolean;
}) {
  const containerRef =
    useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] =
    useState({
      x: 0,
      y: 0,
    });

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => setVisible(true),
      100
    );

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouse = (
      e: MouseEvent
    ) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener(
      'mousemove',
      handleMouse
    );

    return () =>
      window.removeEventListener(
        'mousemove',
        handleMouse
      );
  }, []);

  const parallaxX =
    (mousePos.x - 0.5) * 30;

  const parallaxY =
    (mousePos.y - 0.5) * 20;

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background:
          'var(--bg-primary)',
      }}
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute animate-float"
          style={{
            width: '600px',
            height: '600px',
            background:
              'radial-gradient(circle, rgba(201,123,99,0.18) 0%, transparent 70%)',
            top: '-100px',
            right: '-100px',
            transform: `translate(${parallaxX * 0.4
              }px, ${parallaxY * 0.4}px)`,
            transition:
              'transform 0.5s ease-out',
            borderRadius:
              '60% 40% 30% 70% / 60% 30% 70% 40%',
          }}
        />

        <div
          className="absolute animate-float-slow"
          style={{
            width: '400px',
            height: '400px',
            background:
              'radial-gradient(circle, rgba(216,176,140,0.2) 0%, transparent 70%)',
            bottom: '0px',
            left: '-50px',
            transform: `translate(${-parallaxX * 0.3
              }px, ${-parallaxY * 0.3}px)`,
            transition:
              'transform 0.6s ease-out',
            borderRadius:
              '30% 60% 70% 40% / 50% 60% 30% 60%',
          }}
        />

        <div
          className="absolute animate-float-slower"
          style={{
            width: '300px',
            height: '300px',
            background:
              'radial-gradient(circle, rgba(94,70,54,0.1) 0%, transparent 70%)',
            top: '40%',
            left: '40%',
            transform: `translate(${parallaxX * 0.2
              }px, ${parallaxY * 0.2}px)`,
            transition:
              'transform 0.7s ease-out',
          }}
        />
      </div>

      {/* Floating Card 1 */}
      <div
        className={`hidden sm:block absolute top-24 md:top-32 right-4 md:right-24 transition-all duration-1000 ${visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 -translate-y-8'
          }`}
        style={{
          transitionDelay: '0.8s',
        }}
      >
        <div
          className={`rounded-2xl p-4 animate-float ${dark
            ? 'bg-dark-card border border-dark-border'
            : 'bg-white/70 border border-warm-glow/30'
            }`}
          style={{
            backdropFilter:
              'blur(12px)',
            boxShadow:
              '0 8px 32px rgba(201,123,99,0.1)',
          }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="status-pulse w-2 h-2 rounded-full bg-green-400 block" />

            <span
              className="text-xs font-satoshi"
              style={{
                color:
                  'var(--muted)',
              }}
            >
              Available for work
            </span>
          </div>

          <p
            className="text-xs font-satoshi font-medium"
            style={{
              color:
                'var(--text-primary)',
            }}
          >
            Open to freelance &
            collab
          </p>
        </div>
      </div>

      {/* Floating Card 2 */}
      <div
        className={`hidden md:block absolute bottom-36 right-4 md:right-20 transition-all duration-1000 ${visible
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-8'
          }`}
        style={{
          transitionDelay: '1.1s',
        }}
      >
        <div
          className={`rounded-2xl p-3 animate-float-slow ${dark
            ? 'bg-dark-card border border-dark-border'
            : 'bg-warm-bg2/80 border border-warm-glow/20'
            }`}
          style={{
            backdropFilter:
              'blur(8px)',
          }}
        >
          <div className="flex items-center gap-2">
            <Sparkles
              size={14}
              className="text-warm-accent"
            />

            <span
              className="text-xs font-satoshi font-medium"
              style={{
                color:
                  'var(--muted)',
              }}
            >
              Creative × Technical
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full pt-24 pb-16">
        {/* Label */}
        <div
          className={`flex items-center gap-2 mb-8 transition-all duration-800 ${visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-6'
            }`}
          style={{
            transitionDelay: '0.1s',
          }}
        >
          <div
            className="h-px w-12"
            style={{
              background:
                'var(--accent)',
            }}
          />

          <span
            className="font-satoshi text-sm tracking-widest uppercase"
            style={{
              color:
                'var(--accent)',
            }}
          >
            Creative Technologist
          </span>
        </div>

        {/* Headline */}
        <h1
          className={`font-clash text-hero font-bold leading-none mb-6 transition-all duration-1000 ${visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-10'
            }`}
          style={{
            color:
              'var(--text-primary)',
            transitionDelay: '0.2s',
          }}
        >
          Crafting{' '}
          <span className="text-gradient">
            warm
          </span>

          <br />

          <span
            className="italic font-display"
            style={{
              color:
                'var(--accent)',
            }}
          >
            digital
          </span>{' '}
          experiences

          <br />

          <span className="relative">
            that feel

            <span className="text-gradient-warm">
              {' '}
              human.
            </span>
          </span>
        </h1>

        {/* Subtext */}
        <p
          className={`max-w-xl font-satoshi text-base md:text-lg leading-relaxed mb-12 transition-all duration-1000 ${visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}
          style={{
            color: 'var(--muted)',
            transitionDelay: '0.4s',
          }}
        >
          I build interfaces,
          systems, and tools where
          technology meets
          thoughtful design —
          bridging frontend craft,
          QA precision, and IT
          operations into one
          seamless experience.
        </p>

        {/* CTA */}
        <div
          className={`flex flex-wrap items-center gap-4 transition-all duration-1000 ${visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
            }`}
          style={{
            transitionDelay: '0.6s',
          }}
        >
          <button
            onClick={() =>
              document
                .querySelector(
                  '#projects'
                )
                ?.scrollIntoView({
                  behavior:
                    'smooth',
                })
            }
            className="group flex items-center gap-3 px-7 py-3.5 rounded-2xl font-satoshi font-semibold text-white transition-all duration-300"
            style={{
              background:
                'var(--accent)',
            }}
          >
            <span>
              View My Work
            </span>

            <ArrowDown
              size={16}
              className="group-hover:translate-y-1 transition-transform"
            />
          </button>

          <button
            onClick={() =>
              document
                .querySelector(
                  '#contact'
                )
                ?.scrollIntoView({
                  behavior:
                    'smooth',
                })
            }
            className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-satoshi font-semibold transition-all duration-300 border"
            style={{
              color:
                'var(--text-primary)',
              borderColor:
                'var(--accent)',
            }}
          >
            <Zap size={15} />

            <span>
              Let's Collaborate
            </span>
          </button>
        </div>

        {/* Marquee */}
        <div
          className={`mt-20 transition-all duration-1000 ${visible
            ? 'opacity-100'
            : 'opacity-0'
            }`}
          style={{
            transitionDelay: '0.9s',
          }}
        >
          <hr className="hr-deco mb-6" />

          <div className="relative overflow-hidden">
            {/* fade left */}
            <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-[var(--bg-primary)] to-transparent pointer-events-none" />

            {/* fade right */}
            <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-[var(--bg-primary)] to-transparent pointer-events-none" />

            <div className="flex marquee-loop gap-10 whitespace-nowrap">
              {[
                'Frontend Developer',
                'QA Engineer',
                'IT Operations',
                'Creative Technologist',
                'System Builder',
                'UI Designer',
                'Digital Craftsman',
                'Experience Builder',

                'Frontend Developer',
                'QA Engineer',
                'IT Operations',
                'Creative Technologist',
                'System Builder',
                'UI Designer',
                'Digital Craftsman',
                'Experience Builder',
              ].map(
                (
                  role,
                  i
                ) => (
                  <span
                    key={i}
                    className="flex items-center gap-3 text-sm md:text-base font-satoshi whitespace-nowrap"
                    style={{
                      color:
                        'var(--muted)',
                    }}
                  >
                    {role}

                    <span
                      style={{
                        color:
                          'var(--accent)',
                      }}
                    >
                      ·
                    </span>
                  </span>
                )
              )}
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div
          className="w-px h-12"
          style={{
            background:
              'linear-gradient(to bottom, var(--accent), transparent)',
          }}
        />

        <span
          className="text-xs font-satoshi tracking-widest uppercase"
          style={{
            color:
              'var(--muted)',
          }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}