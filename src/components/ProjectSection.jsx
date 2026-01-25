import { project } from "../data"

export const ProjectSection = () => {
    return (
        <div id="project" className="project-section flex flex-col items-center px-6 gap-6 sm:px-12 md:gap-6 lg:px-24 pt-20">
            <div className="w-fit flex flex-col gap-1.5">
                <h1 className="text-xl poppins-semibold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">PROJECT</h1>
                <div className="w-full h-1 bg-stone-50/50 flex justify-center items-center rounded-full"><div className="rounded-full w-1/3 h-1.5 bg-rose-600"></div></div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {project.map((p) => (
                    <a href={p.href} target="_blank">
                        <div key={p.id} className="cursor-pointer group" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={p.dad} data-aos-once="true">
                            <img src={p.img} alt={p.name} />
                            <ul className="absolute flex opacity-0 items-end gap-1.5 bottom-0 pb-3 pl-3 bg-gray-950/65 top-0 right-0 left-0 group-hover:opacity-100 transition-opacity">
                                {p.desc.map((d) => (
                                    <li className="bg-gray-950/50 px-2 rounded-full poppins-light text-xs h-fit text-stone-50/35 ">{d}</li>
                                ))}
                            </ul>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
