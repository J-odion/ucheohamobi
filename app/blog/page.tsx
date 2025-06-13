"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Shield,
  ArrowLeft,
  Calendar,
  Clock,
  Search,
  Tag,
  User,
  Cloud,
  Brain,
  MapPin,
  Lock,
  ChevronRight,
  BookOpen,
} from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "The Rise of Cloud Computing and Its Role in Digital Transformation",
    excerpt:
      "Exploring how cloud services are revolutionizing business operations with unparalleled flexibility, scalability, and cost-efficiency.",
    content: `The digital age has brought about an explosion in the ways businesses operate, and one of the most transformative technologies behind this revolution is cloud computing. Cloud services allow businesses to offload computing resources, data storage, and software applications to external providers, offering unparalleled flexibility, scalability, and cost-efficiency. This shift has become a fundamental aspect of digital transformation strategies for organisations of all sizes and industries.

## Cloud Computing: A Key Driver of Digital Transformation

Cloud computing has evolved from being a niche solution for businesses to a cornerstone of modern enterprise IT. The cloud allows businesses to move away from traditional on-premises infrastructure that requires significant capital investment, ongoing maintenance, and a lengthy setup process. With cloud services, companies can quickly deploy applications, scale their operations on demand, and access high-performance computing power, all with minimal upfront costs.

As cloud computing technology advances, businesses have been able to leverage it in various ways:

**Infrastructure as a Service (IaaS):** Renting virtual machines, storage, and networking services that replace traditional data centres.

**Platform as a Service (PaaS):** Using cloud-based platforms to build, test, and deploy applications without managing the underlying hardware.

**Software as a Service (SaaS):** Accessing software applications over the internet on a subscription basis, such as Microsoft Office 365, Salesforce, and Slack.

## Business Benefits of Cloud Computing

Cloud computing's popularity can be attributed to its myriad advantages for businesses:

### 1. Cost Efficiency
Traditional IT infrastructure requires significant upfront investments in hardware, software, and maintenance. With cloud services, companies can pay as they go, eliminating the need for large capital expenditures. This model allows businesses to allocate resources more efficiently, with minimal upfront costs.

### 2. Scalability and Flexibility
As business needs change, companies can scale their IT resources up or down with ease. Cloud providers allow businesses to rapidly adjust storage capacity, compute power, and networking resources. Whether a company is expanding globally or facing seasonal demand surges, the cloud enables it to scale quickly without worrying about physical infrastructure limitations.

### 3. Enhanced Collaboration and Remote Work
Cloud-based tools have revolutionised collaboration in the workplace. Applications like Google Drive, Microsoft Teams, and Dropbox allow employees to access, edit, and share documents and files in real-time from anywhere in the world. This is especially crucial in today's remote work environment, where cloud computing enables seamless collaboration across distributed teams.

### 4. Security and Disaster Recovery
While security concerns were once a barrier to cloud adoption, modern cloud providers have implemented advanced encryption and security protocols to safeguard data. Additionally, cloud services offer automated backup and disaster recovery solutions, ensuring that business data is protected and recoverable in the event of a system failure or cyberattack.

## The Security and Compliance Challenges

Despite its numerous advantages, businesses must still navigate security and compliance challenges when adopting cloud solutions. With the cloud being a shared environment, organisations need to be vigilant about data privacy, access control, and compliance with various regulations (e.g., GDPR, HIPAA).

Cloud computing is no longer just a tool for cost reduction; it is a powerful enabler of digital transformation. By providing the infrastructure and flexibility necessary for businesses to innovate, cloud services are helping companies transition from traditional business models to more agile, digital-first approaches.`,
    author: "Uche Ohamobi",
    date: "2022-03-15",
    readTime: "8 min read",
    category: "Cloud Computing",
    tags: ["Cloud", "Digital Transformation", "IaaS", "PaaS", "SaaS"],
    icon: Cloud,
  },
  {
    id: 2,
    title: "The Future of Artificial Intelligence in IT Management",
    excerpt:
      "Discovering how AI is revolutionizing IT operations through predictive maintenance, automated troubleshooting, and enhanced cybersecurity.",
    content: `Artificial Intelligence (AI) has made incredible strides in recent years, particularly in the field of IT management. What was once a futuristic concept is now a mainstream reality, with businesses around the world adopting AI technologies to optimise IT operations, enhance security, and drive innovation.

## AI-Driven Automation: The Future of IT Management

One of the most compelling use cases for AI in IT management is automation. IT teams often spend significant time on routine tasks such as software updates, system monitoring, and incident resolution. AI-driven automation tools can take over many of these tasks, allowing IT professionals to focus on more strategic activities.

For example, AI-powered service desk automation tools can handle common user queries, providing immediate assistance to end users and improving response times. This helps reduce the burden on human agents while enhancing customer satisfaction. Additionally, AI tools can proactively monitor IT infrastructure, predicting potential issues before they arise and automating fixes to ensure system uptime.

## Predictive Maintenance with AI

One of the most significant contributions of AI to IT management is in the area of predictive maintenance. Traditional maintenance strategies are reactive, with IT teams only addressing issues when they occur. AI-powered tools, however, allow organisations to predict hardware failures and other potential system issues by analysing historical data, enabling proactive action to prevent downtime.

For example, using AI, IT teams can predict when a server is likely to fail based on usage patterns and historical performance data. This allows them to schedule maintenance or hardware replacement before a critical failure occurs, reducing downtime and maintaining business continuity.

## AI for Enhanced Cybersecurity

Cybersecurity is a critical concern for businesses, and AI is playing a key role in strengthening defences against cyberattacks. AI systems can analyse network traffic and user behaviour to detect anomalies and identify potential threats. For example, machine learning algorithms can recognise patterns associated with malicious activity, such as unusual login times or data access requests, and flag them for further investigation.

In addition, AI can automate responses to detected threats, such as isolating compromised systems or blocking suspicious IP addresses, providing IT teams with an additional layer of security. With the increasing sophistication of cyberattacks, AI's role in cybersecurity will only continue to grow.

## The Role of IT Professionals in AI Adoption

Despite its power, AI cannot function in isolation. IT professionals are essential in ensuring that AI technologies are effectively integrated into existing systems and aligned with business objectives. They will need to oversee the implementation of AI solutions, manage AI-driven projects, and ensure that AI systems are operating securely and ethically.

Moreover, as AI continues to evolve, IT professionals will need to stay up-to-date with emerging technologies and industry best practices to manage AI applications effectively. This will involve continuous learning and adaptation to new developments in the field.`,
    author: "Uche Ohamobi",
    date: "2023-06-20",
    readTime: "7 min read",
    category: "Artificial Intelligence",
    tags: ["AI", "Machine Learning", "Automation", "Predictive Maintenance"],
    icon: Brain,
  },
  {
    id: 3,
    title: "The IT Space in the UK: A Hub for Innovation and Talent",
    excerpt:
      "Exploring the UK's vibrant tech ecosystem and why it continues to attract global talent in technology and innovation.",
    content: `The UK is home to one of the most vibrant and dynamic tech ecosystems in the world. With its rich history of technological innovation, a highly skilled workforce, and a supportive regulatory environment, the UK continues to be a global leader in technology.

## The Growing Tech Ecosystem in the UK

The UK's tech sector has been growing rapidly over the past few years, fueled by a combination of factors that make the country an ideal location for tech companies and talent alike. In 2023, the UK's tech sector generated over £170 billion in revenue, and it continues to expand at a rate of 2.6% annually. This growth is driven by strong demand for innovative technologies such as artificial intelligence (AI), cloud computing, cybersecurity, and fintech.

London is undoubtedly the epicenter of the UK's tech industry, home to countless startups, scale-ups, and global tech giants. However, other cities such as Manchester, Bristol, Edinburgh, and Cambridge are emerging as important tech hubs, each specializing in different areas such as AI, blockchain, and data analytics. These cities offer a high quality of life, affordable living costs compared to London, and access to cutting-edge technological projects.

## Attracting Global Talent to the UK

The UK has long been a destination of choice for global talent in the tech industry. Thanks to its diverse and inclusive culture, world-class educational institutions, and a robust job market, the UK attracts IT professionals from all over the world. The Tech Nation Visa and Global Talent Visa schemes have made it easier for top-tier professionals to work and live in the UK, while initiatives like UKRI's Digital Economy Programme and AI Sector Deal have helped position the UK as a leader in AI research and development.

## Skilled Talent and Innovation

The UK's universities are renowned for producing highly skilled graduates in fields like computer science, data science, and engineering. Institutions such as Oxford, Cambridge, and Imperial College London are global leaders in tech research and innovation. Additionally, the UK government's continued investment in digital infrastructure and R&D is ensuring that the country remains at the forefront of technological advancements.

As the demand for digital skills continues to rise, businesses in the UK are increasingly looking to hire individuals who can lead digital transformation efforts, particularly in areas like cloud computing, cybersecurity, and AI. The UK's talent pool is not only highly skilled but also diverse, creating an environment where different perspectives drive creativity and innovation.

## Digital Transformation Opportunities

For professionals with proven experience in cloud technologies, IT infrastructure, and cybersecurity, the UK represents an exciting opportunity. The country's focus on digital innovation and investment in emerging technologies creates numerous opportunities for skilled IT professionals to make meaningful impacts in the fast-growing tech sector.

The UK's commitment to becoming a global leader in technology, combined with its supportive ecosystem for innovation, makes it an ideal destination for IT professionals looking to advance their careers and contribute to cutting-edge technological developments.`,
    author: "Uche Ohamobi",
    date: "2024-02-10",
    readTime: "6 min read",
    category: "Industry Insights",
    tags: ["UK Tech", "Innovation", "Career", "Digital Transformation"],
    icon: MapPin,
  },
  {
    id: 4,
    title: "Cybersecurity Challenges in the Modern IT Landscape",
    excerpt:
      "Addressing the evolving threat landscape and implementing robust security measures to protect digital infrastructure in 2024.",
    content: `As digital transformation accelerates, cybersecurity has become one of the most critical concerns for businesses globally. With the increasing number of cyberattacks, data breaches, and advanced persistent threats, organizations must implement robust security measures to protect sensitive data and ensure the integrity of their IT infrastructure.

## The Evolving Threat Landscape

The threat landscape has become more complex and sophisticated in recent years. Cyberattacks are no longer limited to opportunistic hackers; they now involve organized cybercriminals, nation-state actors, and insider threats. The rise of ransomware, phishing, and malware attacks has forced businesses to rethink their cybersecurity strategies.

In 2023 alone, ransomware attacks cost global businesses over $20 billion. The targeted attacks are becoming more personalized and harder to detect. Hackers are using more advanced techniques like social engineering and zero-day exploits to breach systems and steal sensitive data.

## Key Cybersecurity Challenges

### 1. Data Privacy and Compliance
With the rise of GDPR in Europe and similar regulations worldwide, businesses must be vigilant about how they handle and store customer data. Breaches can result in severe financial penalties and long-lasting reputational damage. Ensuring that data is encrypted, access is restricted, and that compliance policies are followed is essential for every organization.

### 2. Human Error and Insider Threats
Employees remain the weakest link in any cybersecurity strategy. Phishing attacks continue to be one of the most common methods hackers use to infiltrate an organization's network. Training staff to recognize suspicious activity and implement strong password policies is crucial to mitigating risks.

### 3. Cloud Security
As more businesses migrate to the cloud, ensuring the security of cloud-based data and applications is a top priority. While cloud providers offer robust security measures, businesses must also implement their own controls, such as multi-factor authentication, encryption, and data loss prevention (DLP).

## AI and Automation in Cybersecurity

As the number and complexity of cyber threats grow, AI and machine learning are playing an increasingly important role in cybersecurity. AI-powered security systems can detect anomalies, predict potential vulnerabilities, and automate responses to emerging threats, reducing the workload for human analysts and improving overall security posture.

## Best Practices for Strengthening Cybersecurity

Organizations must adopt a multi-layered approach to cybersecurity:

- **Implement strong access controls**, including multi-factor authentication (MFA)
- **Regularly update and patch software** to address known vulnerabilities
- **Encrypt sensitive data** both in transit and at rest
- **Train employees** on the importance of cybersecurity hygiene and how to recognize phishing attempts
- **Conduct regular security assessments** and penetration testing
- **Develop incident response plans** for quick recovery from security breaches

## The Future of Cybersecurity

As cybersecurity threats continue to evolve, businesses must stay vigilant and proactive in protecting their digital infrastructure. The integration of AI and machine learning into security systems will become increasingly important, as will the need for skilled cybersecurity professionals who can adapt to the changing threat landscape.

The key to successful cybersecurity lies in understanding that it's not just a technology problem—it's a business problem that requires a comprehensive approach involving people, processes, and technology working together to create a robust defense against cyber threats.`,
    author: "Uche Ohamobi",
    date: "2024-08-15",
    readTime: "9 min read",
    category: "Cybersecurity",
    tags: ["Cybersecurity", "Data Protection", "Threat Detection", "Security Best Practices"],
    icon: Lock,
  },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPost, setSelectedPost] = useState<number | null>(null)

  const categories = ["All", "Cloud Computing", "Artificial Intelligence", "Industry Insights", "Cybersecurity"]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  if (selectedPost) {
    const post = blogPosts.find((p) => p.id === selectedPost)
    if (!post) return null

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
        </div>

        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  UCHE OHAMOBI
                </span>
              </Link>
              <Button
                onClick={() => setSelectedPost(null)}
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </div>
          </div>
        </nav>

        {/* Article Content */}
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-8">
              <Button
                onClick={() => setSelectedPost(null)}
                variant="ghost"
                className="text-cyan-400 hover:text-cyan-300 mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>

              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-lg">
                  <post.icon className="h-8 w-8 text-cyan-400" />
                </div>
                <div>
                  <Badge variant="outline" className="border-emerald-400 text-emerald-400 mb-2">
                    {post.category}
                  </Badge>
                  <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    {post.title}
                  </h1>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-8">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {post.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  {post.readTime}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-slate-800 text-slate-300">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <Card className="bg-slate-900/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="prose prose-invert prose-cyan max-w-none">
                  {post.content.split("\n").map((paragraph, index) => {
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h2 key={index} className="text-2xl font-bold text-cyan-400 mt-8 mb-4">
                          {paragraph.replace("## ", "")}
                        </h2>
                      )
                    }
                    if (paragraph.startsWith("### ")) {
                      return (
                        <h3 key={index} className="text-xl font-bold text-emerald-400 mt-6 mb-3">
                          {paragraph.replace("### ", "")}
                        </h3>
                      )
                    }
                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                      return (
                        <p key={index} className="font-bold text-slate-200 mb-4">
                          {paragraph.replace(/\*\*/g, "")}
                        </p>
                      )
                    }
                    if (paragraph.startsWith("- ")) {
                      return (
                        <li key={index} className="text-slate-300 mb-2 ml-4">
                          {paragraph.replace("- ", "")}
                        </li>
                      )
                    }
                    if (paragraph.trim() === "") {
                      return <br key={index} />
                    }
                    return (
                      <p key={index} className="text-slate-300 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <Button
                onClick={() => setSelectedPost(null)}
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-3"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to All Articles
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
            <Link href="/" className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                UCHE OHAMOBI
              </span>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full">
                <BookOpen className="h-12 w-12 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Tech Insights Blog
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Exploring the latest trends in cybersecurity, cloud computing, AI, and digital transformation. Insights
              from the frontlines of IT innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-slate-900/50 border-slate-700 text-slate-100 placeholder-slate-400"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={
                    selectedCategory === category
                      ? "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white"
                      : "border-slate-600 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-slate-900/50 border-slate-700 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedPost(post.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-lg">
                      <post.icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <Badge variant="outline" className="border-emerald-400 text-emerald-400">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-slate-800 text-slate-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 3 && (
                      <Badge variant="secondary" className="bg-slate-800 text-slate-300 text-xs">
                        +{post.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full inline-block mb-4">
                <Search className="h-12 w-12 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-300 mb-2">No articles found</h3>
              <p className="text-slate-400">Try adjusting your search terms or category filter.</p>
            </div>
          )}
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
