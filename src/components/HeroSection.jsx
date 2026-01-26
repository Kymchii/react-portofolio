import { GrDocumentDownload, GrGithub } from "react-icons/gr"
import { Images } from "../data"

export const HeroSection = () => {
    const cv = '/assets/cv-wahyu-upd.pdf';
    return (
        <div className={`hero-section grid grid-cols-1 px-6 gap-6 sm:px-24 sm:grid-cols-2 lg:h-lvh sm:h-full lg:px-56 lg:grid-cols-2 pt-20`}>
            <div className="flex flex-col gap-3 sm:justify-center animate__animated animate__fadeInUp animate__delay-3s">
                <q className="text-xs bg-gray-900 w-fit py-1 px-4 rounded-full poppins-light">Hiduplah seperti Larry!</q>
                <h1 className="lg:text-7xl text-5xl poppins-semibold">Selamat Datang di</h1>
                <h2 className="text-2xl">Website Portofolio Wahyu</h2>
                <div className="flex gap-3">
                    <a href={cv} download="cv-wahyu.pdf" className="bg-rose-600 px-3 py-2 rounded-full text-sm hover:bg-rose-800 cursor-pointer transition-all"><GrDocumentDownload className="inline mr-2" />Unduh CV</a>
                    <a href="https://github.com/Kymchii" target="_blank" className="border border-stone-50 px-3 py-2 rounded-full text-sm cursor-pointer transition-all"><GrGithub className="inline mr-2" />Github</a>
                </div>
            </div>
            <div className="flex items-center lg:justify-end justify-center animate__animated animate__fadeInUp animate__delay-4s relative">
                <div className="absolute -z-20 flex justify-center">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-3xs sm:w-3/4 md:w-3xs lg:w-4/5 xl:w-xs 2xl:w-md">
                        <path d="M43.3,-76C56.1,-67.7,66.2,-55.9,73.4,-42.7C80.5,-29.4,84.5,-14.7,83.3,-0.7C82.1,13.3,75.6,26.6,69.1,41C62.7,55.3,56.2,70.8,44.7,79.2C33.2,87.7,16.6,89.2,0.2,88.8C-16.2,88.5,-32.4,86.3,-45.4,78.7C-58.4,71.1,-68.3,58.1,-74.7,44.1C-81.1,30.1,-84,15,-84.5,-0.3C-85,-15.6,-83.2,-31.3,-77,-45.7C-70.9,-60.2,-60.4,-73.4,-46.9,-81.2C-33.3,-89.1,-16.7,-91.6,-0.7,-90.4C15.3,-89.2,30.6,-84.3,43.3,-76Z" transform="translate(100 100)" className="fill-rose-600" />
                    </svg>
                </div>
                <img src={Images.HeroImage} className="w-3/4 mask-b-from-95% mask-b-to-100%" alt="" />
            </div>
        </div>
    )
}
