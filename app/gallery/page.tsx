import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Award, Users, Code, Trophy, Heart, Zap } from "lucide-react"
import FloatingElements from "@/components/floating-elements"
import Image from "next/image"

export default function GalleryPage() {
  const galleryItems = [
    {
      title: "Ease the Error 5.0 – FortiTwin",
      description:
        "Our AI-powered interview system — FortiTwin — won recognition at SVCE. It included cheat-proof proctoring, a GPT-4.0-based interviewer, and ML-driven real-time analytics.",
      image: "/Fortitwin.jpeg",
      tags: ["Machine Learning", "OpenCV", "GPT-4.0"],
    },
    {
      title: "E-Axion 2025 – 1st Place",
      description:
        "Secured 1st place at the national symposium hosted by St. Joseph’s Institute of Tech for solving complex circuit problems.",
      image: "/eaxion.jpeg",
      tags: ["Circuits", "Problem Solving", "ECE"],
    },
    {
      title: "CODEHIVE’25 – 3rd Place",
      description:
        "Developed a cybersecurity suite with MTD and a reverse shell detection system. Recognized for innovation at Vel Tech’s hackathon.",
      image: "/Veltech.jpeg",
      tags: ["Cybersecurity", "MTD", "Reverse Shell"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">
      <FloatingElements />

      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Gallery</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Memorable moments from my journey in tech, design, and professional growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl hover:from-white/15 hover:to-white/10 hover:scale-105 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="tag bg-gray-700 text-gray-200 px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-3xl flex items-center justify-center border border-white/20">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Want to see more of my work?</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Explore my complete portfolio on GitHub and connect with me on LinkedIn for the latest updates and
                professional insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/ranjithganesh7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-white text-black hover:bg-gray-100 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/ranjithganeshb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/20"
                >
                  <Users className="mr-2 h-5 w-5" />
                  LinkedIn Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
