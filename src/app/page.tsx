import Link from 'next/link'
import { SkillGroup } from "@/components/SkillGroup";
import { skillGroups } from "@/data/skills";

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
                <img src="icons/linkedIn.svg" width="25" height="15" className="brightness-0 invert"/>
              </Link>
              <Link href="https://github.com/cooper-charles" target="_blank" className="px-2 sm:px-3 py-1.5 border border-[#1e1e24] rounded-md">
                <img src="icons/gitHub.svg" width="25" height="15" className="brightness-0 invert"/>
              </Link>
              <Link href="mailto:ccharl10@vols.utk.edu" target="_blank" className="px-2 sm:px-3 py-1.5 border border-[#1e1e24] rounded-md">
                <img src="icons/email.svg" width="25" height="15" className="brightness-0 invert"/>
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
          <h2 className="mb-5 text-4xl font-heading font-bold">
            What I work with
          </h2>
          
          <div className="grid grid-cols-2 gap-x-20 gap-y-10">
            {skillGroups.map((group) => (
              <SkillGroup
                key={group.title}
                title={group.title}
                skills={group.skills}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-4xl font-heading font-bold">
            Projects
          </h2>
          
          <div className="relative overflow-hidden rounded-2xl group transition-all duration-300 hover:shadow-xl">
            <img src="screenshots/zsl.png" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"/>
            <div className="absolute bottom-0 left-0 z-10 w-full p-5 transition-transform duration-300 group-hover:-translate-y-2">
              <h3 className="text-xl font-bold">
                Zero Sum Labs
              </h3>

              <div className="mt-2 flex gap-2">
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md border border-white/20 px-2 py-1 text-sm">
                    Next.js
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md border border-white/20 px-2 py-1 text-sm">
                    React
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md border border-white/20 px-2 py-1 text-sm">
                    Python
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md border border-white/20 px-2 py-1 text-sm">
                    Supabase
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-md border border-white/20 px-2 py-1 text-sm">
                    Raspberry Pi
                  </span>
                </div>
              </div>

              <p className="mt-2">
                Automated regression-based sports ratings and game projections platform
              </p>
                <div className="max-h-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-10 group-hover:opacity-100 group-hover:mt-3">
                  <span className="font-semibold">
                    Learn more →
                  </span>
                </div>
            </div>
          </div>
        </section>

      </main>

    </div>
  )
}
