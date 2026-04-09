// icons
import { FaArrowDownLong } from "react-icons/fa6";

export const Hero = () => {
    return (
        <section id="beranda" className="container mx-auto px-6 py-20 min-h-[80vh] flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-6 z-10 animate__animated animate__fadeInDown animate__delay-3s">
                <p className="text-cyan font-mono text-lg">System.out.println("Halo Dunia!");</p>
                <h1 className="text-5xl md:text-7xl font-bold leading-tight"> Saya <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan to-blue-500">Wahyu</span><br />
                    <div className="inline-block mt-2">
                        <span className="typing-effect text-3xl md:text-5xl font-mono text-slate-700 dark:text-slate-300 block">Web Programmer</span>
                    </div>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg max-w-lg leading-relaxed">
                    Membangun halaman dan aplikasi web dengan kode yang rapi, tampilan yang tajam, dan pengalaman yang terasa mulus dari klik pertama.
                </p>
                <div className="flex space-x-4 pt-4">
                    <a href="#portofolio" className="px-8 py-3 bg-cyan text-navy font-bold rounded-lg hover:bg-cyan/90 active:bg-cyan/90 transition-all neon-border inline-flex items-center gap-2">
                        Lihat Karya <FaArrowDownLong />
                    </a>
                    <a href="../../../docs/CV-WAHYU.pdf" download='CV-WAHYU.pdf' className="px-8 py-3 border border-slate-300 dark:border-white/20 rounded-lg hover:border-cyan hover:text-cyan dark:hover:border-cyan active:border-cyan active:text-cyan dark:active:border-cyan transition-all">
                        Unduh CV
                    </a>
                </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center animate__animated animate__fadeInUp animate__delay-3s">
                <div className="relative w-72 h-72 md:w-96 md:h-96">
                    <img src="../../../photos/hero-image.PNG" alt="Foto Profil" className="rounded-full object-contain w-full h-full border-4 border-cyan/50 shadow-lg neon-border" />
                </div>
            </div>
        </section>
    )
}
