import { useEffect, useRef, useState } from 'react'
import { navItems } from '../data';
import { IoMdList } from 'react-icons/io';

export const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [navToggle, setNavToggle] = useState(false);
    const [activeId, setActiveId] = useState(navItems[0].id);
    const sideBarRef = useRef(null);

    const handleNavClick = (id) => {
        setActiveId(id);
    }

    const handleNavToggle = (e) => {
        e.preventDefault();
        setNavToggle(!navToggle);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        const handleScrollForNavItem = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = 0; i < navItems.length; i++) {
                const current = document.getElementById(navItems[i].id);
                const next = navItems[i + 1] ? document.getElementById(navItems[i + 1].id) : null;

                if (current) {
                    const start = current.offsetTop;
                    const end = next ? next.offsetTop : document.body.scrollHeight;

                    if (scrollPosition >= start && scrollPosition < end) {
                        setActiveId(navItems[i].id);
                        break;
                    }
                }
            }
        }

        const handleClickOutside = (e) => {
            if (!sideBarRef.current.contains(e.target)) {
                setNavToggle(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        window.addEventListener("scroll", handleScroll);

        window.addEventListener("scroll", handleScrollForNavItem);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", handleScrollForNavItem);
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, []);

    return (
        <div className={`navbar ${scrolled ? "bg-stone-50 text-gray-950 shadow-md" : ""} w-full fixed z-40`}>
            <div className={`flex justify-between sm:mx-12 items-center ${scrolled ? 'border-none' : 'border-b border-stone-50/25'} transition-all left-0 right-0 top-0 mx-6 lg:mx-24 py-2`}>
                <div>
                    <h1 className="text-2xl poppins-bold cursor-pointer">Wahyu</h1>
                </div>
                <IoMdList onClick={handleNavToggle} className="lg:hidden text-xl" />
                <ul ref={sideBarRef} className={`sm:w-1/2 lg:w-fit shadow-sm flex flex-col fixed top-0 gap-4 items-center -left-full bottom-0 w-3/4 bg-stone-50 py-6 text-gray-950 ${scrolled ? "lg:text-gray-950" : "lg:text-stone-50"} ${navToggle ? 'left-0' : ''} lg:flex-row lg:static lg:gap-8 lg:bg-transparent lg:shadow-none transition-all`}>
                    {navItems.map((item) => (
                        <li key={item.id} className="list-none"><a href={`#${item.id}`} className={`no-underline text-sm poppins-light hover:bg-rose-600 px-4 py-1.5 rounded-full transition-all ${activeId === item.id ? `bg-rose-600 text-stone-50 lg:${scrolled ? "text-stone-50" : ""}` : ""} ${scrolled ? "hover:text-stone-50" : ""}`} onClick={() => handleNavClick(item.id)}>{item.label}</a></li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
