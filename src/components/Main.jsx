import { About } from "./main/About"
import { Certification } from "./main/Certification"
import { Contact } from "./main/Contact"
import { Experient } from "./main/Experient"
import { Hero } from "./main/Hero"
import { Project } from "./main/Project"
import { Skill } from "./main/Skill"

export const Main = () => {
    return (
        <main className="pt-24 pb-12">

            <Hero />

            <About />

            <Skill />

            <Project />

            <Experient />

            <Certification />

            <Contact />
        </main>
    )
}
