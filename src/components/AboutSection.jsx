import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Senior Web Developer</h3>

            <p className="text-muted-foreground">
              Sebagai seorang developer yang berorientasi pada hasil, sayaAdd
              commentMore actions berspesialisasi dalam rekayasa (engineering)
              aplikasi web yang tangguh dan mudah diakses. Saya memiliki rekam
              jejak dalam mengoptimalkan performa, meningkatkan pengalaman
              pengguna, dan menerapkan praktik terbaik industri untuk memastikan
              setiap proyekAdd commentMore actions mencapai standar keunggulan
              tertinggi. Saya memimpin inovasi dengan menerapkan teknologi
              terdepan secara strategis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contact Me
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover transition-all duration-200 hover:ring-2 hover:ring-white/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Merekayasa aplikasi full-stack yang dinamis dan aman, dengan
                    fokus pada kecepatan, skalabilitas, dan kode yang dapat
                    dipelihara.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover transition-all duration-200 hover:ring-2 hover:ring-white/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Memenuhi kebutuhan pengguna yang kompleks menjadi alur
                    desain yang intuitif dan antarmuka yang menarik secara
                    visual
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover transition-all duration-200 hover:ring-2 hover:ring-white/30">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Mengelola siklus hidup proyek teknologi secara
                    end-to-end,Add commentMore actions memastikan pengiriman
                    tepat waktu dan efisien untuk visi proyek dari konsep awal
                    menjadi produk akhir yang sukses diluncurkan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
