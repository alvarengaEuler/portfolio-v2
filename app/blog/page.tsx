"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Mono } from "@/lib/fonts"
import ThemeToggle from "@/components/theme-toggle"
import { useColorTheme } from "@/components/color-theme-provider"

const blogPosts = [
  {
    id: 1,
    title: "How I Built a Recipe App with React",
    date: "March 10, 2025",
    excerpt:
      "A deep dive into the process of building iDigest, a recipe app that helps you find recipes based on ingredients you have.",
    slug: "how-i-built-recipe-app",
  },
  // Other blog posts...
]

export default function BlogPage() {
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
          <h1 className={`${Mono.className} text-2xl md:text-3xl font-bold mb-8 text-black dark:text-white`}>Blog</h1>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-8 last:border-0">
                <Link href={`/blog/${post.slug}`} className="block group">
                  <h2
                    className={`${Mono.className} text-xl font-bold mb-2 text-black dark:text-white group-hover:underline`}
                  >
                    {post.title}
                  </h2>
                  <p className={`${Mono.className} text-sm text-gray-500 dark:text-gray-400 mb-3`}>{post.date}</p>
                  <p className={`${Mono.className} text-black dark:text-gray-200`}>{post.excerpt}</p>
                  <p className={`${Mono.className} text-black dark:text-white mt-3 group-hover:underline inline-block`}>
                    Read more →
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

