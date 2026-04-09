import { experients } from "../../data/experients"

export const Experient = () => {
    return (
        <section id="pengalaman" className="container mx-auto px-6 py-20">
            <div className="flex flex-col items-center mb-16" data-aos='fade-down'>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Jejak Karir</h2>
                <div className="h-1 w-20 bg-cyan rounded"></div>
            </div>

            <div className="max-w-3xl mx-auto relative">
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-slate-300 dark:bg-white/10">
                </div>

                {
                    experients.map((experient, index) => (
                        <div className="relative flex flex-col md:flex-row items-center justify-between mb-12 w-full" key={index}>
                            {experient.align === 'left' ? (
                                <>
                                    {/* Content on the LEFT */}
                                    <div className="md:w-5/12 order-1 md:order-1 ml-12 md:ml-0 md:text-right pr-0 md:pr-8 w-full" data-aos='fade-up' data-aos-delay={experient.delay}>
                                        <h3 className="text-xl font-bold text-cyan">{experient.position}</h3>
                                        <h4 className="text-lg font-medium">{experient.company}</h4>
                                        <p className="text-slate-500 font-mono text-sm my-2">{experient.periods}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{experient.description}</p>
                                    </div>

                                    {/* BULLET */}
                                    <div className={`${experient.isActive === true ? 'bg-cyan shadow-[0_0_10px_#00D4FF]' : 'bg-slate-300 dark:bg-slate-600'} absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-white dark:border-navy z-10`}>
                                    </div>

                                    {/* Placeholder on the RIGHT */}
                                    <div className="md:w-5/12 order-2 md:order-3 w-full hidden md:block"></div>
                                </>
                            ) : (
                                <>
                                    {/* Placeholder on the LEFT */}
                                    <div className="md:w-5/12 order-1 md:order-1 w-full hidden md:block"></div>

                                    {/* BULLET */}
                                    <div className={`${experient.isActive === true ? 'bg-cyan shadow-[0_0_10px_#00D4FF]' : 'bg-slate-300 dark:bg-slate-600'} absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-white dark:border-navy z-10`}>
                                    </div>

                                    {/* Content on the RIGHT */}
                                    <div className="md:w-5/12 order-2 md:order-3 ml-12 md:ml-0 pl-0 md:pl-8 w-full" data-aos='fade-up' data-aos-delay={experient.delay}>
                                        <h3 className="text-xl font-bold text-cyan">{experient.position}</h3>
                                        <h4 className="text-lg font-medium">{experient.company}</h4>
                                        <p className="text-slate-500 font-mono text-sm my-2">{experient.periods}</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">{experient.description}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
