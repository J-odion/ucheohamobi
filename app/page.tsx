"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import {
  Shield,
  Code,
  Server,
  Cloud,
  Eye,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  ChevronDown,
  Terminal,
  Database,
  Network,
  Cpu,
  HardDrive,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
  User,
  Download,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import { SocialLinks } from "@/components/sociallinks"

export default function Component() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      const sections = ["home", "about", "experience", "skills", "education", "certifications", "gallery", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const skills = [
    { name: "Cloud Technologies", icon: Cloud, level: 90 },
    { name: "Cybersecurity", icon: Shield, level: 85 },
    { name: "Python", icon: Code, level: 80 },
    { name: "SQL", icon: Database, level: 85 },
    { name: "Network Security", icon: Network, level: 80 },
    { name: "Server Management", icon: Server, level: 85 },
    { name: "Microsoft Azure", icon: Globe, level: 80 },
    { name: "ITIL Service Management", icon: Terminal, level: 85 },
  ]

  const experiences = [
    {
      title: "Interim IT Manager",
      company: "Speeds Healthcare",
      period: "Jan 2025 - Current",
      description:
        "Leading IT services, managing critical incidents, overseeing budgets, and implementing security policies.",
      icon: Briefcase,
    },
    {
      title: "Senior IT Engineer",
      company: "Speeds Healthcare",
      period: "April 2024 - Jan 2025",
      description:
        "Technical escalation point, project implementations, Active Directory management, and IT solution design.",
      icon: Server,
    },
     {
      title: "Technical Support Analyst",
      company: "FSDH",
      period: "Sept 2019 - Sept 2021",
      description: "Client relationship management, technical support delivery, and test plan development.",
      icon: Cpu,
    },
    {
      title: "Senior Technical Analyst",
      company: "STG Africa",
      period: "Sept 2019 - Sept 2021",
      description:
        "Client relationship management, technical support delivery, and test plan development.",
      icon: Server,
    },
    {
      title: "Senior Technical Analystr",
      company: "STG  Africa",
      period: "Aug 2018 - Sept 2019",
      description:
        "Technical escalation point, project implementations, Active Directory management, and IT solution design.",
      icon: Server,
    },                                                                
   
  ]

  const certifications = [
    "CompTIA A+",
    "CompTIA Security+ SYO-701",
    "CompTIA Network+",
    "Microsoft MD-101: Managing Modern Desktops",
    "Cisco CCNA 200-301",
    "Agile/Scrum Certification",
  ]

  const images = [
    { src: "/images/uche-1.jpg", alt: "Uche Ohamobi Professional Photo 1" },
    { src: "/images/uche-2.jpg", alt: "Uche Ohamobi Professional Photo 2" },
    { src: "/images/uche-3.jpg", alt: "Uche Ohamobi Professional Photo 3" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-x-hidden">
      {/* Animated Background Lines */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 100}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                height: `${Math.random() * 200 + 100}px`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 2 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                UCHE OHAMOBI
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {[
                "home",
                "about",
                "experience",
                "skills",
                "education",
                "certifications",
                "gallery",
                "blog",
                "contact",
              ].map((section) => (
                <button
                  key={section}
                  onClick={() => (section === "blog" ? (window.location.href = "/blog") : scrollToSection(section))}
                  className={`capitalize transition-colors ${
                    activeSection === section ? "text-cyan-400" : "text-slate-300 hover:text-cyan-400"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="container mx-auto px-4 text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-emerald-400/20 blur-3xl rounded-full" />
                <Image
                  src="/images/uche-1.jpg"
                  alt="Uche Ohamobi"
                  width={200}
                  height={200}
                  className="relative rounded-full border-4 border-cyan-400/50 shadow-2xl"
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                UCHE OHAMOBI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-4">IT Security Specialist & Cloud Engineer</p>
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
              Passionate IT professional with 4 years of experience in cybersecurity, cloud technologies, and technical
              support. Committed to securing digital infrastructure and driving innovation in the modern IT landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-3 text-lg "
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <a href="/UcheCV.docx"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950 px-8 py text-lg flex justify-center items-center border bg-white rounded-md"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>
            <SocialLinks />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-cyan-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-cyan-400">
                    <User className="mr-2 h-6 w-6" />
                    Professional Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-slate-300">
                  <p className="mb-4">
                    Based in Liverpool, UK, I am a passionate IT professional with over four years of hands-on
                    experience in technical support, cybersecurity, and customer relations. My expertise spans cloud
                    technologies, network security, and ITIL service management.
                  </p>
                  <p className="mb-4">
                    I specialize in resolving complex technical issues, implementing security protocols, and maintaining
                    high-availability IT infrastructure. My commitment to continuous learning and professional
                    development drives me to stay current with emerging technologies.
                  </p>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1 text-cyan-400" />
                      Liverpool, UK
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-1 text-cyan-400" />
                      +44 7867 295414
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm text-center p-6">
                  <Shield className="h-12 w-12 text-cyan-400 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">Security First</h3>
                  <p className="text-slate-400 text-sm">Cybersecurity Expert</p>
                </Card>
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm text-center p-6">
                  <Cloud className="h-12 w-12 text-emerald-400 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">Cloud Native</h3>
                  <p className="text-slate-400 text-sm">Azure & AWS</p>
                </Card>
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm text-center p-6">
                  <Code className="h-12 w-12 text-purple-400 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">Development</h3>
                  <p className="text-slate-400 text-sm">Python & SQL</p>
                </Card>
                <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm text-center p-6">
                  <Network className="h-12 w-12 text-orange-400 mx-auto mb-2" />
                  <h3 className="font-bold text-lg">Networking</h3>
                  <p className="text-slate-400 text-sm">CCNA Certified</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-lg">
                        <exp.icon className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-cyan-400">{exp.title}</CardTitle>
                        <CardDescription className="text-slate-300 font-medium">{exp.company}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-emerald-400 text-emerald-400">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <skill.icon className="h-6 w-6 text-cyan-400" />
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-sm text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <CardTitle className="text-cyan-400">
                      M.Sc. Information Technology with Business Intelligence
                    </CardTitle>
                    <CardDescription className="text-slate-300">
                      Robert Gordon University, Aberdeen, Scotland
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="border-emerald-400 text-emerald-400 mb-4">
                  MERIT - Sept 2023
                </Badge>
                <p className="text-slate-300 text-sm">
                  Specialized coursework in IT infrastructure, Python programming, database management, software
                  engineering, and Agile methodology.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <CardTitle className="text-cyan-400">B.Sc. Accounting</CardTitle>
                    <CardDescription className="text-slate-300">Central University, Accra, Ghana</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Badge variant="outline" className="border-emerald-400 text-emerald-400 mb-4">
                  June 2018
                </Badge>
                <p className="text-slate-300 text-sm">
                  Foundation in business principles, financial analysis, and analytical thinking that complements
                  technical expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2 text-white">{cert}</h3>
                  <Badge variant="outline" className="border-emerald-400 text-emerald-400">
                    Certified
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Professional Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={400}
                      height={600}
                      className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Eye className="h-12 w-12 text-cyan-400" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-3xl bg-slate-900 border-slate-700">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={800}
                    height={1200}
                    className="w-full h-80 rounded-lg"
                  />
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Contact Information</CardTitle>
                  <CardDescription>Ready to collaborate on your next project</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <a href="mailto:ucheohamobi@yahoo.com" className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-lg">
                      <Mail className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Email</p>
                      <p className="text-slate-400">ucheohamobi@yahoo.com</p>
                    </div>
                  </a>
                  <a href="tel:+447867295414" className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-lg">
                      <Phone className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Phone</p>
                      <p className="text-slate-400">+44 7867 295414</p>
                    </div>
                  </a>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-lg">
                      <MapPin className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p className="text-slate-400">Liverpool, United Kingdom</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Connect With Me</CardTitle>
                  <CardDescription>Follow me on social media platforms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-600 hover:border-cyan-400 hover:text-cyan-400"
                    onClick={() => window.open("https://www.linkedin.com/in/uche-ohamobi-76501b140/", "_blank")}
                  >
                    <Linkedin className="mr-3 h-5 w-5" />
                    LinkedIn Profile
                    <ExternalLink className="ml-auto h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-600 hover:border-cyan-400 hover:text-cyan-400"
                    onClick={() => window.open("https://github.com/ucheohams", "_blank")}
                  >
                    <Github className="mr-3 h-5 w-5" />
                    GitHub Profile
                    <ExternalLink className="ml-auto h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-600 hover:border-cyan-400 hover:text-cyan-400"
                    onClick={() => window.open("https://twitter.com/ucheohamobi", "_blank")}
                  >
                    <Twitter className="mr-3 h-5 w-5" />
                    Twitter Profile
                    <ExternalLink className="ml-auto h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400">
            © 2025 Uche Ohamobi. All rights reserved. | Securing the digital future, one system at a time.
          </p>
        </div>
      </footer>
    </div>
  )
}
