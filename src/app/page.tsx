import Link from 'next/link'
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#101014] text-white">
      <main className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-12">
        <section>
          <div className="grid grid-cols-[1fr_1fr]">
            <h1 className="text-2xl font-bold font-heading text-4xl">Cooper Charles</h1>
            <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm overflow-x-auto no-scrollbar">
              <Link href="/resume.pdf" className="px-2 sm:px-3 py-1.5 flex items-center gap-2">
                <img src="/file.svg" width="25" height="15"/>
                <p>Resume</p>
              </Link>
              <Link href="/experience" className="px-2 sm:px-3 py-1.5">
                Experience
              </Link>
              <Link href="/projects" className="px-2 sm:px-3 py-1.5">
                Projects
              </Link>
              <Link href="/skills" className="px-2 sm:px-3 py-1.5">
                Skills
              </Link>
            </div>
          </div>
          <p className="text-neutral-400 mt-1">
            Nashville, TN
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">What I work with</h2>
        </section>

      </main>

    </div>
  )
}
