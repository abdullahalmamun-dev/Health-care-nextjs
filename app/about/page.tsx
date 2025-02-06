import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Target } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80"
          alt="Medical team"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Learn about our mission, values, and commitment to providing exceptional healthcare services.
          </p>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To provide accessible, high-quality healthcare services that improve the well-being of our community."
              },
              {
                icon: Award,
                title: "Our Vision",
                description: "To be the leading healthcare provider, recognized for excellence in patient care and medical innovation."
              },
              {
                icon: Users,
                title: "Our Values",
                description: "Integrity, compassion, excellence, and patient-centered care guide everything we do."
              }
            ].map((item, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-4">
              Founded in 2010, HealthCare Plus has been at the forefront of medical excellence, 
              providing comprehensive healthcare services to our community. Our journey began with 
              a simple mission: to make quality healthcare accessible to everyone.
            </p>
            <p className="text-lg text-muted-foreground">
              Today, we continue to grow and evolve, embracing new technologies and medical 
              advancements while maintaining our commitment to personalized, patient-centered care. 
              Our team of dedicated healthcare professionals works tirelessly to ensure that every 
              patient receives the highest standard of care.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Years of Experience" },
              { number: "50+", label: "Medical Specialists" },
              { number: "100K+", label: "Patients Served" },
              { number: "24/7", label: "Emergency Care" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}