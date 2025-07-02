// src/pages/HistoryPage.jsx

import { Link } from "react-router-dom";
import { ArrowLeft, GraduationCap, Briefcase } from "lucide-react";

// Data untuk pendidikan dan pengalaman (tidak ada perubahan)
const educationHistory = [
  {
    institution: "Universitas Satya Terra Bhinneka",
    period: "2024 - Sekarang",
    degree: "S1 Teknik Informatika",
  },
  {
    institution: "SMA Negeri 1 Tg.Morawa",
    period: "2021 - 2024",
    degree: "IPA (Ilmu Pengetahuan Alam)",
  },
  {
    institution: "SMP Al-ikhwan",
    period: "2018 - 2021",
    degree: "Sekolah Menengah Pertama",
  },
  {
    institution: "SD Muhammadiyah",
    period: "2012 - 2018",
    degree: "Sekolah Dasar",
  },
];

const experienceHistory = [
  {
    company: "Telkomsel",
    period: "Juni 2024 - Desember 2024",
    role: "Full-Stack Developer",
    description:
      "Berkontribusi dalam pengembangan antarmuka pengguna untuk aplikasi manajemen klien menggunakan React dan Tailwind CSS. Berkolaborasi dengan tim desain untuk menerjemahkan mockup Figma menjadi komponen yang fungsional dan responsif.",
  }
];

export const HistoryPage = () => {
  return (
    <div className="min-h-screen w-full pt-32 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-12">
          <ArrowLeft size={16} />
          Kembali ke Halaman Utama
        </Link>
        
        {/* Bagian Pendidikan */}
        <div className="mb-16">
          <div className="mb-12 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-left">Riwayat Pendidikan</h2>
          </div>
          
          {/* Kontainer untuk Timeline */}
          <div className="relative border-l-2 border-primary/30 ml-4 space-y-10">
            {educationHistory.map((edu, index) => (
              <div key={index} className="relative">
                {/* Titik pada Garis Timeline */}
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background"></div>
                
                {/* Kartu Konten */}
                <div className="ml-10">
                  <div className="border border-border rounded-lg p-4 bg-card/50">
                    <div className="flex justify-between items-start">
                      <div className="text-left">
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <h4 className="text-lg text-foreground/80">{edu.institution}</h4>
                      </div>
                      <p className="font-mono text-sm text-muted-foreground whitespace-nowrap pl-4">{edu.period}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bagian Pengalaman */}
        <div>
          <div className="mb-8 flex items-center gap-3">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-left">Pengalaman</h2>
          </div>

          <div className="space-y-4">
            {experienceHistory.map((exp, index) => (
              <div key={index} className="border border-border rounded-md p-4">
                <div className="text-left">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <h4 className="text-lg text-foreground/80">{exp.company}</h4>
                  <p className="text-muted-foreground mt-2">
                    {exp.description}
                  </p>
                </div>
                <p className="font-mono text-sm text-muted-foreground text-right">
                  {exp.period}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
