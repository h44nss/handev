import { useEffect, useRef, useState } from 'react';
import {
  Send,
  Github,
  Linkedin,
  MessageCircle,
  ArrowUpRight,
} from 'lucide-react';

const socials = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/h44nss',
    handle: '@handev',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohamad-burhan-b86401321/',
    handle: 'Han Dev',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    href: 'https://wa.me/6285123607698',
    handle: '+62 851-2360-7698',
  },
];

function useIntersect(
  ref: React.RefObject<Element | null>
) {
  useEffect(() => {
    const observer =
      new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting)
              e.target.classList.add(
                'visible'
              );
          }),
        { threshold: 0.1 }
      );

    const els =
      ref.current?.querySelectorAll(
        '.fade-up, .fade-in'
      );

    els?.forEach((el) =>
      observer.observe(el)
    );

    return () =>
      observer.disconnect();
  }, [ref]);
}

export default function Contact({
  dark,
}: {
  dark: boolean;
}) {
  const sectionRef =
    useRef<HTMLDivElement>(null);

  useIntersect(sectionRef);

  const [form, setForm] =
    useState({
      name: '',
      email: '',
      message: '',
    });

  const [sent, setSent] =
    useState(false);

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const message = `
Halo Hans 👋

Nama: ${form.name}
Email: ${form.email}

Pesan:
${form.message}
    `;

    const whatsappUrl = `https://wa.me/6285123607698?text=${encodeURIComponent(
      message
    )}`;

    window.open(
      whatsappUrl,
      '_blank'
    );

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 4000);

    setForm({
      name: '',
      email: '',
      message: '',
    });
  };

  const inputClass = `
    w-full rounded-2xl px-5 py-4
    font-satoshi text-sm
    outline-none
    transition-all duration-300
    focus:ring-2 focus:ring-warm-accent/40
    backdrop-blur-xl

    ${dark
      ? `
      bg-dark-card/80
      border border-dark-border
      text-white
      placeholder:text-white/40
      focus:border-dark-accent
    `
      : `
      bg-white/70
      border border-warm-glow/20
      text-warm-text
      placeholder:text-warm-muted
      focus:border-warm-accent
    `
    }
  `;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-28 px-6 md:px-12 lg:px-20 relative overflow-hidden"
      style={{
        background:
          'var(--bg-secondary)',
      }}
    >
      {/* Ambient Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(201,123,99,0.12) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4 fade-up">
            <div
              className="h-px w-16"
              style={{
                background:
                  'var(--accent)',
                opacity: 0.4,
              }}
            />

            <span
              className="font-satoshi text-xs tracking-widest uppercase"
              style={{
                color:
                  'var(--accent)',
              }}
            >
              Let&apos;s Talk
            </span>

            <div
              className="h-px w-16"
              style={{
                background:
                  'var(--accent)',
                opacity: 0.4,
              }}
            />
          </div>

          <h2
            className="font-clash text-section font-bold mb-4 fade-up delay-100"
            style={{
              color:
                'var(--text-primary)',
            }}
          >
            Let&apos;s build
            something
            <br />

            <span
              className="italic font-display"
              style={{
                color:
                  'var(--accent)',
              }}
            >
              worth remembering.
            </span>
          </h2>

          <p
            className="font-satoshi text-lg max-w-xl mx-auto leading-relaxed fade-up delay-200"
            style={{
              color:
                'var(--muted)',
            }}
          >
            Whether it&apos;s a
            new project, creative
            collaboration, or just
            a good conversation —
            my inbox is always
            open.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* FORM */}
          <div
            className={`rounded-3xl p-8 fade-up delay-200 ${dark
                ? 'bg-dark-card border border-dark-border'
                : 'bg-white/60 border border-warm-glow/20'
              }`}
            style={{
              backdropFilter:
                'blur(16px)',
            }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background:
                      'rgba(201,123,99,0.15)',
                  }}
                >
                  <Send
                    size={24}
                    style={{
                      color:
                        'var(--accent)',
                    }}
                  />
                </div>

                <h3
                  className="font-clash font-bold text-2xl mb-2"
                  style={{
                    color:
                      'var(--text-primary)',
                  }}
                >
                  Redirecting to
                  WhatsApp
                </h3>

                <p
                  className="font-satoshi"
                  style={{
                    color:
                      'var(--muted)',
                  }}
                >
                  Opening chat
                  window...
                </p>
              </div>
            ) : (
              <form
                onSubmit={
                  handleSubmit
                }
                className="space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    className="font-satoshi text-xs tracking-widest uppercase mb-2 block"
                    style={{
                      color:
                        'var(--accent)',
                    }}
                  >
                    Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={
                      inputClass
                    }
                    value={form.name}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        name: e
                          .target
                          .value,
                      })
                    }
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    className="font-satoshi text-xs tracking-widest uppercase mb-2 block"
                    style={{
                      color:
                        'var(--accent)',
                    }}
                  >
                    Email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className={
                      inputClass
                    }
                    value={form.email}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        email:
                          e.target
                            .value,
                      })
                    }
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    className="font-satoshi text-xs tracking-widest uppercase mb-2 block"
                    style={{
                      color:
                        'var(--accent)',
                    }}
                  >
                    Message
                  </label>

                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, idea, or just say hi..."
                    className={`${inputClass} resize-none`}
                    value={
                      form.message
                    }
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message:
                          e.target
                            .value,
                      })
                    }
                  />
                </div>

                {/* Button */}
                <button
                  id="contact-submit"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-satoshi font-semibold text-white transition-all duration-300 hover:scale-[1.01] magnetic"
                  style={{
                    background:
                      'var(--accent)',
                  }}
                  onMouseEnter={(
                    e
                  ) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.background =
                      'var(--brown)';
                  }}
                  onMouseLeave={(
                    e
                  ) => {
                    (
                      e.currentTarget as HTMLButtonElement
                    ).style.background =
                      'var(--accent)';
                  }}
                >
                  <MessageCircle
                    size={17}
                  />

                  Send to WhatsApp
                </button>
              </form>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8 fade-up delay-300">
            {/* Socials */}
            <div>
              <h3
                className="font-clash font-semibold text-xl mb-6"
                style={{
                  color:
                    'var(--text-primary)',
                }}
              >
                Find me here
              </h3>

              <div className="space-y-3">
                {socials.map(
                  ({
                    icon: Icon,
                    label,
                    href,
                    handle,
                  }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-between p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 ${dark
                          ? 'bg-dark-card border border-dark-border'
                          : 'bg-white/50 border border-warm-glow/15'
                        }`}
                      style={{
                        backdropFilter:
                          'blur(10px)',
                        textDecoration:
                          'none',
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            background:
                              'rgba(201,123,99,0.12)',
                          }}
                        >
                          <Icon
                            size={
                              17
                            }
                            style={{
                              color:
                                'var(--accent)',
                            }}
                          />
                        </div>

                        <div>
                          <div
                            className="font-satoshi text-sm font-semibold"
                            style={{
                              color:
                                'var(--text-primary)',
                            }}
                          >
                            {
                              label
                            }
                          </div>

                          <div
                            className="font-satoshi text-xs"
                            style={{
                              color:
                                'var(--muted)',
                            }}
                          >
                            {
                              handle
                            }
                          </div>
                        </div>
                      </div>

                      <ArrowUpRight
                        size={15}
                        className="opacity-40 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                        style={{
                          color:
                            'var(--accent)',
                        }}
                      />
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Response Card */}
            <div
              className={`rounded-3xl p-6 ${dark
                  ? 'bg-dark-card border border-dark-border'
                  : 'bg-white/50 border border-warm-glow/15'
                }`}
              style={{
                backdropFilter:
                  'blur(10px)',
              }}
            >
              <p
                className="font-satoshi text-xs tracking-widest uppercase mb-3"
                style={{
                  color:
                    'var(--accent)',
                }}
              >
                Response Time
              </p>

              <p
                className="font-clash font-semibold text-lg mb-1"
                style={{
                  color:
                    'var(--text-primary)',
                }}
              >
                Usually within
                24 hours
              </p>

              <p
                className="font-satoshi text-sm leading-relaxed"
                style={{
                  color:
                    'var(--muted)',
                }}
              >
                Based in
                Indonesia · UTC+7
                · Available for
                freelance and
                remote
                collaborations
                worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}