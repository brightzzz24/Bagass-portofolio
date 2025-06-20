// 1. Impor ikon baru yang akan kita gunakan
import {
  ArrowRight,
  ExternalLink,
  Github,
  Code,
  Atom,
  Wind,
  Database,
  FileJson2,
  BarChart3,
  RectangleEllipsis,
  Server,
  CreditCard,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

// 2. Komponen baru untuk memilih ikon berdasarkan nama tag
const TechIcon = ({ tag }) => {
  const iconSize = 14; // Ukuran ikon
  const iconClassName = "text-primary";

  switch (tag.toLowerCase()) {
    case "react":
      return <Atom size={iconSize} className={iconClassName} />;
    case "tailwindcss":
      return <Wind size={iconSize} className={iconClassName} />;
    case "supabase":
      return <Database size={iconSize} className={iconClassName} />;
    case "typescript":
      return <FileJson2 size={iconSize} className={iconClassName} />;
    case "d3.js":
      return <BarChart3 size={iconSize} className={iconClassName} />;
    case "next.js":
      return <RectangleEllipsis size={iconSize} className={iconClassName} />;
    case "node.js":
      return <Server size={iconSize} className={iconClassName} />;
    case "stripe":
      return <CreditCard size={iconSize} className={iconClassName} />;
    default:
      return <Code size={iconSize} className={iconClassName} />;
  }
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Project <span className="text-primary"> Showcase </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Beberapa proyek terbaru saya. Setiap proyek dibuat dengan cermat
          dengan memperhatikan detail, kinerja.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-md card-hover transition-all duration-200 hover:ring-2 hover:ring-white/30"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    // 3. Panggil komponen TechIcon di sini
                    <span
                      key={tag}
                      className="flex items-center gap-1.5 px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      <TechIcon tag={tag} />
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/brightzzz24"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};