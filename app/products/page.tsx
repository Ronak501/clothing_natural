import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Leaf } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "EcoWeave School Uniform Fabric",
      description:
        "Our signature plant-based fabric designed specifically for school uniforms. Hypoallergenic, breathable, and durable.",
      category: "school",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Hypoallergenic", "Breathable", "Durable", "Easy to clean"],
    },
    {
      id: 2,
      name: "NatureFlex Corporate Fabric",
      description:
        "Professional-grade sustainable fabric perfect for corporate uniforms. Maintains shape and color even after multiple washes.",
      category: "corporate",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Wrinkle-resistant", "Color-fast", "Professional finish", "Comfortable stretch"],
    },
    {
      id: 3,
      name: "MediSoft Healthcare Fabric",
      description:
        "Antimicrobial plant-based fabric designed for healthcare environments. Extra soft and gentle on sensitive skin.",
      category: "healthcare",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Antimicrobial", "Extra soft", "Fluid-resistant", "Quick-dry"],
    },
    {
      id: 4,
      name: "EcoSport Athletic Fabric",
      description:
        "Performance fabric for physical education uniforms. Moisture-wicking and odor-resistant properties.",
      category: "school",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Moisture-wicking", "Odor-resistant", "Flexible", "UV protection"],
    },
    {
      id: 5,
      name: "DuraTex Heavy-Duty Fabric",
      description:
        "Reinforced sustainable fabric for industrial uniforms. Maintains eco-friendly properties while providing extra durability.",
      category: "corporate",
      image: "/placeholder.svg?height=300&width=400",
      features: ["Extra durable", "Stain-resistant", "Heat-resistant", "Chemical-free"],
    },
    {
      id: 6,
      name: "ComfortBlend Everyday Fabric",
      description:
        "Our most versatile fabric suitable for various uniform applications. Balances comfort and durability perfectly.",
      category: "healthcare",
      image: "/placeholder.svg?height=300&width=400",
      features: ["All-purpose", "Balanced weight", "Year-round comfort", "Easy care"],
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
          <h1 className="text-3xl font-bold text-green-800">ECO FORM Products</h1>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sustainable Fabric Collection</h2>
          <p className="text-xl text-gray-600">
            Explore our range of 100% plant-based fabrics designed for different uniform needs. All our products are
            hypoallergenic, biodegradable, and eco-friendly.
          </p>
        </div>

        <Tabs defaultValue="all" className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="school">School Uniforms</TabsTrigger>
              <TabsTrigger value="corporate">Corporate Uniforms</TabsTrigger>
              <TabsTrigger value="healthcare">Healthcare Uniforms</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="school" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((product) => product.category === "school")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="corporate" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((product) => product.category === "corporate")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="healthcare" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products
                .filter((product) => product.category === "healthcare")
                .map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Fabric Solutions?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            We can develop custom fabric blends tailored to your specific requirements. Our team of experts will work
            with you to create the perfect solution.
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700">
            Request Custom Solution
          </Button>
        </div>
      </div>
    </div>
  )
}

function ProductCard({ product }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription className="mt-2">{product.description}</CardDescription>
          </div>
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            {product.category === "school" && "School"}
            {product.category === "corporate" && "Corporate"}
            {product.category === "healthcare" && "Healthcare"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {product.features.map((feature, index) => (
            <Badge key={index} variant="outline" className="bg-green-50">
              {feature}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-green-600 hover:bg-green-700">Request Sample</Button>
      </CardFooter>
    </Card>
  )
}
