import { ExternalLink, Calendar, Users, CheckCircle } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Tech Conference 2024',
      category: 'Sistem Registrasi',
      description: 'Sistem registrasi online untuk konferensi teknologi dengan 2000+ peserta, integrasi payment gateway, dan QR code check-in.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { icon: Users, label: '2,000+ Peserta' },
        { icon: Calendar, label: '3 Hari Event' },
        { icon: CheckCircle, label: '99.8% Uptime' }
      ],
      tags: ['Web App', 'Payment Gateway', 'QR System']
    },
    {
      title: 'Corporate Annual Meeting',
      category: 'IT Support & Crew',
      description: 'Penyediaan crew IT dan event staff untuk pertemuan tahunan perusahaan multinasional dengan setup hybrid streaming.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { icon: Users, label: '15 Staff IT' },
        { icon: Calendar, label: '2 Hari Event' },
        { icon: CheckCircle, label: 'Hybrid Event' }
      ],
      tags: ['IT Support', 'Live Streaming', 'Event Crew']
    },
    {
      title: 'Music Festival Registration',
      category: 'Sistem Registrasi',
      description: 'Platform registrasi dan ticketing untuk festival musik dengan sistem tier pricing dan early bird promotion.',
      image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { icon: Users, label: '5,000+ Tiket' },
        { icon: Calendar, label: '1 Hari Event' },
        { icon: CheckCircle, label: 'Sold Out' }
      ],
      tags: ['E-Ticket', 'Tier Pricing', 'Mobile App']
    },
    {
      title: 'Startup Summit 2024',
      category: 'Full Package',
      description: 'Paket lengkap: sistem registrasi, crew IT on-site, dan event staff untuk summit startup dengan 50+ speakers.',
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { icon: Users, label: '1,500 Peserta' },
        { icon: Calendar, label: '2 Hari Event' },
        { icon: CheckCircle, label: '50+ Speakers' }
      ],
      tags: ['Full Service', 'Dashboard', 'Staff Management']
    },
    {
      title: 'Wedding Expo Registration',
      category: 'Sistem Registrasi',
      description: 'Sistem RSVP dan guest management untuk pameran pernikahan dengan fitur seating arrangement digital.',
      image: 'https://images.pexels.com/photos/2306203/pexels-photo-2306203.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { icon: Users, label: '800 Guests' },
        { icon: Calendar, label: '1 Hari Event' },
        { icon: CheckCircle, label: 'RSVP System' }
      ],
      tags: ['RSVP', 'Seating', 'Guest List']
    },
    {
      title: 'E-Sports Tournament',
      category: 'IT Support & Crew',
      description: 'Tim IT dan crew untuk tournament e-sports dengan setup streaming, network infrastructure, dan technical support.',
      image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=800',
      stats: [
        { icon: Users, label: '20 Staff' },
        { icon: Calendar, label: '3 Hari Event' },
        { icon: CheckCircle, label: '100k Viewers' }
      ],
      tags: ['Network Setup', 'Streaming', 'Gaming']
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-emerald-400/10 border border-emerald-400/30 rounded-full">
            <span className="text-emerald-600 font-medium">Portfolio Kami</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Event Yang Telah Kami Sukseskan
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dipercaya oleh berbagai perusahaan dan organizer untuk menghadirkan pengalaman event yang seamless
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-emerald-400 transition-all hover:shadow-2xl"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-900">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-2 mb-4">
                  {project.stats.map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-slate-600">
                        <Icon className="w-4 h-4 text-emerald-400" />
                        <span>{stat.label}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-slate-600 hover:text-emerald-600 cursor-pointer transition-colors group">
            <span className="font-semibold">Lihat Semua Project</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  );
}
