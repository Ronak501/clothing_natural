import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Leaf, Lightbulb, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  const milestones = [
    {
      year: "2020",
      title: "The Beginning",
      description:
        "Uttam Dixit begins research on plant-based fabric alternatives after witnessing skin issues in school children.",
    },
    {
      year: "2021",
      title: "First Breakthrough",
      description: "Development of the first prototype of hypoallergenic plant-based fabric.",
    },
    {
      year: "2022",
      title: "ECO FORM Founded",
      description: "Official launch of ECO FORM with our first production facility in Mumbai.",
    },
    {
      year: "2023",
      title: "First Major Client",
      description: "Partnership with a network of 50+ schools across India to provide sustainable uniforms.",
    },
    {
      year: "2024",
      title: "Expansion",
      description: "Expanded product line to include corporate and healthcare uniform fabrics.",
    },
  ]

  const team = [
    {
      name: "Uttam Dixit",
      role: "Founder & CEO",
      bio: "Visionary entrepreneur with a passion for sustainable textiles and environmental conservation.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Priya Sharma",
      role: "Head of Research & Development",
      bio: "Textile engineer with 15 years of experience in developing eco-friendly fabric solutions.",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Rajiv Mehta",
      role: "Operations Director",
      bio: "Supply chain expert ensuring our production processes remain sustainable and efficient.",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>

        <div className="flex items-center justify-center mb-8">
          <Leaf className="h-10 w-10 text-green-600 mr-2" />
          <h1 className="text-3xl font-bold text-green-800">About ECO FORM</h1>
        </div>

        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Story</h2>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 mb-6">
              ECO FORM was born from a simple observation and a powerful question: Why do so many children and
              professionals suffer from skin issues caused by their uniforms, and what can we do about it?
            </p>
            <p className="text-lg text-gray-700 mb-6">
              In 2020, our founder Uttam Dixit was volunteering at a local school when he noticed many children
              scratching throughout the day. After speaking with teachers and parents, he discovered that synthetic
              uniform fabrics were causing widespread skin irritation and discomfort.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              This revelation led to years of research and development, working with textile engineers, dermatologists,
              and environmental scientists to create a truly revolutionary fabric – one that was completely plant-based,
              hypoallergenic, and sustainable.
            </p>
            <p className="text-lg text-gray-700">
              Today, ECO FORM stands as a pioneer in sustainable uniform fabrics, providing comfortable, skin-friendly,
              and environmentally responsible solutions for schools, corporations, and healthcare facilities across
              India.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">People First</h3>
                  <p className="text-gray-600">
                    We believe that comfort and health should never be compromised. Every product we create puts human
                    wellbeing at its core.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Leaf className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Planet Conscious</h3>
                  <p className="text-gray-600">
                    Every decision we make considers its environmental impact. We're committed to leaving the Earth
                    better than we found it.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Innovation</h3>
                  <p className="text-gray-600">
                    We never stop improving. Our R&D team constantly explores new ways to make our fabrics better for
                    people and the planet.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Journey */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-green-200"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/2"></div>
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-4 w-8 h-8 rounded-full bg-green-600 border-4 border-green-100 z-10"></div>
                  <div className="md:w-1/2 bg-white rounded-lg shadow-md p-6 ml-6 md:ml-0 md:mr-6">
                    <div className="font-bold text-green-600 text-lg mb-1">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-green-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of the sustainable uniform revolution. Together, we can create a healthier future for people and the
            planet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              Partner With Us
            </Button>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
