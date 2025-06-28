// /app/page.tsx

import ParticlesBG from "@/components/backgrounds/ParticlesBG"

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-black relative z-0 text-white">
        <ParticlesBG />

        <main className="relative z-10">
          <a className="mx-auto p-5 text-white font-semibold text-3xl">
            Aptos - Reshaping Crypto
          </a>
        </main>
      </div>
    </>
  )
}
