export default function Home() {
  return (
    <div className="min-h-screen bg-[#101014] text-white">
      <main className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-12">
        <section className="border border-2 border-[#1e1e24] rounded-md p-4">
            <h1 className="font-bold font-heading text-4xl">Live Sports Scoreboard</h1>
            <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
                    C++
                </span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
                    Python
                </span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
                    ESP32
                </span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
                    Raspberry Pi
                </span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
                    Flask
                </span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
                    React Native
                </span>
                <p>
                    Real-time LED scoreboard for displaying live sports scores
                </p>
            </div>
            <img src="/screenshots/scoreboard/home.JPG" className="w-full h-full object-cover rounded-3xl p-2"/>
            <p>
                I built a full LED scoreboard system that shows live professional sports scores across seven leagues. It has a mobile interface to change settings and the displayed games as well. Everything is built from the ground up from the hardware to the backend system and graphical display.
            </p>
        </section>

        <section>
            <h2 className="mb-5 text-3xl font-heading font-bold">
                Components
            </h2>
            <h3 className="mb-2 text-2xl font-bold text-[#9AA6E8]">
                Hardware
            </h3>
            <p className="mb-5">
                The scoreboard is centered around an <b>ESP32-S3</b> board mounted on a <b>custom PCB</b> designed in <b>KiCad</b> to pair with the <b>64x32 RGB LED matrix</b>, <b>SPI flash chip</b> for logos, and the power components.
            </p>
            <h3 className="mb-2 text-2xl font-bold text-[#9AA6E8]">
                Custom C++ Firmware
            </h3>
            <p className="mb-5">
                The ESP32 runs custom C++ firmware that controls the LED panel, memory management from the SPI chip, and communication with the custom REST APIs.
            </p>
            <h4 className="mb-2 text-xl font-bold text-neutral-400">
                Firmware Features
            </h4>
            <ul className="list-disc space-y-2 pl-6 mb-5">
                <li>
                    Live score retrieval from custom REST API endpoints using a unique
                    board identity and per-device authentication key
                </li>
                <li>
                    Dynamic rendering of team abbreviations, records, rankings,
                    scores, start times, periods, and game clocks
                </li>
                <li>
                    Custom variable-width bitmap font engine with multiple font sizes
                    and left, center, and right text alignment
                </li>
                <li>
                    Remotely configurable display brightness and score refresh
                    interval without reflashing the device
                </li>
                <li>
                    Automatic Wi-Fi reconnection with retry protocols
                </li>
                <li>
                    Periodic device heartbeat reporting with board ID and firmware
                    version for remote uptime monitoring
                </li>
                <li>
                    Persistent device provisioning through ESP32 NVS, allowing the
                    same generic firmware image to support uniquely authenticated
                    scoreboards
                </li>
            </ul>
            <h3 className="mb-2 text-2xl font-bold text-[#9AA6E8]">
                Python powered backend
            </h3>
            <p className="mb-5">
                A Raspberry Pi running a Python scraper consistenly pulls and parses live game scores from external APIs and pushes the live scores to a Cloudflare D1 database. The scores are updated every 15 seconds while there are live games and scales down to 10 minutes when there are no live games to keep traffic low.
            </p>
            <h3 className="mb-2 text-2xl font-bold text-[#9AA6E8]">
                Mobile Interface
            </h3>
            <p className="mb-5">
                React Native mobile application allows the user to change their scoreboard's settings such as the games being rotated on the display or the brightness and refresh time.
            </p>
        </section>
        <section>
            <h2 className="mb-5 text-3xl font-heading font-bold">
                Screenshots
            </h2>
            <img src="/screenshots/scoreboard/torVsNyy.JPG" className="w-full h-full object-cover rounded-3xl p-2"/>
            <img src="/screenshots/scoreboard/asuVsDuke.JPG" className="w-full h-full object-cover rounded-3xl p-2"/>
            
        </section>


      </main>

    </div>
  )
}
