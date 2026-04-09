// icons
import { IoList, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { sections } from "../data";
import { useEffect, useState } from "react";

export const Navbar = ({ toggleTheme, theme }) => {
    const [openNav, setOpenNav] = useState(false);
    const [navActive, setNavActive] = useState(sections[0].id);

    useEffect(() => {
        const scrolling = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = 0; i < sections.length; i++) {
                const current = document.getElementById(sections[i].id);
                const next = sections[i + 1] ? document.getElementById(sections[i + 1].id) : null;

                if (current) {
                    const start = current.offsetTop;
                    const end = next ? next.offsetTop : document.body.scrollHeight;

                    if (scrollPosition >= start && scrollPosition < end) {
                        setNavActive(sections[i].id);
                        break;
                    }
                }
            }
        }

        window.addEventListener('scroll', scrolling);

        return () => {
            window.removeEventListener('scroll', scrolling);
        }
    }, []);

    const toggleNav = () => {
        setOpenNav(!openNav);
    };

    return (
        <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-navy/80 border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold font-mono text-cyan neon-text tracking-tighter">
                    &lt;Wahyu/&gt;
                </a>

                <nav className="hidden md:flex space-x-8 items-center">
                    {
                        sections.map((section, index) => (
                            <a key={index} href={`#${section.id}`} className={`${navActive === section.id ? 'text-cyan' : ''} hover:text-cyan transition-colors font-medium`}>{section.title}</a>
                        ))
                    }

                    <button id="theme-toggle" className="cursor-pointer p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 transition-colors" onClick={toggleTheme}>
                        {theme === 'dark' ? (
                            <i className="w-5 h-5 text-cyan text-xl">
                                <IoSunnyOutline />
                            </i>
                        ) : (
                            <i className="w-5 h-5 text-slate-700 text-xl">
                                <IoMoonOutline />
                            </i>
                        )}
                    </button>

                    <a href="#kontak"
                        className="px-5 py-2 rounded-full border border-cyan text-cyan hover:bg-cyan hover:text-navy transition-all duration-300 font-medium">
                        Hubungi Saya
                    </a>
                </nav>

                <div className="md:hidden flex items-center space-x-4">
                    <button id="theme-toggle-mobile" className="p-2 rounded-full hover:bg-slate-200 active:bg-slate-200 dark:hover:bg-white/10 dark:active:bg-white/10 transition-colors" onClick={toggleTheme}>
                        {
                            theme === 'dark' ? (
                                <i className="w-5 h-5 text-cyan text-2xl">
                                    <IoSunnyOutline />
                                </i>
                            ) : (
                                <i className="w-5 h-5 text-slate-700 text-2xl">
                                    <IoMoonOutline />
                                </i>
                            )
                        }
                    </button>
                    <button id="mobile-menu-btn" className="text-slate-800 dark:text-slate-200 text-2xl" onClick={toggleNav}>
                        <IoList />
                    </button>
                </div>
            </div>

            <div id="mobile-menu" className={`absolute w-full bg-white/70 dark:bg-navy/80 border-b border-slate-200 dark:border-white/10 shadow-lg backdrop-blur-md duration-200 transition-transform ${openNav ? 'translate-y-0' : '-translate-y-[150%]'}`}>
                <div className="flex flex-col px-6 py-4 space-y-4">
                    {sections.map((section, index) => (
                        <a key={index} href={`#${section.id}`} className="mobile-link hover:text-cyan active:text-cyan font-medium">{section.title}</a>
                    ))}
                    <a href="#kontak" className="mobile-link text-cyan font-medium">Hubungi Saya</a>
                </div>
            </div>
        </header>
    )
}
