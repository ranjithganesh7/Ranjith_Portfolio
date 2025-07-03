"use client"

import { useEffect, useState } from "react"

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Monochromatic floating circles */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-gray-600/20 to-gray-700/20 rounded-full animate-pulse blur-sm"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-gray-500/15 to-gray-600/15 rounded-full animate-bounce blur-sm"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-gray-400/20 to-gray-500/20 rounded-full animate-pulse blur-sm"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-gray-700/15 to-gray-800/15 rounded-full animate-bounce blur-sm"
        style={{ animationDelay: "0.5s" }}
      ></div>

      {/* Floating geometric shapes */}
      <div
        className="absolute top-60 left-1/4 w-8 h-8 bg-gradient-to-r from-gray-600/30 to-gray-700/30 rotate-45 animate-spin blur-sm"
        style={{ animationDuration: "10s" }}
      ></div>
      <div
        className="absolute bottom-60 right-1/4 w-6 h-6 bg-gradient-to-r from-gray-500/25 to-gray-600/25 rotate-45 animate-spin blur-sm"
        style={{ animationDuration: "15s", animationDelay: "3s" }}
      ></div>

      {/* Large gradient orbs */}
      <div
        className="absolute top-1/3 right-1/3 w-32 h-32 bg-gradient-to-r from-gray-600/15 to-gray-700/15 rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-gradient-to-r from-gray-500/10 to-gray-600/10 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2.5s" }}
      ></div>

      {/* Additional monochromatic elements */}
      <div
        className="absolute top-1/2 left-10 w-14 h-14 bg-gradient-to-r from-gray-700/20 to-gray-800/20 rounded-full animate-bounce blur-sm"
        style={{ animationDelay: "4s", animationDuration: "8s" }}
      ></div>
      <div
        className="absolute top-3/4 right-1/2 w-10 h-10 bg-gradient-to-r from-gray-600/25 to-gray-700/25 rounded-full animate-pulse blur-sm"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Floating triangles */}
      <div
        className="absolute top-1/4 right-1/4 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-gray-600/25 animate-bounce blur-sm"
        style={{ animationDelay: "2s", animationDuration: "6s" }}
      ></div>
      <div
        className="absolute bottom-1/4 left-1/2 w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-gray-500/30 animate-pulse blur-sm"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Silver accent elements */}
      <div
        className="absolute top-1/6 right-1/6 w-4 h-4 bg-gradient-to-r from-gray-300/40 to-gray-400/40 rounded-full animate-pulse"
        style={{ animationDelay: "3s" }}
      ></div>
      <div
        className="absolute bottom-1/6 left-1/6 w-6 h-6 bg-gradient-to-r from-gray-400/30 to-gray-500/30 rounded-full animate-bounce"
        style={{ animationDelay: "5s", animationDuration: "4s" }}
      ></div>
    </div>
  )
}
