// "use client"
// import { Canvas, useLoader } from "@react-three/fiber"
// import { useRef } from "react"
// import { TextureLoader } from "three"

// export default function HeroGlobe() {
//   const scene = useRef(null)

//   const [color, normal, aoMap] = useLoader(TextureLoader, [
//     "/globe/color.jpg",
//     "/globe/normal.png",
//     "/globe/occlusion.jpg",
//   ])

//   return (
//     <Canvas ref={scene}>
//       <ambientLight intensity={0.1} />
//       <directionalLight intensity={3.5} position={[100, 0, 80]} />
//       <mesh scale={2.8}>
//         <sphereGeometry args={[1, 64, 64]} />
//         <meshStandardMaterial map={color} normalMap={normal} aoMap={aoMap} />
//       </mesh>
//     </Canvas>
//   )
// }
