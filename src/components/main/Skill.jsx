import { skills } from "../../data/skills"

export const Skill = () => {
    return (
        <section id="keahlian" className="container mx-auto px-6 py-20">
            <div className="flex flex-col items-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-2" data-aos='fade-down'>Tech Stack</h2>
                <div className="h-1 w-20 bg-cyan rounded" data-aos='fade-down'></div>
                <p className="mt-4 text-slate-500 text-center max-w-2xl" data-aos='fade-up' data-aos-delay='200'>Teknologi dan alat yang saya gunakan untuk membawa ide menjadi kenyataan.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
                {
                    skills.map((skill, index) => (
                        <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-navy border border-slate-200 dark:border-white/10 rounded-xl hover:border-cyan active:border-cyan dark:hover:border-cyan hover:-translate-y-1 transition-all duration-300 group" key={index} data-aos='zoom-in' data-aos-delay={skill.delay}>
                            <i className="text-slate-400 group-hover:text-cyan group-active:text-cyan transition-colors mb-3">
                                <skill.icon size={25} />
                            </i>
                            <span className="font-mono text-sm font-semibold">{skill.tech}</span>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
