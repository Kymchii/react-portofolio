import { GrSend } from "react-icons/gr"
import { contacts } from "../../data/contacts"
import { AiOutlineSend } from "react-icons/ai"

export const Contact = () => {
    return (
        <section id="kontak" className="container mx-auto px-6 py-20 mb-10">
            <div className="bg-white dark:bg-darker border border-slate-200 dark:border-white/10 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none">
                </div>

                <div className="flex flex-col md:flex-row gap-12 relative z-10">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4" data-aos='fade-up'>Mari Berkolaborasi.</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-8" data-aos='fade-up' data-aos-delay='100'>Saya selalu terbuka untuk mendiskusikan proyek pengembangan web, ide startup, atau peluang kemitraan.</p>

                        <div className="space-y-4">
                            {
                                contacts.map((contact, index) => (
                                    <div className="flex items-center space-x-4" key={index} data-aos='zoom-in' data-aos-delay={contact.delay}>
                                        <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-cyan">
                                            <contact.icon />
                                        </div>
                                        <span className="font-mono text-sm">{contact.item}</span>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <form className="space-y-4" action='https://formsubmit.co/wwwahyu.200301@gmail.com' method='POST'>
                            <div data-aos='fade-up' data-aos-delay='500'>
                                <label className="block text-sm font-medium mb-1 text-slate-500">Nama</label>
                                <input type="text" required className="w-full px-4 py-3 bg-slate-50 dark:bg-navy border border-slate-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all text-slate-800 dark:text-white" placeholder="John Doe" name="name" />
                            </div>
                            <div data-aos='fade-up' data-aos-delay='700'>
                                <label className="block text-sm font-medium mb-1 text-slate-500">Email</label>
                                <input type="email" required className="w-full px-4 py-3 bg-slate-50 dark:bg-navy border border-slate-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all text-slate-800 dark:text-white" placeholder="john@example.com" name='email' />
                            </div>
                            <div data-aos='fade-up' data-aos-delay='900'>
                                <label className="block text-sm font-medium mb-1 text-slate-500">Pesan</label>
                                <textarea name="message" rows="4" required className="w-full px-4 py-3 bg-slate-50 dark:bg-navy border border-slate-200 dark:border-white/10 rounded-lg focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-all text-slate-800 dark:text-white resize-none" placeholder="Tuliskan ide luar biasa Anda di sini..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 bg-transparent border border-cyan text-cyan font-bold rounded-lg hover:bg-cyan hover:text-navy active:bg-cyan active:text-navy transition-all duration-300 neon-border flex justify-center items-center gap-2" data-aos='zoom-in' data-aos-delay='1100'>Kirim Pesan <AiOutlineSend className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
