import { LuAward } from "react-icons/lu";
import { FaCode } from 'react-icons/fa';

const Dicoding = './../../photos/certificate/dasar-pemrograman-web.jpg';
const PKM = './../../photos/certificate/juara-1-pkm-vgk.jpg';
const Hacktiv8 = './../../photos/certificate/maju-bareng-ai.jpg';
const Dibimbing = './../../photos/certificate/web-development-series-14-0.jpg';

export const certificates = [
    {
        id: 1,
        title: 'Belajar Dasar Pemrograman Web',
        verification: 'https://www.dicoding.com/certificates/JLX146875X72',
        platform: 'Dicoding Indonesia',
        year: '2024',
        desc: 'Mempelajari dasar-dasar pengembangan web, termasuk HTML, CSS, dan konsep fundamental dalam membangun tampilan serta struktur website yang responsif.',
        icon: FaCode,
        image: Dicoding,
        delay: '200',
    },
    {
        id: 2,
        title: 'Juara 1 - Klas PKM KC/KI/VGK',
        verification: '',
        platform: 'Puspresma PTMA',
        year: '2024',
        desc: 'Meraih Juara 1 melalui pengembangan proyek inovatif berbasis kreativitas dan pemecahan masalah, menunjukkan kemampuan riset, kolaborasi, dan eksekusi ide.',
        icon: LuAward,
        image: PKM,
        delay: '300',
    },
    {
        id: 3,
        title: 'AI Productivity and AI API Integration for Developers',
        verification: 'https://students.hacktiv8.com/certificates/75ed583f-d0ec-4a82-ab53-e996baffe9a1',
        platform: 'Hactiv8 Indonesia',
        year: '2026',
        desc: 'Mendalami pemanfaatan AI untuk meningkatkan produktivitas serta integrasi API AI dalam pengembangan aplikasi modern.',
        icon: FaCode,
        image: Hacktiv8,
        delay: '400',
    },
    {
        id: 4,
        title: 'Web Development Series 14.0',
        verification: '',
        platform: 'Dibimbing.id',
        year: '2026',
        desc: 'Mengikuti program pelatihan pengembangan web yang mencakup praktik pembuatan aplikasi serta penguatan skill frontend dan backend dasar.',
        icon: FaCode,
        image: Dibimbing,
        delay: '500',
    },
]