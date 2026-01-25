const HeroImage = "/assets/hero-image.PNG";
const AbouteImage = "/assets/about-image.png";

export const Images = {
    HeroImage,
    AbouteImage,
};

const LaravelLogo = "/assets/laravel-svgrepo-com.svg";
const ReactLogo = "/assets/react-logo-svgrepo-com.svg";
const TailwindLogo = "/assets/tailwind-svgrepo-com.svg";
const BootstrapLogo = "/assets/bootstrap-svgrepo-com.svg";
const HTMLLogo = "/assets/html-svgrepo-com.svg";
const CSSLogo = "/assets/css-3-svgrepo-com.svg";
const PHPLogo = "/assets/php-logo-svgrepo-com.svg";
const JavaScriptLogo = "/assets/javascript-svgrepo-com.svg";
const AutoCADLogo = "/assets/autocad-logo-png-svg-vector.svg";
const SketchupLogo = "/assets/sketchup-seeklogo.png";
const PhotoshopLogo = "/assets/adobe-photoshop-logo-png-svg-vector.svg";
const IllustratorLogo = "/assets/adobe-illustrator-logo-png-svg-vector.svg";
const FigmaLogo = "/assets/figma-logo.svg";
const CorelLogo = "/assets/icons8-coreldraw.svg";

export const usingTools = [
    {
        "id": 1,
        "name": "Laravel",
        "desc": "Framework",
        "img": LaravelLogo,
        "dad": 300,
    },
    {
        "id": 2,
        "name": "React",
        "desc": "Framework",
        "img": ReactLogo,
        "dad": 400,
    },
    {
        "id": 3,
        "name": "Tailwindcss",
        "desc": "Framework",
        "img": TailwindLogo,
        "dad": 500,
    },
    {
        "id": 4,
        "name": "Bootstrap",
        "desc": "Framework",
        "img": BootstrapLogo,
        "dad": 600,
    },
    {
        "id": 5,
        "name": "HTML",
        "desc": "Language",
        "img": HTMLLogo,
        "dad": 700,
    },
    {
        "id": 6,
        "name": "CSS",
        "desc": "Stylesheet",
        "img": CSSLogo,
        "dad": 800,
    },
    {
        "id": 7,
        "name": "PHP",
        "desc": "Language",
        "img": PHPLogo,
        "dad": 900,
    },
    {
        "id": 8,
        "name": "JavaScript",
        "desc": "Language",
        "img": JavaScriptLogo,
        "dad": 1000,
    },
    {
        "id": 9,
        "name": "AutoCAD",
        "desc": "Design",
        "img": AutoCADLogo,
        "dad": 1100,
    },
    {
        "id": 10,
        "name": "Sketchup",
        "desc": "Design",
        "img": SketchupLogo,
        "dad": 1200,
    },
    {
        "id": 11,
        "name": "Adobe Photoshop",
        "desc": "Editing",
        "img": PhotoshopLogo,
        "dad": 1300,
    },
    {
        "id": 12,
        "name": "Adobe Illustrator",
        "desc": "Design",
        "img": IllustratorLogo,
        "dad": 1400,
    },
    {
        "id": 13,
        "name": "Figma",
        "desc": "Design",
        "img": FigmaLogo,
        "dad": 1500,
    },
    {
        "id": 14,
        "name": "CorelDRAW",
        "desc": "Design",
        "img": CorelLogo,
        "dad": 1600,
    },
];

const Clicky = "/assets/clicky.jpg";
const Kymchi = "/assets/kymchi.jpg";
const Rumangsa = "/assets/rumangsa.jpg";
const SentinelCare = "/assets/mockup.png";
const Akasa = "/assets/akasa.jpg";
const SmoothVilla = "/assets/smooth-villa.jpg";
const Music = "/assets/music.jpg";

export const project = [
    {
        "id": 1,
        "name": "clicky",
        "img": Clicky,
        "desc": ["HTML", "CSS", "JavaScript"],
        "dad": 300,
        "href": ""
    },
    {
        "id": 2,
        "name": "kymchi",
        "img": Kymchi,
        "desc": ["HTML", "CSS", "JavaScript"],
        "dad": 600,
        "href": "https://github.com/Kymchii/landing-page-kymchi"
    },
    {
        "id": 3,
        "name": "rumangsa",
        "img": Rumangsa,
        "desc": ["HTML", "CSS", "JavaScript"],
        "dad": 900,
        "href": "https://github.com/Kymchii/landing-page-rumangsa"
    },
    {
        "id": 4,
        "name": "Sentinel Care",
        "img": SentinelCare,
        "desc": ["Figma"],
        "dad": 1200,
        "href": "https://www.figma.com/design/pp1TM7mpYH6fGPtPyRTnEb/Untitled?node-id=0-1&p=f&t=NkSN52IZYtMBs1Ty-0"
    },
    {
        "id": 5,
        "name": "Akasa",
        "img": Akasa,
        "desc": ["Figma"],
        "dad": 1500,
        "href": "https://www.figma.com/design/qv3klqhL9CIds3u1MtQd55/Untitled?node-id=0-1&p=f&t=UVDjcXMfAzDFHUlP-0"
    },
    {
        "id": 6,
        "name": "Smooth Villa",
        "img": SmoothVilla,
        "desc": ["Figma"],
        "dad": 1800,
        "href": "https://www.figma.com/design/vZJYZWaiI8brZ4KDK7dKhA/Untitled?node-id=0-1&p=f&t=prFvDNMIXFCTptjZ-0"
    },
    {
        "id": 7,
        "name": "Music",
        "img": Music,
        "desc": ["Figma"],
        "dad": 2100,
        "href": "https://www.figma.com/design/hQHaXhHNCwmF5tlA3eI8nU/UTSDPP-%E2%80%93-22---211220050-%E2%80%93-WAHYU-%E2%80%93-UI?node-id=0-1&p=f&t=42Dbnu6pAL137Myk-0"
    },
];

import { FaMapLocationDot } from "react-icons/fa6";
import { MdContactPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export const contact = [
    {
        "id": 1,
        "name": "Alamat",
        "desc": "Jl. Alpokat Indah Jalur 4 No. E15",
        "icon": FaMapLocationDot,
    },
    {
        "id": 2,
        "name": "Telepon",
        "desc": "0895323110909",
        "icon": MdContactPhone,
    },
    {
        "id": 3,
        "name": "Email",
        "desc": "wwwahyu.march@gmail.com",
        "icon": IoIosMail,
    },
];

export const navItems = [
    {
        id: "index",
        label: "Beranda",
    },
    {
        id: "about",
        label: "Tentang",
    },
    {
        id: "project",
        label: "Project",
    },
    {
        id: "contact",
        label: "Contact",
    },
]

export const socialMedia = [
    {
        id: 1,
        name: "Instagram",
        href: "https://www.instagram.com/wwahyu.pdf/",
        icon: FaInstagram,
    },
    {
        id: 2,
        name: "TikTok",
        href: "https://www.tiktok.com/@kymchi27",
        icon: FaTiktok,
    },
    {
        id: 3,
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/wahyu-453113347/",
        icon: FaLinkedin,
    },
]
