import Link from 'next/link'

export function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-[#101014] w-full backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 h-16 grid grid-cols-[1fr_auto_1fr] items-center font-heading font-semibold text-white">
                <Link href="/" className="font-bold">
                    Cooper Charles
                </Link>
                <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm overflow-x-auto no-scrollbar">
                    <Link href="/projects" className="px-2 sm:px-3 py-1.5">
                      Projects
                    </Link>
                    <Link href="/#experience" className="px-2 sm:px-3 py-1.5">
                      Experience
                    </Link>
                    <Link href="/about" className="px-2 sm:px-3 py-1.5">
                      About
                    </Link>
                </div>
                <Link href="/contact" className="justify-self-end">
                    Contact
                </Link>
            </div>
        </nav>
    )
}