import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#101014] text-white">
      <main className="max-w-3xl mx-auto px-4 py-12 flex flex-col gap-12">
        <section className="border border-2 border-[#1e1e24] rounded-md p-4">
            <h1 className="font-bold font-heading text-4xl">Zero Sum Labs</h1>
            <div className="mt-2 flex flex-wrap gap-2">
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
                    Next.js
                </span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
                    React
                </span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
                    Python
                </span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
                    pandas
                </span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
                    Supabase
                </span>
                <span className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md">
                    Raspberry Pi
                </span>
                <Link href="https://zsl.coopercharles.me/" target="_blank" className="rounded-md border border-white/20 px-2 py-1 text-sm backdrop-blur-md hover:border-[#9AA6E8] flex items-center gap-2">
                    <span>View Site</span>
                    <img src="/icons/arrowLink.svg" width="15" height="15" className="brightness-0 invert"/>
                </Link>
                <p>
                    Automated regression-based sports ratings and game projection platform
                </p>
            </div>
            <img src="/screenshots/zsl/home.png" className="w-full h-full object-cover rounded-3xl p-2"/>
            <p>
                Zero Sum Labs is an automated sports analytics platform that calculates offensive, defensive, and overall team strength and generates game projections across multiple professional sports leagues.
            </p>
        </section>

        <section>
            <h2 className="mb-5 text-3xl font-heading font-bold">
                Components
            </h2>
            <h3 className="mb-2 text-2xl font-bold text-[#9AA6E8]">
                The Ratings Engine
            </h3>
            <p className="mb-5">
                Every team receives a net rating comprised of their offensive and defensive ratings which are calculated seperately using iterative fitting against real game results. The league average rating is anchored at zero and the ratings react to game results in real time accounting for home field advantage and strength of schedule.
            </p>
            <h3 className="mb-2 text-2xl font-bold text-[#9AA6E8]">
                Automated Data Pipeline
            </h3>
            <p className="mb-5">
                The whole platform is automated. Every morning, Python scripts on a Raspberry Pi fetch the results of the previous day's sports games, parse and normalize all of the results, feed the results into our ratings engine, and the updated ratings and future game projections are published to a Supabase database. Then, the Next.js frontend displays the ratings from the database at <a href="https://zsl.coopercharles.me" target="_blank"><u>zsl.coopercharles.me</u></a>.
            </p>
            <h3 className="mb-2 text-2xl font-bold text-[#9AA6E8]">
                The Platform
            </h3>
            <h4 className="mb-2 text-xl font-bold text-neutral-400">
                League Rankings
            </h4>
            <p className="mb-5">
                Every sport has a league ratings table. The table shows every team alongside their record, net rating, offensive ratings, and defensive rating. The table also shows where every team ranks among the league in those categories.
            </p>
            <h4 className="mb-2 text-xl font-bold text-neutral-400">
                Team Profiles
            </h4>
            <p className="mb-5">
                Every single team has a profile page accessible by clicking the team name from the rankings table or by searching for them with the search bar. The profile page shows all the info from the rankings page as well as a rating trajectory chart, which shows how the team has improved or regressed over the course of the season. It also shows the projection for the team's upcoming game.
            </p>
            <h4 className="mb-2 text-xl font-bold text-neutral-400">
                Game Projections
            </h4>
            <p className="mb-5">
                A projections page shows the simulated results of every upcoming game including scores, win probabilities, and game totals. The projections page is filterable and allows the user to select any day to view.
            </p>
            <h3 className="mb-2 text-2xl font-bold text-[#9AA6E8]">
                Challenges
            </h3>
            <h4 className="mb-2 text-xl font-bold text-neutral-400">
                Early Season Ratings
            </h4>
            <p className="mb-5">
                In a traditional model, early season games would carry a large weight on ratings because of a limited sample size. Our model includes a pre-season prior based on the previous season's result that slowly fades out as the season goes on. This helps our model stay accurate and grounded at any point during the season.
            </p>
            <h4 className="mb-2 text-xl font-bold text-neutral-400">
                Cross-sport Modeling
            </h4>
            <p className="mb-5">
                Every sport is different, but one thing that remains consistent is every team in every sport is trying to score as much as possible and limit opponent scoring as much as possible. Using those key factors as the basis of our model allows us to maintain a similar model across every sport, with only minor adjustments between sports.
            </p>
            <h4 className="mb-2 text-xl font-bold text-neutral-400">
                Interpretability
            </h4>
            <p className="">
                Sometimes sports analytics can be difficult to digest and understand. That's why the ratings on Zero Sum Labs have a very intuitive meaning. Each rating is just how much more a team scores per game than league average. For example, a +1.50 offensive rating means that team scores 1.5 more points than average.
            </p>
        </section>
        <section>
            <h2 className="mb-5 text-3xl font-heading font-bold">
                Screenshots
            </h2>
            <img src="/screenshots/zsl/rankingsTable.png" className="w-full h-full object-cover rounded-3xl p-2"/>
            <span>Rankings table for the NHL</span>
            <img src="/screenshots/zsl/profile.png" className="w-full h-full object-cover rounded-3xl p-2"/>
            <span>Team profile for Nashville SC</span>
            <img src="/screenshots/zsl/projections.png" className="w-full h-full object-cover rounded-3xl p-2"/>
            <span>Upcoming game projections for today</span>
            
        </section>


      </main>

    </div>
  )
}
