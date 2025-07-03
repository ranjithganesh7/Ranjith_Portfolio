"use client";

import { Button } from "@/components/ui/button"
import { Download, MapPin, Calendar } from "lucide-react"
import Link from "next/link"
import FloatingElements from "@/components/floating-elements"
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import "@/components/ProfileCard/ProfileCard.css";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
      <FloatingElements />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
                  <MapPin className="mr-2 h-4 w-4 text-white" />
                  <span className="text-white text-sm">Chennai, Tamil Nadu</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Hi, I'm Ranjith Ganesh B
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                  Aspiring Software Engineer & Data Analyst passionate about building impactful and intelligent software.
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition"
                >
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Right Content */}
            <div className="mt-12 md:mt-0 md:ml-12 flex justify-center">
  <ProfileCard
    name="Ranjith Ganesh B"
    title="Aspiring Software Engineer & Data Analyst"
    handle="ranjithcodes"
    status="Online"
    contactText="Contact Me"
    avatarUrl="/Ranjith_img.png"
    miniAvatarUrl="/mini.png"
    showUserInfo={true}
    enableTilt={true}
    onContactClick={() => {
      if (typeof window !== "undefined") {
        window.location.href = "/contact";
      }
    }}
  />
</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">About Me</h2>
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I am a full-stack developer and data enthusiast with a strong foundation in modern web technologies and a passion for building scalable, impactful solutions.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My journey includes delivering complete web applications, participating in national-level hackathons, and gaining hands-on professional experience in software development and data analysis.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Professional Experience</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-white/80 mr-2">•</span>
                      <span className="text-gray-300">Over a year of hands-on experience in software development, working across both front-end technologies.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/80 mr-2">•</span>
                      <span className="text-gray-300">Proficient in building scalable, performant applications using React, Next.js, and TypeScript.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/80 mr-2">•</span>
                      <span className="text-gray-300">Strong foundation in data analysis and visualization, leveraging tools like Pandas, Power BI, and Matplotlib to extract actionable insights.</span>
                    </li>
                  </ul>
                </div> 
                <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Key Achievements</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-white/80 mr-2">•</span>
                      <span className="text-gray-300">Delivered full-stack web applications with end-to-end architecture using modern frameworks.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/80 mr-2">•</span>
                      <span className="text-gray-300">Participated in national-level hackathons, earning awards for innovative problem-solving and technical execution.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/80 mr-2">•</span>
                      <span className="text-gray-300">Proactively explored emerging technologies such as Machine Learning and Data Science, applying them to build practical solutions with a social impact.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
