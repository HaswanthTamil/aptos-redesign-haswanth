// components/HeroGlobe.tsx
"use client"

import { useRef, useEffect } from "react"
import dynamic from "next/dynamic"
import type { GlobeMethods } from "react-globe.gl"
import * as THREE from "three"

// 🧠 Extend the GlobeMethods to include `globeMaterial()`
interface ExtendedGlobeMethods extends GlobeMethods {
  globeMaterial: () => THREE.MeshStandardMaterial
}

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false })

export default function HeroGlobe() {
  const globeRef = useRef<ExtendedGlobeMethods | undefined>(undefined)

  useEffect(() => {
    if (!globeRef.current) return

    const globe = globeRef.current
    globe.controls().autoRotate = true
    globe.controls().autoRotateSpeed = 0.3

    const mat = globe.globeMaterial()
    mat.color.set("#ffffff")
    mat.opacity = 0.2
    mat.transparent = true
  }, [])

  return (
    <div className="absolute inset-0 -z-10">
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
        backgroundColor="transparent"
        arcsData={[]}
        labelsData={[]}
        pointsData={[]}
        polygonsData={[]}
      />
    </div>
  )
}
