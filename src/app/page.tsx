import Link from 'next/link'
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#101014] text-white">
      <main className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-12">
        <section className="border border-2 border-[#1e1e24] rounded-md p-4">
          <div className="grid grid-cols-[1fr_1fr]">
            <h1 className="font-bold font-heading text-4xl">Cooper Charles</h1>
            <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm overflow-x-auto no-scrollbar">
              <Link href="/resume.pdf" target="_blank" className="px-2 sm:px-3 py-1.5 flex items-center gap-2 border border-[#1e1e24] rounded-md">
                <img src="/file.svg" width="25" height="15" className="brightness-0 invert"/>
                <p className="font-bold">Resume</p>
              </Link>
              <Link href="https://www.linkedin.com/in/cooper-charles-45094038a/" target="_blank" className="px-2 sm:px-3 py-1.5 border border-[#1e1e24] rounded-md">
                <img src="/linkedInIcon.svg" width="25" height="15" className="brightness-0 invert"/>
              </Link>
              <Link href="https://github.com/cooper-charles" target="_blank" className="px-2 sm:px-3 py-1.5 border border-[#1e1e24] rounded-md">
                <img src="/gitHubIcon.svg" width="25" height="15" className="brightness-0 invert"/>
              </Link>
              <Link href="mailto:ccharl10@vols.utk.edu" target="_blank" className="px-2 sm:px-3 py-1.5 border border-[#1e1e24] rounded-md">
                <img src="/emailIcon.svg" width="25" height="15" className="brightness-0 invert"/>
              </Link>
            </div>
          </div>
          <p className="text-neutral-400 mt-1">
            Nashville, TN
          </p>
          <h2 className="text-xl mt-4">
            I'm a Computer Science student who loves building anything from full-stack applications and machine learning projects to embedded systems and custom hardware.
          </h2>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4"></h2>
        </section>

      </main>

    </div>
  )
}
