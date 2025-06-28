"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { loadFull } from "tsparticles"

// Dynamically import the Particles component (avoids SSR crash)
const Particles = dynamic(() => import("@tsparticles/react"), { ssr: false })

const ParticlesBG = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    const load = async () => {
      const { initParticlesEngine } = await import("@tsparticles/react")
      await initParticlesEngine(async (engine) => {
        await loadFull(engine)
      })
      setInit(true)
    }
    load()
  }, [])

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          style={{
            zIndex: 1,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onClick: { enable: false },
                onHover: { enable: false },
                resize: { enable: false },
              },
            },
            particles: {
              color: { value: "#00BFFF" },
              links: {
                color: "#00BFFF",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1.2,
                direction: "none",
                outModes: { default: "bounce" },
              },
              number: {
                value: 80,
                density: { enable: true, width: 800, height: 800 },
              },
              opacity: { value: 0.5 },
              shape: { type: ["circle", "square", "square", "triangle"] },
              size: { value: { min: 1, max: 3 } },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  )
}

export default ParticlesBG
