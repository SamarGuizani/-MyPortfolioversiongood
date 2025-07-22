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
import { SequentialHeroAnimation } from "@/components/sequential-hero-animation"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import { AnimatedSectionTitle } from "@/components/animated-section-title"

interface Project {
  title: string;
  icon: React.ElementType;
  date: string;
  shortDescription: string;
  fullDescription: string;
  link: string;
}

function ProjectCard() {
  const projects: Project[] = [
    {
      title: "TouriGuide",
      icon: Globe,
      date: "01/03/2025 – ONGOING",
      shortDescription: "Creating an intelligent tourism application that allows users to discover iconic sites...",
      fullDescription: "Creating an intelligent tourism application that allows users to discover iconic sites, local activities and personalized services according to their location. The application integrates an interactive map and real-time recommendations.",
      link: "https://github.com/SamarGuizani/tourism-app--8-"
    },
    {
      title: "Web Scraper for Clothing Websites",
      icon: Code,
      date: "2024",
      shortDescription: "Developed a web scraping tool using Python and Scrapy to extract product data from online clothing stores...",
      fullDescription: "Developed a web scraping tool using Python and Scrapy to extract product data from online clothing stores. The scraper collects information such as item names and prices and exports the data into structured formats (CSV/JSON) for analysis or use in e-commerce research.",
      link: "https://github.com/SamarGuizani/Scarpy"
    },
    {
      title: "AI Chatbot with Google Colab",
      icon: Database,
      date: "2024",
      shortDescription: "Built an AI-powered chatbot using a pre-trained language model in Google Colab...",
      fullDescription: "Built an AI-powered chatbot using a pre-trained language model in Google Colab. The bot can respond to user queries in natural language, with applications ranging from customer support to personal assistants. Integrated features include conversational memory and a clean UI for testing.",
      link: "https://github.com/SamarGuizani/Chatbot-RAG-Vetement"
    },
    {
      title: "Personal Portfolio Website",
      icon: Globe,
      date: "2024",
      shortDescription: "A responsive and modern portfolio site to showcase my projects, skills, and contact details...",
      fullDescription: "A responsive and modern portfolio site to showcase my projects, skills, and contact details. Built with animations, a dynamic contact form, and project sections. Deployed using Vercel and GitHub, with future support for custom domain and backend enhancements.",
      link: "https://github.com/SamarGuizani/-MyPortfolioversiongood"
    }
  ];

  const [expandedStates, setExpandedStates] = useState<boolean[]>(new Array(projects.length).fill(false));

  const toggleExpanded = (index: number) => {
    setExpandedStates(prev => {
      const newStates = [...prev];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => {
        const Icon = project.icon;
        return (
          <Card key={index} className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20 hover:border-blue-400/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-blue-300 flex items-center gap-2">
                <Icon className="h-5 w-5" />
                {project.title}
              </CardTitle>
              <CardDescription className="text-gray-400">{project.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                {expandedStates[index] ? project.fullDescription : project.shortDescription}
                {!expandedStates[index] && (
                  <button onClick={() => toggleExpanded(index)} className="text-blue-400 hover:text-blue-300 ml-1 underline">
                    (more)
                  </button>
                )}
                {expandedStates[index] && (
                  <button onClick={() => toggleExpanded(index)} className="text-blue-400 hover:text-blue-300 ml-2 underline">
                    (less)
                  </button>
                )}
              </p>
              <div className="flex gap-2">
                <Button size="sm" className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30" asChild>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
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

  const socialLinks = (
    <>
      <Button variant="ghost" size="icon" asChild className="text-teal-400 hover:text-teal-300 hover:bg-teal-500/10">
        <Link href="https://github.com/SamarGuizani" target="_blank">
          <Github className="h-5 w-5" />
        </Link>
      </Button>
      <Button variant="ghost" size="icon" asChild className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10">
        <Link href="https://linkedin.com/in/samar-guizani" target="_blank">
          <Linkedin className="h-5 w-5" />
        </Link>
      </Button>
      <Button variant="ghost" size="icon" asChild className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/10">
        <Link href="mailto:guizanisamar@ieee.org">
          <Mail className="h-5 w-5" />
        </Link>
      </Button>
    </>
  )

  const actionButtons = (
    <>
      <Button asChild className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600">
        <Link href="#contact">Contact Me</Link>
      </Button>
      <CVDownload />
      <Button variant="outline" asChild className="border-purple-500 text-purple-400 hover:bg-purple-500/10 bg-transparent">
        <Link href="#projects">My Projects</Link>
      </Button>
    </>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      <BackgroundParticles />
      <Navigation activeSection={activeSection} />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <SequentialHeroAnimation
            name="Samar Guizani"
            title="Full Stack Developer & Software Engineering Student"
            description="Passionate about innovative technologies, software development and designing efficient IT solutions."
            buttons={actionButtons}
            socialLinks={socialLinks}
          />
          <div className="flex justify-center">
            <AnimatedRobot />
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="container mx-auto" id="about">
          <AnimatedSectionTitle
            title="About Me"
            gradientFrom="teal-400"
            gradientTo="purple-500"
            triangleColor="teal-400"
          />
          <div className="grid md:grid-cols-2 gap-12 items-center">
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
              <AnimatedCard className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border-teal-500/20" delay={0}>
                <CardContent className="p-6 text-center">
                  <Code className="h-8 w-8 text-teal-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-teal-300">Development</h3>
                  <p className="text-sm text-gray-400">Full Stack</p>
                </CardContent>
              </AnimatedCard>
              <AnimatedCard className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20" delay={200}>
                <CardContent className="p-6 text-center">
                  <Database className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-blue-300">Database</h3>
                  <p className="text-sm text-gray-400">SQL & NoSQL</p>
                </CardContent>
              </AnimatedCard>
              <AnimatedCard className="bg-gradient-to-br from-purple-500/10 to-teal-500/10 border-purple-500/20" delay={400}>
                <CardContent className="p-6 text-center">
                  <Globe className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-purple-300">Web</h3>
                  <p className="text-sm text-gray-400">React & Next.js</p>
                </CardContent>
              </AnimatedCard>
              <AnimatedCard className="bg-gradient-to-br from-teal-500/10 to-purple-500/10 border-teal-500/20" delay={600}>
                <CardContent className="p-6 text-center">
                  <Smartphone className="h-8 w-8 text-teal-400 mx-auto mb-2" />
                  <h3 className="font-semibold text-teal-300">Mobile</h3>
                  <p className="text-sm text-gray-400">Applications</p>
                </CardContent>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <AnimatedSectionTitle
            title="Technical Skills"
            gradientFrom="blue-400"
            gradientTo="teal-500"
            triangleColor="blue-400"
          />
          <div className="grid md:grid-cols-3 gap-8 animate-content-appear">
            <AnimatedCard className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border-teal-500/20" delay={0}>
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
            </AnimatedCard>

            <AnimatedCard className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20" delay={200}>
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
            </AnimatedCard>

            <AnimatedCard className="bg-gradient-to-br from-purple-500/10 to-teal-500/10 border-purple-500/20" delay={400}>
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
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSectionTitle
            title="My Projects"
            gradientFrom="purple-400"
            gradientTo="teal-500"
            triangleColor="purple-400"
          />
          <div className="max-w-6xl mx-auto animate-content-appear px-4">
            <ProjectCard />
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <AnimatedSectionTitle
            title="Professional Experience"
            gradientFrom="teal-400"
            gradientTo="purple-500"
            triangleColor="teal-400"
          />
          <div className="max-w-3xl mx-auto animate-content-appear">
            <AnimatedCard className="bg-gradient-to-br from-purple-500/10 to-teal-500/10 border-purple-500/20" delay={0}>
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
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection id="education" className="py-20 px-4">
        <div className="container mx-auto">
          <AnimatedSectionTitle
            title="Education"
            gradientFrom="blue-400"
            gradientTo="teal-500"
            triangleColor="blue-400"
          />
          <div className="max-w-3xl mx-auto animate-content-appear">
            <AnimatedCard className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 border-teal-500/20" delay={0}>
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
            </AnimatedCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <AnimatedSectionTitle
            title="Contact Me"
            gradientFrom="purple-400"
            gradientTo="teal-500"
            triangleColor="purple-400"
          />
          <div className="max-w-2xl mx-auto animate-content-appear">
            <ContactForm />
          </div>
        </div>
      </AnimatedSection>

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
                href="https://fbubzjkbpczpzjtwrjym.supabase.co/storage/v1/object/public/portfolio-assets/SamarGuizani_Cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="SamarGuizani_Cv.pdf"
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
