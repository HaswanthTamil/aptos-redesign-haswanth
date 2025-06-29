// /pages/Hero.tsx

import HeroGlobe from "@/components/backgrounds/HeroGlobe"
import Header from "@/components/Header"

const stats = [
  { title: "All-Time Peak TPS", value: "19.2K+" },
  { title: "All-Time Peak MAU", value: "18M+" },
  { title: "Transactions", value: "2.9B+" },
  { title: "Total Nodes", value: "510" },
  { title: "Validator Nodes", value: "151" },
]

const Hero = () => {
  return (
    <>
      <main className="relative z-10 px-15 py-10">
        <div className="flex flex-col border-2 border-[var(--fadeblue)] rounded-2xl py-4 px-8 ">
          <Header />
          <div className="flex flex-row items-center justify-around">
            <div className=" flex flex-col max-w-sm">
              <h2 className="text-6xl font-bold text-[var(--fadeblue)]">
                Make Your Move
              </h2>
              <button className="rounded-xl shadow-md border border-[var(--fadeblue)] px-4 py-2 mt-4 mx-auto font-semibold hover:-translate-y-1 hover:text-[var(--fadeblue)] transition-all duration-300 ease-in-out cursor-pointer">
                Earn with USDe
              </button>
            </div>
            <div className="flex h-[300px] w-[300px] items-center justify-center">
              <div>
                <HeroGlobe />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-around border-t-2 py-2 border-[var(--fadeblue)]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <span className="text-2xl font-bold text-[var(--fadeblue)]">
                  {stat.value}
                </span>
                <span className="text-lg font-bold text-[var(--fadeblue)]">
                  {stat.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Hero
