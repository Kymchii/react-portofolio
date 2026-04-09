export const Footer = () => {
    return (
        <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-darker py-8">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
                <p className="text-slate-500 text-sm font-mono mb-4 md:mb-0">
                    &copy; 2026 Wahyu. Dibangun dengan <span className="text-cyan">Tailwind CSS</span>.
                </p>
                <div className="flex space-x-6">
                    <a href="#" className="text-slate-400 hover:text-cyan transition-colors"><i data-lucide="github"
                        className="w-5 h-5"></i></a>
                    <a href="#" className="text-slate-400 hover:text-cyan transition-colors"><i data-lucide="linkedin"
                        className="w-5 h-5"></i></a>
                    <a href="#" className="text-slate-400 hover:text-cyan transition-colors"><i data-lucide="twitter"
                        className="w-5 h-5"></i></a>
                </div>
            </div>
        </footer>
    )
}
