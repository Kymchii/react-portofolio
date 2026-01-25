import { Images, usingTools } from "../data"

export const AboutSection = () => {
    return (
        <div id="about" className="about-section pt-20 grid grid-cols-1 gap-6 lg:grid-cols-1 lg:gap-20 px-6 sm:px-12">
            <div className="flex flex-col lg:gap-24 gap-6 sm:gap-12 sm:flex-row-reverse items-center md:px-24 lg:px-48">
                <div className="md:w-1/2">
                    <h1 className="text-2xl/loose poppins-semibold" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Tentang Saya</h1>
                    <p className="text-base poppins-light text-stone-50/50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">Saya lulusan S1 Teknik Informatika dengan minat besar di bidang web programming untuk membuat website yang tidak hanya fungsional, tetapi juga indah secara visual. Dengan kemampuan di bidang programming dan desain, saya siap menghadirkan solusi web yang optimal untuk kebutuhan Anda. Setiap proyek adalah kesempatan bagi saya untuk belajar, berkembang, dan memberikan yang terbaik.</p>
                </div>
                <img src={Images.AbouteImage} alt="about image" className="rounded-2xl w-full sm:w-1/2 lg:w-1/2 xl:w-1/3" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" />
            </div>
            <div className="flex flex-col gap-6 items-start lg:px-12">
                <h2 className="text-lg poppins-semibold md:text-xl" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang saya gunakan</h2>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-2 w-full lg:grid-cols-4">
                    {usingTools.map((tool) => (
                        <div className="flex items-center bg-gray-900/35 justify-start rounded-md gap-3 p-3 sm:flex-col sm:justify-center sm:items-center cursor-pointer hover:bg-gray-900 transition-all" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
                            <img src={tool.img} alt="laravel" className="w-10 h-10" />
                            <div>
                                <h2 className="sm:text-center">{tool.name}</h2>
                                <p className="sm:text-center text-sm text-stone-50/25 poppins-light">{tool.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
