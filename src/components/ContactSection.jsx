import { contact } from "../data"

export const ContactSection = () => {
    return (
        <div id="contact" className="contact-section px-6 grid grid-cols-1 sm:px-12 lg:px-24 pb-6 sm:pb-12 lg:pb-24 pt-20">
            <div className="w-fit flex flex-col gap-1.5 items-center justify-self-center">
                <h1 className="text-xl poppins-semibold" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">KONTAK</h1>
                <div className="w-full h-1 bg-stone-50/50 flex justify-center items-center rounded-full"><div className="rounded-full w-1/3 h-1.5 bg-rose-600"></div></div>
                <p className="text-sm text-gray-50/50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dengan saya.</p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="bg-gray-900/35 p-6 lg:p-12 rounded-md flex flex-col gap-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                    {contact.map((c) => (
                        <div key={c.id} className="flex items-center gap-3">
                            <div className="bg-slate-800 p-3 rounded-full">
                                {<c.icon />}
                            </div>
                            <div>
                                <h2 className="text-base">{c.name}</h2>
                                <p className="text-sm text-slate-50/25 poppins-light">{c.desc}</p>
                            </div>
                        </div>
                    ))}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d854.8973355449672!2d109.29720138487285!3d-0.00451096954014583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1768684677465!5m2!1sid!2sid" width="600" height="450" className="w-full h-1/2 mt-3"></iframe>
                </div>
                <form action="https://formsubmit.co/wwwahyu.march@gmail.com" method="POST" className="bg-gray-900/35 p-6 lg:p-12 rounded-md flex flex-col gap-6" autoComplete="on" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900" data-aos-once="true">
                    <div className="flex flex-col gap-1.5 focus-within:font-semibold">
                        <label htmlFor="name" className="transition-all text-sm">Nama Lengkap</label>
                        <input type="text" id="name" name="name" placeholder="Masukkan nama lengkap..." className="ring-1 px-2 py-2 rounded-sm ring-stone-50/50 focus:ring-2 focus:ring-rose-600 focus:outline-none transition-all placeholder-stone-50/25 placeholder:text-xs placeholder:font-thin text-xs poppins-light" />
                    </div>
                    <div className="flex flex-col gap-1.5 focus-within:font-semibold">
                        <label htmlFor="email" className="transition-all text-sm">Email</label>
                        <input type="email" id="email" name="email" placeholder="Masukkan email..." className="ring-1 px-2 py-2 rounded-sm ring-stone-50/50 focus:ring-2 focus:ring-rose-600 focus:outline-none transition-all placeholder-stone-50/25 placeholder:text-xs placeholder:font-thin text-xs poppins-light" />
                    </div>
                    <div className="flex flex-col gap-1.5 focus-within:font-semibold">
                        <label htmlFor="message" className="transition-all text-sm">Pesan</label>
                        <textarea name="message" id="message" placeholder="Pesan..." className="ring-1 px-2 py-2 rounded-sm ring-stone-50/50 focus:ring-2 focus:ring-rose-600 focus:outline-none transition-all placeholder-stone-50/25 placeholder:text-xs placeholder:font-thin text-xs poppins-light w-full md:h-24"></textarea>
                    </div>
                    <div className="text-center">
                        <button className="hover:bg-rose-800 bg-rose-600 px-6 py-2 rounded-full transition-all cursor-pointer text-sm">Kirim</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
