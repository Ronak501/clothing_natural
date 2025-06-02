import Link from "next/link"
import Image from "next/image"
import { Leaf, Phone, Heart, Droplets, Recycle, Wind, Users, Mail, MapPin, Shield } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-green-100 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-800">ECO FORM</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#problem" className="text-gray-700 hover:text-green-600 transition-colors">
              The Problem
            </Link>
            <Link href="#solution" className="text-gray-700 hover:text-green-600 transition-colors">
              Our Solution
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-green-600 transition-colors">
              About Us
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>
          </div>
          <Button className="bg-green-600 hover:bg-green-700">Get Quote</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-green-100 text-green-800 hover:bg-green-100">
              The Future of Uniforms Starts Here
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              The Uniform You Wear <span className="text-green-600">Shouldn't Wear You Out</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Revolutionary 100% plant-based fabrics that are gentle on skin, kind to the environment, and perfect for
              schools and corporate uniforms across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 text-lg px-8 py-3"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">The Hidden Crisis in Every Uniform</h2>
              <p className="text-xl text-gray-600">
                Millions suffer silently from synthetic fabric-related health issues
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                  <h3 className="text-2xl font-bold text-red-800 mb-2">Alarming Statistics</h3>
                  <p className="text-red-700 text-lg">
                    In India alone, <strong>over 35% of school children</strong> suffer from textile-related skin
                    issues—from mild rashes to full-blown dermatitis.
                  </p>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Every morning, millions of children and corporate professionals step into uniforms stitched from
                  synthetic fabrics. These clothes may appear neat and functional—but what lies beneath the surface is
                  far from harmless.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Office employees too, silently endure skin irritation throughout the day, only to sigh with relief
                  when they finally change out of their uniforms.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/skin-irritation-1.jpg"
                  alt="Skin irritation caused by synthetic fabrics"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
                <Image
                  src="/images/skin-irritation-2.jpg"
                  alt="Person scratching irritated skin"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Hidden Culprit</h3>
              <p className="text-lg text-gray-700 mb-6">
                <strong>Synthetic blended fabrics</strong>—commonly used in school and corporate uniforms. These fabrics
                are cheap to produce but costly to our health and the planet.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Heart className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Trap Heat</h4>
                  <p className="text-gray-600">Cause discomfort and irritation</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Droplets className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Release Microplastics</h4>
                  <p className="text-gray-600">Pollute waterways with every wash</p>
                </div>
                <div className="text-center">
                  <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                    <Recycle className="h-8 w-8 text-red-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900">Non-Biodegradable</h4>
                  <p className="text-gray-600">Add to Earth's waste mountain</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Image
                src="/images/uniform-eczema-infographic.jpg"
                alt="Understanding eczema and toxin exposure in school uniforms"
                width={800}
                height={400}
                className="rounded-lg shadow-lg mx-auto"
              />
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mt-12">
              <h3 className="text-2xl font-bold text-amber-800 mb-2">A Harsh Truth About Cotton</h3>
              <p className="text-amber-700 text-lg">
                Many believe cotton is the better alternative. Yes, it's natural—but did you know it takes
                <strong> over 9,000 litres of water</strong> to make just <strong>one set of cotton uniforms</strong>?
              </p>
              <p className="text-amber-700 text-lg mt-2">
                That's enough water to quench the thirst of a family for months. At scale, cotton manufacturing becomes
                one of the most water-intensive and polluting industries in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">Nature's Answer</Badge>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Introducing ECO FORM</h2>
              <p className="text-xl text-gray-600">
                What if there was a fabric that's kind to the skin, light on the Earth, and made entirely from nature?
                There is. And we call it – ECO FORM.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">100% Plant-Based Fabric Revolution</h3>
                <p className="text-lg text-gray-700 mb-8">
                  After years of research and innovation, our team developed a proprietary plant-based formula that
                  redefines how uniforms are made.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Hypoallergenic</h4>
                      <p className="text-gray-600">No more rashes or irritation</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                      <Recycle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Biodegradable</h4>
                      <p className="text-gray-600">Breaks down naturally, leaving no microplastic trail</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                      <Wind className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Lightweight & Breathable</h4>
                      <p className="text-gray-600">Perfect for India's varied climate</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-2 flex-shrink-0">
                      <Leaf className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg">Sustainable</h4>
                      <p className="text-gray-600">Minimal water usage, zero synthetic chemicals</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">Perfect For</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <Users className="h-6 w-6 text-green-600" />
                    <span className="text-lg text-gray-700">School Uniforms</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <Users className="h-6 w-6 text-green-600" />
                    <span className="text-lg text-gray-700">Corporate Uniforms</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                    <Heart className="h-6 w-6 text-green-600" />
                    <span className="text-lg text-gray-700">Healthcare Uniforms</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                We're Not Just Making Fabric – We're Weaving the Future
              </h3>
              <p className="text-xl text-gray-600 mb-6">
                At ECO FORM, we believe that comfort, sustainability, and style can coexist. Our fabrics are soft on the
                skin, safe for the planet, and strong enough for everyday wear.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">For the Child</h4>
                    <p className="text-gray-600">Who deserves to study without scratching</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">For the Employee</h4>
                    <p className="text-gray-600">Who deserves to work without discomfort</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">For the Environment</h4>
                    <p className="text-gray-600">That deserves to breathe easy</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Founded by Innovation, Driven by Purpose</h2>
            <div className="bg-green-50 rounded-2xl p-8">
              <div className="w-24 h-24 bg-green-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">UD</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Uttam Dixit</h3>
              <p className="text-lg text-gray-600 mb-6">
                At just 25 years old, Uttam Dixit founded ECO FORM with a vision to revolutionize the uniform industry.
                After witnessing countless children and professionals suffer from fabric-related skin issues, he
                dedicated years to research and innovation.
              </p>
              <p className="text-lg text-gray-600">
                Today, ECO FORM stands as a testament to what's possible when innovation meets compassion, creating
                fabrics that care for people and the planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Choose Better. Choose ECO FORM.</h2>
            <p className="text-xl mb-8 opacity-90">
              If you're looking for uniforms that are gentle on skin and gentle on the Earth, look no further.
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-xl text-gray-600">
                Ready to make the switch to sustainable uniforms? We're here to help.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">Contact us today</p>
                  <Button variant="outline" className="mt-4">
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">Send us a message</p>
                  <Button variant="outline" className="mt-4">
                    Email Us
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Location</h3>
                  <p className="text-gray-600">Visit our facility</p>
                  <Button variant="outline" className="mt-4">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">ECO FORM</span>
            </div>
            <p className="text-gray-400 text-center md:text-right">
              © 2024 ECO FORM. All rights reserved. Weaving a sustainable future, one uniform at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
