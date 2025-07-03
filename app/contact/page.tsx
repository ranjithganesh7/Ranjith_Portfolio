"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Github, Linkedin, Code, Send, MapPin, Clock, Star } from "lucide-react"
import FloatingElements from "@/components/floating-elements"
import { useState } from "react"

export default function ContactPage() {


  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:ranjithganeshb@gmail.com",
      label: "ranjithganeshb@gmail.com",
      color: "bg-gradient-to-r from-gray-700 to-gray-800",
      hoverColor: "hover:from-gray-600 hover:to-gray-700",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ranjithganeshb",
      label: "LinkedIn",
      color: "bg-gradient-to-r from-gray-800 to-black",
      hoverColor: "hover:from-gray-700 hover:to-gray-800",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/ranjithganesh7",
      label: "GitHub",
      color: "bg-gradient-to-r from-black to-gray-900",
      hoverColor: "hover:from-gray-900 hover:to-gray-800",
    },
    {
      name: "LeetCode",
      icon: Code,
      href: "https://leetcode.com/u/ranjithganeshb_07/",
      label: "LeetCode",
      color: "bg-gradient-to-r from-gray-600 to-gray-700",
      hoverColor: "hover:from-gray-500 hover:to-gray-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-black to-gray-900 relative overflow-hidden">
      <FloatingElements />

      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In{" "}
              <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Let's connect and discuss opportunities, collaborations, or just have a chat about tech!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mr-4 border border-white/20">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">Send me a message</h2>
              </div>

              <form action="https://formsubmit.co/ranjithganeshsec@gmail.com" method="POST" className="space-y-6 w-full">
  <div className="flex flex-col gap-2">
    <label htmlFor="name" className="block text-white font-medium">Your Name</label>
    <input
      id="name"
      name="name"
      type="text"
      required
      className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-white focus:ring-white/50 rounded-2xl h-12 transition-all duration-300 w-full px-4"
      placeholder="Enter your full name"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="email" className="block text-white font-medium">Email Address</label>
    <input
      id="email"
      name="email"
      type="email"
      required
      className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-white focus:ring-white/50 rounded-2xl h-12 transition-all duration-300 w-full px-4"
      placeholder="your.email@example.com"
    />
  </div>

  <div className="flex flex-col gap-2">
    <label htmlFor="message" className="block text-white font-medium">Message</label>
    <textarea
      id="message"
      name="message"
      required
      rows={5}
      className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-white focus:ring-white/50 rounded-2xl resize-none transition-all duration-300 w-full px-4 py-3"
      placeholder="Tell me about your project, opportunity, or just say hello!"
    />
  </div>

  <button
    type="submit"
    className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition h-12 px-4 flex items-center justify-center"
  >
    <Send className="mr-3 h-6 w-6" />
    Send Message
  </button>
</form>
            </div>

            {/* Enhanced Social Links */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-black rounded-2xl flex items-center justify-center mr-4 border border-white/20">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Connect with me</h2>
                </div>

                <div className="space-y-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-white/5 rounded-2xl border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300 group hover:scale-105"
                    >
                      <div className="flex items-center">
                        <link.icon className="mr-3 h-5 w-5 text-white" />
                        <span className="text-white group-hover:text-gray-300 transition-colors">{link.label}</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
