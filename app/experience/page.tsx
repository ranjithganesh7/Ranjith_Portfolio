import { Calendar, MapPin, Building, Award, Users, Lightbulb } from "lucide-react"
import FloatingElements from "@/components/floating-elements"
import { Button } from "@/components/ui/button"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Creative Designer",
      company: "Tech Society, Saveetha",
      period: "2024 – Present",
      location: "Chennai, India",
      type: "Current Role",
      typeColor: "bg-gradient-to-r from-white to-gray-200 text-black",
      description:
        "Leading creative design initiatives for the tech society, creating visual content for events, workshops, and digital platforms. Collaborating with cross-functional teams to enhance the society's brand presence.",
      highlights: [
        "Designed promotional materials for 15+ tech events",
        "Increased social media engagement by 40%",
        "Led a team of 5 junior designers",
        "Created brand guidelines and design systems",
      ],
      icon: Lightbulb,
      accentColor: "from-gray-600 to-gray-800",
    },
    {
      title: "Graphic Design Intern",
      company: "Little Paws Care (NGO)",
      period: "2025 – Present",
      location: "Remote",
      type: "Volunteer",
      typeColor: "bg-gradient-to-r from-gray-300 to-gray-400 text-black",
      description:
        "Contributing design expertise to support animal welfare initiatives. Creating impactful visual content to raise awareness and drive donations for animal rescue operations.",
      highlights: [
        "Designed infographics for awareness campaigns",
        "Created content for social media",
        "Analyzed posts to improve strategy",
        "Contributed graphics to outreach efforts",
      ],
      icon: Users,
      accentColor: "from-gray-700 to-gray-900",
    },
    {
      title: "Customer Service Intern",
      company: "Sutherland",
      period: "Jan – Feb 2025",
      location: "Chennai, India",
      type: "Internship",
      typeColor: "bg-gradient-to-r from-gray-400 to-gray-500 text-white",
      description:
        "Gained valuable experience in customer relationship management and problem-solving. Developed strong communication skills while handling diverse customer inquiries and technical support.",
      highlights: [
        "Maintained 95% customer satisfaction rating",
        "Resolved 50+ customer queries daily",
        "Completed advanced communication training",
        "Recognized for exceptional problem-solving skills",
      ],
      icon: Award,
      accentColor: "from-gray-800 to-black",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      <FloatingElements />

      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-gray-300 to-white bg-clip-text text-transparent">Experience</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              My professional journey across design, technology, and customer service
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl hover:from-white/15 hover:to-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0 flex-1">
                    <div className="flex items-center mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${exp.accentColor} rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 border border-white/20`}
                      >
                        <exp.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="flex items-center text-gray-300">
                          <Building className="mr-2 h-4 w-4" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`${exp.typeColor} px-4 py-2 rounded-full text-sm font-semibold shadow-lg self-start border border-white/20`}
                  >
                    {exp.type}
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6 leading-relaxed">{exp.description}</p>

                <div className="bg-white/5 rounded-2xl p-6 border border-white/20">
                  <h4 className="text-white font-semibold mb-4 flex items-center">
                    <Award className="mr-2 h-5 w-5 text-gray-300" />
                    Key Highlights
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-white mr-3 text-lg">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-4">Interested in working together?</h2>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new opportunities and exciting projects
              </p>
              <Button
                asChild
                variant="default"
                className="px-8 py-3 text-white text-base bg-purple-600 hover:bg-purple-700"
              >
                <a href="/contact">Let's Connect</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
