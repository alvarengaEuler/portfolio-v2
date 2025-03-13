"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

// Define 5 pastel color palettes (light mode and dark mode versions)
const colorPalettes = [
  {
    light: "#e8d0a9", // Original beige
    dark: "#2d2a20",
  },
  {
    light: "#90f1ef", // Mint pastel
    dark: "#1a2e2b",
  },
  {
    light: "#d0d1e8", // Lavender pastel
    dark: "#1e1f2e",
  },
  {
    light: "#ffd6e0", // Pink pastel
    dark: "#2e1a2a",
  },
  {
    light: "#7bf1a8", // Light green pastel
    dark: "#1e2e1a",
  },
]

type ColorThemeContextType = {
  bgColor: string
}

const ColorThemeContext = createContext<ColorThemeContextType>({ bgColor: colorPalettes[0].light })

export function ColorThemeProvider({ children }: { children: React.ReactNode }) {
  const [bgColor, setBgColor] = useState<string>(colorPalettes[0].light)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check if dark mode is active
    // const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    const isDark = document.documentElement.classList.contains("dark")
    setIsDarkMode(isDark)

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class" &&
          mutation.target === document.documentElement
        ) {
          setIsDarkMode(document.documentElement.classList.contains("dark"))
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    // Get or initialize reload count
    let reloadCount = Number.parseInt(localStorage.getItem("reloadCount") || "0")

    // Get or initialize color index
    let colorIndex = Number.parseInt(localStorage.getItem("colorIndex") || "0")

    // Increment reload count
    reloadCount += 1
    localStorage.setItem("reloadCount", reloadCount.toString())

    // Change color if it's the first load or after every 2 reloads
    if (reloadCount === 1 || reloadCount % 2 === 0) {
      // Move to next color
      colorIndex = (colorIndex + 1) % colorPalettes.length
      localStorage.setItem("colorIndex", colorIndex.toString())
    }

    // Apply the color based on current theme
    const selectedPalette = colorPalettes[colorIndex]
    setBgColor(isDark ? selectedPalette.dark : selectedPalette.light)

    // Update color when theme changes
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains("dark")
      setBgColor(isDark ? selectedPalette.dark : selectedPalette.light)
    }

    window.addEventListener("themeChange", handleThemeChange)

    return () => {
      observer.disconnect()
      window.removeEventListener("themeChange", handleThemeChange)
    }
  }, [])

  // Update color when dark mode changes
  useEffect(() => {
    const colorIndex = Number.parseInt(localStorage.getItem("colorIndex") || "0")
    const selectedPalette = colorPalettes[colorIndex]
    setBgColor(isDarkMode ? selectedPalette.dark : selectedPalette.light)
  }, [isDarkMode])

  return <ColorThemeContext.Provider value={{ bgColor }}>{children}</ColorThemeContext.Provider>
}

export const useColorTheme = () => useContext(ColorThemeContext)

