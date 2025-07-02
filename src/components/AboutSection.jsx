import { Briefcase, Code, User } from "lucide-react";
import { Link } from "react-router-dom";

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
            <h3 className="text-2xl font-semibold">Seorang Web Developer</h3>

            <p className="text-muted-foreground">
              Saya mahasiswa informatika dari universitas satya terra bhinneka,
              saya pengembang web yang cukup ahli di bidangnya. saya juga
              memiliki hobby yaitu bermain game agar tidak terlalu stress karena
              codingan yang berwana merah"ERROR"
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Contact Me
              </a>

              <Link
                to="/history"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-color duration-300"
              >
                pendidikan dan pengalaman
              </Link>
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
                    Menciptakan pengalaman web yang mulus dan responsif di semua
                    perangkat, dengan mengimplementasikan desain yang presisi
                    menggunakan framework modern.
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
                    Memastikan setiap interaksi pengguna terasa mudah dan alami
                    melalui desain UI/UX yang terencana dengan baik.
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
                    Merekayasa aplikasi web yang responsif dan berperforma
                    tinggi dengan memanfaatkan kekuatan framework modern.
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
