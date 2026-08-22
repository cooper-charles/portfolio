export default function Home() {
  return (
    <div className="min-h-screen bg-[#101014] text-white">
      <main className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-12">
        <a href="/projects/scoreboard">
          <section className="border-2 border-[#1e1e24] rounded-md p-6 flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-4xl mx-auto hover:border-[#9AA6E8]">
            <div className="flex-1 space-y-4">
              <h1 className="font-bold font-heading text-4xl">Live Sports Scoreboard</h1>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">C++</span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">Python</span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">ESP32</span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">Raspberry Pi</span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">Flask</span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">React Native</span>
              </div>
              <p className="text-gray-300">
                Real-time LED scoreboard for displaying live sports scores
              </p>
            </div>
            <div className="w-full md:w-72 shrink-0">
              <img 
                src="/screenshots/scoreboard/home.jpg" 
                alt="Scoreboard preview"
                className="rounded-xl object-cover w-full h-auto"
              />
            </div>
          </section>
        </a>

        <a href="/projects/marco">
          <section className="border-2 border-[#1e1e24] rounded-md p-6 flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-4xl mx-auto hover:border-[#9AA6E8]">
            <div className="flex-1 space-y-4">
              <h1 className="font-bold font-heading text-4xl">Geolocation Image Classifier</h1>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">Python</span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">PyTorch</span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">pandas</span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">CUDA</span>
              </div>
              <p className="text-gray-300">
                Model that predicts the location of Google street view images
              </p>
            </div>
            <div className="w-full md:w-72 shrink-0">
              <img 
                src="/screenshots/marco/home.png" 
                alt="Marco preview"
                className="rounded-xl object-cover w-full h-auto"
              />
            </div>
          </section>
        </a>

      </main>

    </div>
  )
}
