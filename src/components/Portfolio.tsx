import { ExternalLink, Calendar, Users, CheckCircle } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Sistem Input Data Pajak',
      category: 'Web App',
      description: 'Sistem Input Data Pajak, Sudah lenkap dengan data laporan yang bisa di ekspor.',
      image: 'https://g.top4top.io/p_3654s4u6k1.jpeg',
      stats: [
        { icon: Users, label: '10' } 
        // { icon: Calendar, label: '3 Hari Event' },
        // { icon: CheckCircle, label: '99.8% Uptime' }
      ],
      tags: ['React', 'Node.js', 'PostgreSQL']
    },
    {
      title: 'Website Booking & Jastip Platform',
      category: 'Web App',
      description: 'Penyediaan website profil perusahaan dengan fitur interaktif dan SEO optimasi.',
      image: 'https://i.top4top.io/p_3654gyg2k1.png',
       stats: [
      //   { icon: Users, label: '15 Staff IT' },
      //   { icon: Calendar, label: '2 Hari Event' },
      //   { icon: CheckCircle, label: 'Hybrid Event' }
     ],
      tags: ['React', 'Tailwind CSS', 'SEO']
    },
    {
      title: 'Website Booking & Jastip Platform',
      category: 'Web App',
      description: 'Platform registrasi dan ticketing untuk festival musik dengan sistem tier pricing dan early bird promotion.',
      image: 'https://g.top4top.io/p_3654cemqc1.png',
      stats: [
        // { icon: Users, label: '5,000+ Tiket' },
        // { icon: Calendar, label: '1 Hari Event' },
        // { icon: CheckCircle, label: 'Sold Out' }
      ],
      tags: ['Laravel', 'PHP', 'MySQL']
    },
    {
      title: 'Catalog Food',
      category: 'Web App',
      description: 'Sistem katalog makanan untuk umkm dengan fitur manajemen menu dan pemesanan online.',
      image: 'https://d.top4top.io/p_3654s0pe61.png',
      stats: [
        // { icon: Users, label: '1,500 Peserta' },
        // { icon: Calendar, label: '2 Hari Event' },
        // { icon: CheckCircle, label: '50+ Speakers' }
      ],
      tags: ['laravel', 'PHP', 'MySQL']
    },
    {
      title: 'Lotery ',
      category: 'Web App',
      description: 'Sistem lotere online untuk event ',
      image: 'https://d.top4top.io/p_36547pe9w1.png',
      stats: [
        // { icon: Users, label: '800 Guests' },
        // { icon: Calendar, label: '1 Hari Event' },
        // { icon: CheckCircle, label: 'RSVP System' }
      ],
      tags: ['laravel', 'PHP', 'MySQL']
    },
    {
      title: 'Book Catalog',
      category: 'Website',
      description: 'Mahasiswa membuat website katalog buku sederhana sebagai proyek akhir kuliah.',
      image: 'https://e.top4top.io/p_36543abcc2.png',
      stats: [
        // { icon: Users, label: '20 Staff' },
        // { icon: Calendar, label: '3 Hari Event' },
        // { icon: CheckCircle, label: '100k Viewers' }
      ],
      tags: ['laravel', 'PHP', 'MySQL'  ]
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
