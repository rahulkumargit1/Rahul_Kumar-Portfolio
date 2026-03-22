import { WebGLShader } from "@/components/ui/web-gl-shader"
import { LiquidButton } from "@/components/ui/custom-buttons"
import { Github, Linkedin, Mail, Code2, Database, BrainCircuit, TerminalSquare, ExternalLink } from "lucide-react"

export default function Portfolio() {
  return (
    <main className="relative min-h-screen w-full font-sans text-white selection:bg-green-500/30 selection:text-green-200">
      <WebGLShader />

      {/* Ultra-Sleek Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/[0.02] bg-black/10 backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <span className="text-xl sm:text-2xl font-bold font-heading tracking-tight text-white/90">
            Rahul Kumar<span className="text-green-500">.</span>
          </span>
          <div className="flex items-center gap-6 text-white/50">
            <a href="https://github.com/rahulkumargit1" target="_blank" rel="noreferrer" className="hover:text-green-400 hover:scale-110 transition-all duration-300">
              <Github className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a href="https://linkedin.com/in/rahul-kumar" target="_blank" rel="noreferrer" className="hover:text-green-400 hover:scale-110 transition-all duration-300">
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a href="mailto:123rgatty@gmail.com" className="hover:text-green-400 hover:scale-110 transition-all duration-300">
              <Mail className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 pt-40 pb-24">
        
        {/* Floating Premium Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[60vh] text-center mb-32">
          
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-green-500/20 bg-green-500/[0.03] mb-10 backdrop-blur-xl shadow-[0_0_30px_rgba(34,197,94,0.1)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <p className="text-xs sm:text-sm text-green-400 font-medium tracking-widest uppercase">Available for Projects</p>
          </div>

          <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-br from-white via-white/90 to-white/20 pb-2 pr-2">
            Rahul Kumar
          </h1>
          
          <p className="text-white/50 max-w-2xl text-lg sm:text-xl font-light leading-relaxed mb-12 px-4">
            Data Science & Full-Stack Developer leveraging machine learning, computer vision, and scalable web technologies to solve complex problems.
          </p>
          
          <a href="#projects" className="group">
            <LiquidButton className="border border-white/[0.05] shadow-[0_8px_32px_rgba(255,255,255,0.05)] rounded-full font-medium text-sm sm:text-base px-10 py-6 tracking-wide text-white/80 hover:text-white">
              Explore My Work
            </LiquidButton>
          </a>
        </section>

        {/* Premium Glass Cards (About & Skills) */}
        <section className="grid md:grid-cols-2 gap-8 mb-32">
          
          {/* About Card */}
          <div className="flex flex-col p-10 lg:p-12 border border-white/[0.03] bg-white/[0.01] shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] backdrop-blur-2xl rounded-[2rem] hover:bg-white/[0.02] transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] group-hover:border-green-500/30 transition-colors">
                <TerminalSquare className="text-green-400 w-6 h-6 stroke-[1.5]"/> 
              </div>
              <h2 className="text-2xl font-bold font-heading tracking-tight text-white/90">The Developer</h2>
            </div>
            <p className="text-white/60 font-light leading-relaxed text-base flex-grow">
              I am a Computer Science graduate from Shree Devi Institute of Technology. I specialize in building minimal, highly functional systems—from conceptualizing offline UPI architectures and encrypted messaging apps like Krypt, to training AI models. Beyond the screen, my focus shifts to maintaining peak physical condition through 10k runs, gym workouts, and managing a high-protein diet, all while keeping up with four cats and a dog.
            </p>
          </div>

          {/* Skills Card */}
          <div className="flex flex-col p-10 lg:p-12 border border-white/[0.03] bg-white/[0.01] shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] backdrop-blur-2xl rounded-[2rem] hover:bg-white/[0.02] transition-all duration-500 group">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] group-hover:border-green-500/30 transition-colors">
                <Code2 className="text-green-400 w-6 h-6 stroke-[1.5]"/> 
              </div>
              <h2 className="text-2xl font-bold font-heading tracking-tight text-white/90">Core Arsenal</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {['Python', 'Java', 'React', 'Node.js', 'TensorFlow', 'Scikit-learn', 'YOLO', 'AWS S3', 'SQL', 'Flask', 'Pandas', 'C++'].map((skill) => (
                <span key={skill} className="px-4 py-2 text-sm font-light tracking-wide border border-white/[0.05] rounded-xl bg-white/[0.02] text-white/70 hover:bg-white/[0.05] hover:text-white transition-all cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </section>

        {/* Refined Projects Grid */}
        <section id="projects" className="mb-32 scroll-mt-32">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <BrainCircuit className="text-green-400 w-7 h-7 stroke-[1.5]"/>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-white/90">Featured Projects</h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            
            {[
              {
                title: "Sync Minimal App",
                desc: "A beautifully designed, minimalist high-performance music streaming application built for a seamless audio experience.",
                tags: ["Dart", "Flutter", "Mobile"],
                link: "https://github.com/rahulkumargit1/Sync-Minimal-App"
              },
              {
                title: "PhotoVault",
                desc: "A secure, private, and fully self-hosted personal photo database web application with premium editorial design.",
                tags: ["JavaScript", "React", "Node.js"],
                link: "https://github.com/rahulkumargit1/photovault"
              },
              {
                title: "Krypt",
                desc: "A highly secure mobile application suite emphasizing encrypted messaging and offline architectural foundations.",
                tags: ["Kotlin", "Android", "Security"],
                link: "https://github.com/rahulkumargit1/Krypt"
              },
              {
                title: "Crypto Analysis Suite",
                desc: "Flask-based web application utilizing machine learning for price prediction and real-time technical indicators.",
                tags: ["Flask", "Machine Learning"],
                link: "https://github.com/rahulkumargit1"
              }
            ].map((project, idx) => (
              <a key={idx} href={project.link} target="_blank" rel="noreferrer" className="group flex flex-col justify-between p-8 sm:p-10 border border-white/[0.03] bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 backdrop-blur-2xl rounded-[2rem] hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:border-green-500/20">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold font-heading tracking-tight text-white/90 group-hover:text-white transition-colors">{project.title}</h3>
                    <ExternalLink className="w-5 h-5 text-white/20 group-hover:text-green-400 transition-colors opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 duration-300" />
                  </div>
                  <p className="text-white/50 font-light text-base leading-relaxed mb-8">{project.desc}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-transparent border border-white/10 px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide text-white/40 group-hover:text-white/70 group-hover:border-white/20 transition-all">{tag}</span>
                  ))}
                </div>
              </a>
            ))}

          </div>
        </section>

        {/* Elegant Experience Timeline */}
        <section className="max-w-4xl">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
              <Database className="text-green-400 w-7 h-7 stroke-[1.5]"/>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading tracking-tight text-white/90">Experience</h2>
          </div>
          
          <div className="space-y-12 border-l border-white/[0.05] ml-5 pl-10 py-2">
            
            <div className="relative group">
              <div className="absolute w-3 h-3 bg-black border-2 border-green-500 rounded-full -left-[47px] top-2 shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300 group-hover:scale-150 group-hover:shadow-[0_0_20px_rgba(34,197,94,0.8)]"></div>
              <h3 className="text-2xl font-bold font-heading tracking-tight text-white/90 mb-2">Cloud App Developer Intern</h3>
              <p className="text-green-400 text-base font-medium mb-4 tracking-wide">Rooman Technologies (IBM) <span className="text-white/30 ml-3 font-light tracking-normal">• Dec 2024 - Present</span></p>
              <p className="text-white/50 text-base font-light leading-relaxed max-w-2xl">Designing and deploying scalable, secure web hosting solutions on IBM Cloud. Gaining robust experiential learning in cloud infrastructure and scalable application delivery.</p>
            </div>

            <div className="relative group">
              <div className="absolute w-2 h-2 bg-white/20 rounded-full -left-[45px] top-3 transition-all duration-300 group-hover:scale-150 group-hover:bg-white/50"></div>
              <h3 className="text-2xl font-bold font-heading tracking-tight text-white/70 group-hover:text-white/90 transition-colors mb-2">Data Science Intern</h3>
              <p className="text-white/60 text-base font-medium mb-4 tracking-wide">Codelab Systems <span className="text-white/30 ml-3 font-light tracking-normal">• Oct 2023 - Nov 2023</span></p>
              <p className="text-white/40 text-base font-light leading-relaxed max-w-2xl group-hover:text-white/50 transition-colors">Applied statistical analysis and visualization techniques to derive data-driven insights for real-world predictive modeling and decision-making processes.</p>
            </div>

            <div className="relative group">
              <div className="absolute w-2 h-2 bg-white/20 rounded-full -left-[45px] top-3 transition-all duration-300 group-hover:scale-150 group-hover:bg-white/50"></div>
              <h3 className="text-2xl font-bold font-heading tracking-tight text-white/70 group-hover:text-white/90 transition-colors mb-2">Java Development Intern</h3>
              <p className="text-white/60 text-base font-medium mb-4 tracking-wide">Accolade Tech Solutions <span className="text-white/30 ml-3 font-light tracking-normal">• Oct 2022 - Nov 2022</span></p>
              <p className="text-white/40 text-base font-light leading-relaxed max-w-2xl group-hover:text-white/50 transition-colors">Developed foundational proficiency in core and advanced Java applications through collaborative, team-based software development life cycles.</p>
            </div>

          </div>
        </section>

      </div>
    </main>
  )
}