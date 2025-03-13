"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-full ${
          theme === "light" ? "bg-amber-100 dark:bg-amber-800" : "hover:bg-gray-200 dark:hover:bg-gray-700"
        } transition-colors`}
        aria-label="Light mode"
      >
        <Sun className="h-5 w-5 text-amber-600 dark:text-amber-300" />
      </button>
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-full ${
          theme === "dark" ? "bg-indigo-100 dark:bg-indigo-900" : "hover:bg-gray-200 dark:hover:bg-gray-700"
        } transition-colors`}
        aria-label="Dark mode"
      >
        <Moon className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
      </button>
      <button
        onClick={() => setTheme("system")}
        className={`p-2 rounded-full ${
          theme === "system" ? "bg-gray-200 dark:bg-gray-700" : "hover:bg-gray-200 dark:hover:bg-gray-700"
        } transition-colors`}
        aria-label="System theme"
      >
        <Monitor className="h-5 w-5 text-gray-600 dark:text-gray-300" />
      </button>
    </div>
  )
}

