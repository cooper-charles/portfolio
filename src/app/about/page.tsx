"use client";
import { useState } from "react";
import Link from 'next/link'

const CAROUSEL_IMAGES = [
  { src: "/about/golf.jpg", alt: "Scoreboard home view" },
  { src: "/about/btb.jpg", alt: "Scoreboard game view" },
  { src: "/about/brothers.jpg", alt: "Scoreboard stats view" },
  { src: "/about/coffeeShop.jpg", alt: "Scoreboard stats view" },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === CAROUSEL_IMAGES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#101014] text-white">
      <main className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-6">
        <section className="rounded-md p-6 flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-4xl mx-auto">
          <div className="w-full md:w-60 shrink-0">
            <img 
              src="/about/headshot.PNG" 
              alt="Professional Headshot"
              className="rounded-4xl object-cover w-full h-auto"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h1 className="font-bold font-heading text-4xl">About me</h1>
            <p className="">
              I'm a Computer Science student who enjoys turning ideas into things that actually work. 
              I tend to gravitate toward projects that combine different areas of computing, whether 
              that's building a web application around a statistical model or connecting software to 
              custom hardware.
            </p>
            <p className="">
              I enjoy working across the build whole process. I'm especially interested 
              in software engineering, machine learning, and embedded systems.
            </p>
          </div>
        </section>

        <section className="mb-5">
            <h3 className="mb-2 text-3xl font-bold">
                What I like building
            </h3>
            <div className="grid grid-cols-2 gap-x-20 gap-y-10">
                <div>
                    <h4 className="text-2xl font-bold text-[#9AA6E8]">Software Engineering</h4>
                    <p>Building maintainable applications and figuring out how different parts of a system fit together.</p>
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-[#9AA6E8]">Machine Learning & Data</h4>
                    <p>Using data and statistical models to solve problems where the answer isn't explicitly programmed.</p>
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-[#9AA6E8]">Embedded Systems</h4>
                    <p>Connecting software with physical hardware and working within real-world constraints.</p>
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-[#9AA6E8]">End-to-End Products</h4>
                    <p>Taking an idea from a prototype to something people can actually use through research, construction, and deployment.</p>
                </div>
            </div>
        </section>
        
        <section className="mb-5">
            <h3 className="mb-2 text-3xl font-bold">
                Outside of programming
            </h3>
            <p className="mb-4">When I'm away from my computer, I'm usually spending time with family/friends, playing or watching sports, or picking up some completely unrelated hobby.</p>
            
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-3xl group">
              <img 
                src={CAROUSEL_IMAGES[currentIndex].src} 
                alt={CAROUSEL_IMAGES[currentIndex].alt}
                className="w-full h-full object-cover transition-all duration-300"
              />

              <button 
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous slide"
              >
                {"<"}
              </button>
              <button 
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next slide"
              >
                {">"}
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {CAROUSEL_IMAGES.map((_, index) => (
                  <button key={index} onClick={() => setCurrentIndex(index)} className={`h-2 rounded-full transition-all ${currentIndex === index ? "w-6 bg-white" : "w-2 bg-white/50"}`} aria-label={`Go to slide ${index + 1}`}/>
                ))}
              </div>
            </div>
        </section>

        <section className="">
            <h3 className="mb-2 text-3xl font-bold">
                A little bit more about me
            </h3>
            <ul className="list-disc space-y-2 pl-6">
                <li>
                    Based in Nashville/Knoxville, Tennessee.
                </li>
                <li>
                    I'm was born and raised in Northern California.
                </li>
                <li>
                    My favorite professional sports teams are the San Francisco 49ers, Sacramento Kings, San Francisco Giants, and San Jose Sharks.
                </li>
                <li>
                    I love solving Rubik's cubes.
                </li>
                <li>
                    I sometimes make my own soccer balls in my free time.
                </li>
                <li>
                    I am trying to make it to all 50 states.
                </li>
            </ul>
        </section>

        <hr></hr>

        <section id="contact">
          <p className="leading-relaxed">
            Questions about a project, collaboration ideas, opportunities, or anything else? Feel free to reach out.
          </p>

          <div className="mt-6 flex gap-3">
            <Link href="mailto:ccharl10@vols.utk.edu" target="_blank" className="px-2 sm:px-3 py-1.5 flex items-center gap-2 border border-[#1e1e24] hover:border-[#9AA6E8] rounded-md">
              <img src="/icons/email.svg" width="25" height="15" className="brightness-0 invert"/>
              <span className="font-bold">Email</span>
            </Link>
            <Link href="https://www.linkedin.com/in/cooper-charles-45094038a/" target="_blank" className="px-2 sm:px-3 py-1.5 flex items-center gap-2 border border-[#1e1e24] hover:border-[#9AA6E8] rounded-md">
              <img src="/icons/linkedIn.svg" width="25" height="15" className="brightness-0 invert"/>
              <span className="font-bold">LinkedIn</span>
            </Link>
            <Link href="https://github.com/cooper-charles" target="_blank" className="px-2 sm:px-3 py-1.5 flex items-center gap-2 border border-[#1e1e24] hover:border-[#9AA6E8] rounded-md">
              <img src="/icons/gitHub.svg" width="25" height="15" className="brightness-0 invert"/>
              <span className="font-bold">GitHub</span>
            </Link>
          </div>
        </section>

      </main>

    </div>
  )
}