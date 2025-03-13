"use client"

import Link from "next/link"
import Image from "next/image"
import { Mono } from "@/lib/fonts"
import ThemeToggle from "@/components/theme-toggle"
import { useColorTheme } from "@/components/color-theme-provider"

export default function Home() {
  const { bgColor } = useColorTheme()

  return (
    <main
      className="min-h-screen p-8 md:p-12 transition-colors duration-300 dark:text-white"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className={`${Mono.className} text-3xl md:text-4xl font-bold text-black dark:text-white mb-1`}>
              Euler Alvarenga
            </h1>
            <p className={`${Mono.className} text-sm md:text-base text-black dark:text-gray-300`}>Engineer portfolio</p>
          </div>
          <ThemeToggle />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* About Me Card */}
          <div>
            <Link href="/about" className="block">
              <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <Image
                  src="/image.png"
                  alt="About Me"
                  width={500}
                  height={500}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <p className={`${Mono.className} text-center mt-2 text-black dark:text-white`}>About Me</p>
            </Link>
          </div>

          {/* Apps Group Card */}
          <div>
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow aspect-square">
              <div className="grid grid-cols-2 gap-3 p-4 h-full">
                <AppIcon title="Bubble Sparkle" icon="✨" bgColor="bg-[#e0f5e9] dark:bg-[#1a3b2a]" href="/projects/bubblesparkle" />
                <AppIcon
                  title="Bubble Sparkle"
                  icon="🫐"
                  bgColor="bg-[#f9f3e5] dark:bg-[#3b3020]"
                  href="/projects/bubblesparkle"
                />
                <AppIcon title="MiniHog" icon="🦔" bgColor="bg-[#d9e8f5] dark:bg-[#1e2a3b]" href="/projects/minihog" />
                <AppIcon title="Tuna" icon="🐟" bgColor="bg-[#e5d9c0] dark:bg-[#3b2e1a]" href="/projects/tuna" />
              </div>
            </div>
            <p className={`${Mono.className} text-center mt-2 text-black dark:text-white`}>Featured Apps</p>
          </div>
        </div>

        {/* Second Row of Projects */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <ProjectCard
            title="Todewy"
            imageUrl="/placeholder.svg?height=200&width=200&text=💧"
            bgColor="bg-[#d9f0f7] dark:bg-[#1a2e3b]"
            href="/projects/todewy"
          />
          <ProjectCard
            title="Monthly"
            imageUrl="/placeholder.svg?height=200&width=200&text=☁️"
            bgColor="bg-[#d9e8f5] dark:bg-[#1e2a3b]"
            href="/projects/monthly"
          />
          <div className="col-span-2 md:col-span-1">
            <Link href="/projects/build-apps" className="block">
              <div className="bg-[#f0f5f9] dark:bg-[#1a2029] rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow aspect-square flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="text-4xl mb-2">💻</div>
                  <div className={`${Mono.className} text-sm text-center dark:text-white`}>
                    <div>engineer</div>
                    <div>portfolio</div>
                    <div className="text-[#e74c3c] text-xl font-bold mt-2">CAMP</div>
                  </div>
                </div>
              </div>
              <p className={`${Mono.className} text-center mt-2 text-black dark:text-white`}>How to Build Apps</p>
            </Link>
          </div>
        </div>

        {/* Third Row of Projects */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <ProjectCard
            title="Arena"
            imageUrl="/placeholder.svg?height=200&width=200&text=🎮"
            bgColor="bg-white dark:bg-gray-800"
            href="/projects/arena"
          />
          <ProjectCard
            title="Osmoosis"
            imageUrl="/placeholder.svg?height=200&width=200&text=💡"
            bgColor="bg-[#a7d1f9] dark:bg-[#1a3b5c]"
            href="/projects/osmoosis"
          />
          <ProjectCard
            title="Blog"
            imageUrl="/placeholder.svg?height=200&width=200&text=✏️"
            bgColor="bg-[#f9e0d9] dark:bg-[#3b2a26]"
            href="/blog"
          />
        </div>

        {/* Social Media Row */}
        <div className="mt-12">
          <h2 className={`${Mono.className} text-xl font-bold mb-4 text-center text-black dark:text-white`}>
            Connect With Me
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            <SocialCard
              title="Instagram"
              icon="📸"
              bgColor="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]"
              href="https://instagram.com/yourusername"
            />
            <SocialCard
              title="TikTok"
              icon="🎵"
              bgColor="bg-black"
              href="https://tiktok.com/@yourusername"
              textColor="text-white"
            />
            <SocialCard
              title="YouTube"
              icon="🎬"
              bgColor="bg-[#FF0000]"
              href="https://youtube.com/@yourusername"
              textColor="text-white"
            />
            <SocialCard
              title="GitHub"
              icon="💻"
              bgColor="bg-[#333333]"
              href="https://github.com/yourusername"
              textColor="text-white"
            />
            <SocialCard
              title="LinkedIn"
              icon="👔"
              bgColor="bg-[#0077B5]"
              href="https://linkedin.com/in/yourusername"
              textColor="text-white"
            />
          </div>
        </div>

        {/* Footer Banner */}
        <div className="mt-12 rounded-3xl overflow-hidden shadow-sm">
          <Image
            src="/placeholder.svg?height=200&width=1000&text=🐋"
            alt="Footer Banner"
            className="w-full h-32 object-cover"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  )
}

interface ProjectCardProps {
  title: string
  imageUrl: string
  bgColor: string
  href: string
}

function ProjectCard({ title, imageUrl, bgColor, href }: ProjectCardProps) {
  return (
    <div>
      <Link href={href} className="block">
        <div
          className={`${bgColor} rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow aspect-square flex items-center justify-center`}
        >
          <Image src={imageUrl || "/placeholder.svg"} alt={title} className="w-3/4 h-3/4 object-contain"  width={500}
                  height={500} />
        </div>
        <p className={`${Mono.className} text-center mt-2 text-black dark:text-white`}>{title}</p>
      </Link>
    </div>
  )
}

interface SocialCardProps {
  title: string
  icon: string
  bgColor: string
  href: string
  textColor?: string
}

function SocialCard({ title, icon, bgColor, href, textColor = "text-black" }: SocialCardProps) {
  return (
    <div>
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        <div
          className={`${bgColor} rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:scale-105 aspect-square flex items-center justify-center`}
        >
          <div className="text-3xl">{icon}</div>
        </div>
        <p
          className={`${Mono.className} text-center mt-2 ${textColor === "text-white" ? "text-white" : "dark:text-white " + textColor}`}
        >
          {title}
        </p>
      </a>
    </div>
  )
}

interface AppIconProps {
  title: string
  icon: string
  bgColor: string
  href: string
}

function AppIcon({ title, icon, bgColor, href }: AppIconProps) {
  return (
    <Link href={href} className="block">
      <div
        className={`${bgColor} rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:scale-105 aspect-square flex flex-col items-center justify-center p-2`}
      >
        <div className="text-3xl mb-1">{icon}</div>
        <p className={`${Mono.className} text-xs text-center dark:text-white`}>{title}</p>
      </div>
    </Link>
  )
}

