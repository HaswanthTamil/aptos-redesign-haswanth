// /app/page.tsx

"use client"
import ParticlesBG from "@/components/backgrounds/ParticlesBG"
import Hero from "@/pages/Hero"

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-black relative z-0 text-white">
        <ParticlesBG />
        <Hero />
      </div>
    </>
  )
}
