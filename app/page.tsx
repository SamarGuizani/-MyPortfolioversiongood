"use client"

import { useState, useEffect } from "react"
import { AnimatedRobot } from "@/components/animated-robot"
import { BackgroundParticles } from "@/components/background-particles"
import { CVDownload } from "@/components/cv-download"
import { ContactForm } from "@/app/components/ContactForm"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Globe, Smartphone } from "lucide-react"
import Link from "next/link"

function ProjectCard() {
  const [isExpanded, setIsExpanded] = useState(false)

  const shortDescription = "Creating an intelligent tourism application that allows users to discover iconic sites..."
  const fullDescription =
    "Creating an intelligent tourism application that allows users to discover iconic sites, local activities and personalized services according to their location. The application integrates an interactive map and real-time recommendations."

  return (
    <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-blue-300 flex items-center gap-2">
          <Globe className="h-5 w-5" />
          TouriGuide
        </CardTitle>
        <CardDescription className="text-gray-400">01/03/2025 – ONGOING</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300 mb-4">
          {isExpanded ? fullDescription : shortDescription}
          {!isExpanded && (
            <button onClick={() => setIsExpanded(true)} className="text-blue-400 hover:text-blue-300 ml-1 underline">
              (more)
            </button>
          )}
          {isExpanded && (
            <button onClick={() => setIsExpanded(false)} className="text-blue-400 hover:text-blue-300 ml-2 underline">
              (less)
            </button>
          )}
        </p>
        <div className="flex gap-2">
          <Button size="sm" className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30">
            <ExternalLink className="h-4 w-4 mr-2" />
            View Project
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <BackgroundParticles />
      <Navigation activeSection={activeSection} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Samar Guizani
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">Full Stack Developer & Software Engineering Student</p>
              <p className="text-lg text-gray-400 max-w-2xl">
                Passionate about innovative technologies, software development and designing efficient IT solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                asChild
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
              <CVDownload />
              <Button
                variant="outline"
                asChild
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent"
              >
                <Link href="#projects">My Projects</Link>
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-teal-400 hover:text-teal-300 hover:bg-teal-500/10"
              >
                <Link href="https://github.com/SamarGuizani" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
              >
                <Link href="https://linkedin.com/in/samar-guizani" target="_blank">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10"
              >
                <Link href="mailto:guizanisamar@ieee.org">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <AnimatedRobot />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block animate-fade-in-up">
              <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-teal-400 mx-auto mb-4 animate-triangle-appear"></div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent animate-title-appear">
                About Me
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center animate-content-appear">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Student in 2nd year Bachelor's in Software Engineering and Information Systems at the Faculty of
                Sciences of Gabès, I am passionate about innovative technologies and the development of efficient IT
                solutions.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Equipped with a solid analytical mind and great intellectual curiosity, I constantly seek to apply my
                academic knowledge in a stimulating professional environment.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border-teal-500/20">
                <CardContent className="p-6 text-center">
                  <Code className="h-8 w-8 text-teal-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-teal-300">Development</h3>
                  <p className="text-sm text-gray-400">Full Stack</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
                <CardContent className="p-6 text-center">
                  <Database className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-300">Database</h3>
                  <p className="text-sm text-gray-400">SQL & NoSQL</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500/10 to-teal-500/10 border-purple-500/20">
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-purple-300">Web</h3>
                  <p className="text-sm text-gray-400">React & Next.js</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-teal-500/10 to-purple-500/10 border-teal-500/20">
                <CardContent className="p-6 text-center">
                  <Smartphone className="h-8 w-8 text-teal-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-teal-300">Mobile</h3>
                  <p className="text-sm text-gray-400">Applications</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block animate-fade-in-up">
              <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-blue-400 mx-auto mb-4 animate-triangle-appear"></div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent animate-title-appear">
                Technical Skills
              </h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 animate-content-appear">
            <Card className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border-teal-500/20">
              <CardHeader>
                <CardTitle className="text-teal-300">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-teal-500/20 text-teal-300">
                    HTML5
                  </Badge>
                  <Badge variant="secondary" className="bg-teal-500/20 text-teal-300">
                    CSS3
                  </Badge>
                  <Badge variant="secondary" className="bg-teal-500/20 text-teal-300">
                    JavaScript
                  </Badge>
                  <Badge variant="secondary" className="bg-teal-500/20 text-teal-300">
                    React.js
                  </Badge>
                  <Badge variant="secondary" className="bg-teal-500/20 text-teal-300">
                    PHP
                  </Badge>
                  <Badge variant="secondary" className="bg-teal-500/20 text-teal-300">
                    Python
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
              <CardHeader>
                <CardTitle className="text-blue-300">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    Java
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    C/C++
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    Python
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-300">
                    MATLAB
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-teal-500/10 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-purple-300">Core Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                    Algorithms
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                    Data Structures
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-300">
                    OOP
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block animate-fade-in-up">
              <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-purple-400 mx-auto mb-4 animate-triangle-appear"></div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-teal-500 bg-clip-text text-transparent animate-title-appear">
                My Projects
              </h2>
            </div>
          </div>
          <div className="max-w-2xl mx-auto animate-content-appear">
            <ProjectCard />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block animate-fade-in-up">
              <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-teal-400 mx-auto mb-4 animate-triangle-appear"></div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent animate-title-appear">
                Professional Experience
              </h2>
            </div>
          </div>
          <div className="max-w-3xl mx-auto animate-content-appear">
            <Card className="bg-gradient-to-br from-purple-500/10 to-teal-500/10 border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-purple-300">IEEE Member</CardTitle>
                <CardDescription className="text-gray-400">15/03/2025 – ONGOING • Gabès</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-teal-400 mt-1">•</span>
                    Organize and participate in workshops on emerging technologies (AI, IoT)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    Lead knowledge sharing sessions on development best practices
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    Collaborate with a multidisciplinary team on technological projects
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block animate-fade-in-up">
              <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-blue-400 mx-auto mb-4 animate-triangle-appear"></div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-500 bg-clip-text text-transparent animate-title-appear">
                Education
              </h2>
            </div>
          </div>
          <div className="max-w-3xl mx-auto animate-content-appear">
            <Card className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border-teal-500/20">
              <CardHeader>
                <CardTitle className="text-teal-300">
                  Bachelor's in Software Engineering and Information Systems
                </CardTitle>
                <CardDescription className="text-gray-400">
                  12/09/2023 – ONGOING • Faculty of Sciences of Gabès, Tunisia
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Comprehensive training in software development, information systems, and modern technologies.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-teal-500/50 text-teal-400 hover:bg-teal-500/10 bg-transparent"
                >
                  <Link href="https://fsg.rnu.tn/fr" target="_blank">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    FSG Website
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block animate-fade-in-up">
              <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[30px] border-b-purple-400 mx-auto mb-4 animate-triangle-appear"></div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-teal-500 bg-clip-text text-transparent animate-title-appear">
                Contact Me
              </h2>
            </div>
          </div>
          <div className="max-w-2xl mx-auto animate-content-appear">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2025 Samar Guizani. All rights reserved.</p>
          <div className="flex gap-4 justify-center mt-4">
            <Button variant="ghost" size="sm" asChild className="text-teal-400 hover:text-teal-300">
              <Link href="https://github.com/SamarGuizani" target="_blank">
                GitHub
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-blue-400 hover:text-blue-300">
              <Link href="https://linkedin.com/in/samar-guizani" target="_blank">
                LinkedIn
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild className="text-cyan-400 hover:text-cyan-300">
              <Link
                href="https://fbubzjkbpczpzjtwrjym.supabase.co/storage/v1/object/public/portfolio-assets/Cv_Samar_Guizani.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="CV_Samar_Guizani.pdf"
              >
                CV
              </Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
