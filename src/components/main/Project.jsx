import { LuExternalLink } from "react-icons/lu"
import { projects } from "../../data/projects"

export const Project = () => {
    return (
        <section id="portofolio" className="container mx-auto px-6 py-20">
            <div className="flex flex-col items-center mb-12" data-aos='fade-down'>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Karya Unggulan</h2>
                <div className="h-1 w-20 bg-cyan rounded"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) =>
                    <div className="bg-white dark:bg-darker border border-slate-200 dark:border-white/10 rounded-xl overflow-hidden hover:neon-border transition-all duration-300 group flex flex-col" key={index} data-aos='zoom-in' data-aos-delay={project.delay}>
                        <div className="h-48 bg-slate-200 dark:bg-navy relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-cyan/20 flex items-center justify-center group-hover:scale-110 group-active:scale-110 transition-transform duration-500">
                                <img src={project.image} alt={project.title} />
                            </div>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold">{project.title}</h3>
                                <a href={project.href} target="_blank" className="text-slate-400 hover:text-cyan active:text-cyan"><LuExternalLink className="w-5 h-5" /></a>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">{project.desc}</p>
                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech, index) =>
                                    <span key={index} className="text-xs font-mono px-2 py-1 bg-slate-100 dark:bg-white/5 text-cyan rounded">{tech}</span>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="mt-12 text-center" data-aos='fade-up' data-aos-delay='600'>
                <a href="https://github.com/Kymchii" className="inline-flex items-center text-cyan hover:text-blue-500 font-mono transition-colors" target="_blank">
                    Lihat repositori lainnya di GitHub <i data-lucide="arrow-right" className="w-4 h-4 ml-2"></i>
                </a>
            </div>
        </section >
    )
}
