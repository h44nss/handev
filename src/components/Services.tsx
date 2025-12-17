import { Globe, Users, Wrench, Code } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Sistem Registrasi Event',
      description: 'Pembuatan website dan sistem registrasi event custom dengan fitur lengkap: pendaftaran online, pembayaran digital, QR code check-in, dashboard analytics real-time, dan integrasi dengan berbagai payment gateway.',
      features: [
        'Custom design sesuai branding',
        'Dashboard admin lengkap',
        'Payment gateway integration',
        'QR code & e-ticket',
        'Email automation',
        'Data analytics & reporting'
      ],
      color: 'emerald'
    },
    {
      icon: Users,
      title: 'Freelancer Crew IT untuk Event',
      description: 'Tim IT profesional siap membantu event Anda: setup networking, troubleshooting teknis, live streaming support, digital signage, dan technical support on-site untuk memastikan kelancaran event dari sisi teknologi.',
      features: [
        'Network & infrastructure setup',
        'Live streaming support',
        'Technical troubleshooting',
        'Digital signage management',
        'Audio visual support',
        'On-site IT coordination'
      ],
      color: 'blue'
    },
    {
      icon: Wrench,
      title: 'Crew Event Profesional',
      description: 'Crew event berpengalaman untuk berbagai kebutuhan: registration desk, ushering, event coordination, crowd management, dan support staff yang terlatih untuk memastikan event berjalan lancar dan profesional.',
      features: [
        'Registration desk staff',
        'Event usher & coordinator',
        'Crowd management',
        'Guest assistance',
        'Protocol staff',
        'Event support team'
      ],
      color: 'orange'
    },
    {
      icon: Code,
      title: 'Pembuatan Website Lainnya',
      description: 'Jasa pembuatan website custom untuk berbagai kebutuhan bisnis: e-commerce, corporate website, blog, portfolio, aplikasi web, dan integrasi sistem. Desain modern, responsive, dan SEO-friendly.',
      features: [
        'E-commerce solutions',
        'Corporate website',
        'Web application',
        'Responsive design',
        'SEO optimization',
        'Maintenance & support'
      ],
      color: 'rose'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: {
        bg: 'bg-emerald-50',
        icon: 'bg-emerald-400',
        text: 'text-emerald-400',
        border: 'border-emerald-200',
        hover: 'hover:border-emerald-400'
      },
      blue: {
        bg: 'bg-blue-50',
        icon: 'bg-blue-400',
        text: 'text-blue-400',
        border: 'border-blue-200',
        hover: 'hover:border-blue-400'
      },
      orange: {
        bg: 'bg-orange-50',
        icon: 'bg-orange-400',
        text: 'text-orange-400',
        border: 'border-orange-200',
        hover: 'hover:border-orange-400'
      },
      rose: {
        bg: 'bg-rose-50',
        icon: 'bg-rose-400',
        text: 'text-rose-400',
        border: 'border-rose-200',
        hover: 'hover:border-rose-400'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="services" className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-400/10 border border-emerald-400/30 rounded-full">
            <span className="text-emerald-600 font-medium">Layanan Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Solusi Digital & Event Profesional
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dari sistem registrasi event, website custom, hingga tim profesional - kami siap membantu kesuksesan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const colorClasses = getColorClasses(service.color);
            const Icon = service.icon;

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border-2 ${colorClasses.border} ${colorClasses.hover} transition-all hover:shadow-xl group`}
              >
                <div className={`w-16 h-16 ${colorClasses.icon} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <div className="font-semibold text-slate-900 mb-3">Fitur & Layanan:</div>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className={`w-1.5 h-1.5 ${colorClasses.icon} rounded-full mt-2`}></div>
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Butuh Kombinasi Layanan?</h3>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Kami menyediakan paket bundling yang lebih hemat untuk kombinasi layanan. Hubungi kami untuk mendapatkan penawaran khusus!
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-emerald-400 text-slate-900 rounded-lg font-semibold hover:bg-emerald-300 transition-all transform hover:scale-105 shadow-lg"
          >
            Diskusi Paket Custom
          </button>
        </div>
      </div>
    </section>
  );
}
