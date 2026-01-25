import { MdContactPhone, MdEmail } from "react-icons/md"
import { socialMedia } from "../data"

export const Footer = () => {
    return (
        <div className="footer grid grid-cols-1 bg-gray-900/35">
            <div className="p-6 grid grid-cols-2 gap-6 sm:p-12 sm:gap-12 lg:px-24 lg:grid-cols-4">
                <div className="col-span-2 md:col-span-1">
                    <h2 className="text-base mb-3">Sosial Media</h2>
                    <ul className="flex gap-3">
                        {socialMedia.map((item) => (
                            <li className="group cursor-pointer p-5 border border-solid border-rose-600 rounded-full hover:bg-rose-600 hover:text-stone-50"><a href={item.href} target="_blank">{<item.icon className="text-lg text-rose-600 group-hover:text-slate-50" />}</a></li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="text-base mb-3">Navigasi</h2>
                    <ul>
                        <li><a className="text-sm poppins-light text-stone-50/50 hover:text-rose-600" href="#index">Beranda</a></li>
                        <li><a className="text-sm poppins-light text-stone-50/50 hover:text-rose-600" href="#about">Tentang</a></li>
                        <li><a className="text-sm poppins-light text-stone-50/50 hover:text-rose-600" href="#project">Project</a></li>
                        <li><a className="text-sm poppins-light text-stone-50/50 hover:text-rose-600" href="#contact">Kontak</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-base mb-3">Servis</h2>
                    <ul>
                        <li className="text-sm poppins-light text-stone-50/50 mb-1.5">Web Design</li>
                        <li className="text-sm poppins-light text-stone-50/50 mb-1.5">Web Development</li>
                        <li className="text-sm poppins-light text-stone-50/50 mb-1.5">Graphic Design</li>
                    </ul>
                </div>
                <div className="col-span-2 md:col-span-1">
                    <h2 className="text-base mb-3">Kontak Saya</h2>
                    <p className="text-sm poppins-light text-stone-50/50 mb-3">Jl. Kom Yos Sudarso Gg. Alpokat Indah Jalur 4 No. E15, Sungai Beliung, Kec. Pontianak Barat, Kota Pontianak, Kalimantan Barat.</p>
                    <ul className="flex flex-col gap-1.5">
                        <li className="text-sm poppins-light flex gap-1.5 items-center text-slate-50/50"><MdContactPhone className="text-base" /> 0895323110909</li>
                        <li className="text-sm poppins-light flex gap-1.5 items-center text-slate-50/50"><MdEmail className="text-lg" /> wwwahyu.march@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className="bg-rose-600 p-6 text-center text-sm">
                <p className="poppins-light">&copy; Copyright <span className="poppins-semibold">Wahyu.</span> All Rights Reserved</p>
                <p className="poppins-light"><span className="poppins-semibold">Design By</span> Wahyu</p>
            </div>
        </div>
    )
}
