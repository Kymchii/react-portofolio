export const About = () => {
    return (
        <section id="tentang" className="container mx-auto px-6 py-20">
            <div className="flex flex-col items-center mb-12" data-aos='fade-down'>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Tentang Saya</h2>
                <div className="h-1 w-20 bg-cyan rounded"></div>
            </div>

            <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-8 max-w-4xl mx-auto shadow-xl backdrop-blur-sm relative overflow-hidden" data-aos='fade-up' data-aos-delay='200'>
                <div className="absolute top-0 left-0 w-full h-8 bg-slate-100 dark:bg-white/5 border-b border-slate-200 dark:border-white/10 flex items-center px-4 space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-xs font-mono text-slate-500">bio.md</span>
                </div>

                <div className="mt-8 font-mono text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    <p><span className="text-cyan">&gt;</span> <span className="text-purple-600 dark:text-purple-400">const </span>
                        developer = {'{'}</p>
                    <p className="ml-4"><span className="text-blue-500">nama</span>: <span
                        className="text-green-600 dark:text-green-400">"Wahyu"</span>,</p>
                    <p className="ml-4"><span className="text-blue-500">lokasi</span>: <span
                        className="text-green-600 dark:text-green-400">"Pontianak, Indonesia"</span>,</p>
                    <p className="ml-4"><span className="text-blue-500">minat</span>: <span
                        className="text-green-600 dark:text-green-400">"Web Developer"</span>,</p>
                    <p className="ml-4"><span className="text-blue-500">deskripsi</span>: <span
                        className="text-green-600 dark:text-green-400">"Saya adalah seorang web programmer dengan pengalaman lebih dari 2 tahun yang berdedikasi menghadirkan tampilan web yang bersih, responsif, dan menyenangkan digunakan dari baris kode pertama hingga produk yang tayang."</span></p>
                    <p>{'}'}</p>
                </div>
            </div>
        </section>
    )
}
