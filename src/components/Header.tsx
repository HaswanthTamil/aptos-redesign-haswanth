// /components/Header.tsx

"use client"
import Image from "next/image"
import Link from "next/link"
// import { useEffect, useState } from "react"

const navItems = ["Home", "Discover", "Build", "Connect"]

const Header = () => {
  //   const [isSticky, setIsSticky] = useState(false)

  //   useEffect(() => {
  //     const onScroll = () => setIsSticky(window.scrollY > 1)
  //     window.addEventListener("scroll", onScroll)
  //     return () => window.removeEventListener("scroll", onScroll)
  //   }, [])

  const isSticky = false

  return (
    <>
      <header
        className={`transition-all duration-300 ease-in-out ${
          isSticky
            ? "fixed top-0 left-0 w-full z-50 bg-white shadow"
            : "relative mt-[30px]"
        }`}
      >
        <div className="mx-auto flex flex-row border-2 border-[var(--fadeblue)] rounded-2xl px-4 items-center justify-between">
          <Image src="/aptos.svg" alt="Aptos" width={100} height={100} />
          <div className="flex flex-row w-[50%] items-center justify-between text-gray-100/70 font-mono">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href="/"
                className="relative group text-lg font-medium transition duration-300 hover:text-[var(--fadeblue)] hover:-translate-y-1"
              >
                <span>{item}</span>
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[var(--fadeblue)] transition-all duration-300 group-hover:left-0 group-hover:w-full" />
              </Link>
            ))}
          </div>
          <div className="border border-gray-100 px-2 rounded-md hover:text-[var(--fadeblue)] hover:border-[var(--fadeblue)] transition-all duration-300 ease-in-out">
            <Link href="/">Get Started</Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
