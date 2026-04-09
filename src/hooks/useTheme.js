import { useEffect, useState } from "react"

export default function useTheme() {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'dark'
    })

    useEffect(() => {
        const html = document.documentElement

        if (theme === 'dark') {
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
        }

        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')
    }

    return { theme, toggleTheme }
}