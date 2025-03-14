"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Mono } from "@/lib/fonts"
import ThemeToggle from "@/components/theme-toggle"
import { useColorTheme } from "@/components/color-theme-provider"
import { useParams } from "next/navigation"

// This would typically come from a CMS or database
const projects = {
  bubblesparkle: {
    title: "Bubble Spark",
    description: "A recipe app that helps you find recipes based on ingredients you have.",
    longDescription:
      "iDigest is a web application that helps users find recipes based on the ingredients they have at home. It uses a sophisticated algorithm to match ingredients with recipes and provides nutritional information for each recipe.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=✨",
    bgColor: "bg-[#e0f5e9] dark:bg-[#1a3b2a]",
    link: "https://idigest.example.com",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  inkberry: {
    title: "Inkberry",
    description: "A minimalist note-taking app with markdown support.",
    longDescription:
      "Inkberry is a clean, minimalist note-taking application that supports markdown formatting. It&apos;s designed for writers, students, and professionals who want a distraction-free writing environment with powerful organization features.",
    imageUrl: "/placeholder.svg?height=400&width=400&text=🫐",
    bgColor: "bg-[#f9f3e5] dark:bg-[#3b3020]",
    link: "https://inkberry.example.com",
    technologies: ["React", "Firebase", "TypeScript"],
  },
  programming: {
    title: "Curso de Lógica de Programação Básica",
    description: "Prepare-se para programar, criar e transformar ideias em soluções!",
    longDescription:
      "Aqui você aprende desde o zero, com exemplos que fazem sentido na sua rotina, como calcular seu IMC, planejar uma dieta saudável, organizar o treino e até criar seu próprio plano de alimentação e exercícios em formato de código! Tudo isso com linguagem simples, exercícios interativos e desafios reais..",
    imageUrl: "/dieta.webp?height=500&width=500&text=🫐",
    bgColor: "bg-[#f9f3e5] dark:bg-[#3b3020]",
    link: "https://docs.google.com/document/d/1kYh8WIqDqoRtF7X_niqUhSdUrerU6dKKaIN2B3Wmzmc/edit?usp=sharing",
    technologies: ["Algoritmos", "Visualg", "Portugol", "Python"],
  },
  // Other projects...
}

export default function ProjectPage(){
  const params = useParams<{ slug: string }>()

  const { slug } = params
  const project = projects[slug as keyof typeof projects]
  const { bgColor } = useColorTheme()

  if (!project) {
    return (
      <div className="min-h-screen p-8 md:p-12 transition-colors duration-300" style={{ backgroundColor: bgColor }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className={`${Mono.className} flex items-center text-black dark:text-white hover:underline`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              back to home
            </Link>
            <ThemeToggle />
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm p-8 text-center transition-colors duration-300">
            <h1 className={`${Mono.className} text-2xl font-bold mb-4 text-black dark:text-white`}>
              Project Not Found
            </h1>
            <p className={`${Mono.className} text-black dark:text-gray-200 mb-6`}>
              The project you&apos;re looking for doesn&apos;t exist or has been removed.
            </p>
            <Link href="/" className={`${Mono.className} text-black dark:text-white underline`}>
              Return to home
            </Link>
          </div>
        </div>
      </div>
    )
  }

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

        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm p-6 md:p-12 transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start ">
            <div className={`${project.bgColor} rounded-2xl p-4 flex items-center justify-center aspect-square `}>
              <Image
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                className="w-[90%] h-[90%] object-contain"
                width={500}
                height={500}
              />
            </div>
            <div>
              <h1 className={`${Mono.className} text-2xl md:text-3xl font-bold mb-4 text-black dark:text-white`}>
                {project.title}
              </h1>
              <p className={`${Mono.className} text-black dark:text-gray-200 mb-6`}>{project.description}</p>

              <div className="mb-6">
                <h2 className={`${Mono.className} text-lg font-bold mb-2 text-black dark:text-white`}>
                  About this project
                </h2>
                <p className={`${Mono.className} text-black dark:text-gray-200`}>{project.longDescription}</p>
              </div>

              <div className="mb-6">
                <h2 className={`${Mono.className} text-lg font-bold mb-2 text-black dark:text-white`}>Technologies</h2>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`${Mono.className} inline-block bg-[#f0f0f0] dark:bg-gray-700 rounded-full px-3 py-1 text-sm text-black dark:text-white`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${Mono.className} inline-block bg-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-colors`}
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

