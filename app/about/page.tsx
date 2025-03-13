"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Mono } from "@/lib/fonts"
import ThemeToggle from "@/components/theme-toggle"
import { useColorTheme } from "@/components/color-theme-provider"

export default function AboutPage() {
  const { bgColor } = useColorTheme()

  return (
    <main className="min-h-screen p-8 md:p-12 transition-colors duration-300" style={{ backgroundColor: bgColor }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className={`${Mono.className} flex items-center text-black dark:text-white hover:underline`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            back to home
          </Link>
          <ThemeToggle />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm p-8 md:p-12 transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image src="/placeholder.svg?height=400&width=400" alt="About Me" className="w-full rounded-2xl"  width={500}
                  height={500} />
            </div>
            <div>
              <h1 className={`${Mono.className} text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white`}>
                Euler Alvarenga
              </h1>
              <div className={`${Mono.className} space-y-4 text-black dark:text-gray-200`}>
                <p>Hi! I&apos;m a software engineer who loves building fun and useful applications.</p>
                <p>
                  I specialize in frontend development with React and Next.js, but I also enjoy working on full-stack
                  projects.
                </p>
                <p>When I&apos;m not coding, you can find me reading, hiking, or trying out new recipes.</p>
                <p>Feel free to check out my projects or get in touch if you&apos;d like to collaborate!</p>
              </div>

              <div className="mt-8">
                <h2 className={`${Mono.className} text-xl font-bold mb-3 text-black dark:text-white`}>Contact</h2>
                <div className={`${Mono.className} space-y-2 text-black dark:text-gray-200`}>
                  <p>Email: hello@example.com</p>
                  <p>GitHub: github.com/yourusername</p>
                  <p>Twitter: @yourusername</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

