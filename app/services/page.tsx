import { Card, CardContent } from "@/components/ui/card"
import { Activity, Brain, ChevronFirst as FirstAid, Heart, Stethoscope, Thermometer } from "lucide-react"
import Image from "next/image"

export default function Services() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80"
          alt="Medical services"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Comprehensive healthcare services tailored to meet your needs with excellence and care.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: "Cardiology",
                description: "Comprehensive heart care services including diagnostics, treatment, and prevention."
              },
              {
                icon: Brain,
                title: "Neurology",
                description: "Expert care for neurological conditions with advanced diagnostic capabilities."
              },
              {
                icon: FirstAid,
                title: "Emergency Care",
                description: "24/7 emergency medical services with rapid response and expert care."
              },
              {
                icon: Stethoscope,
                title: "Primary Care",
                description: "Regular check-ups, preventive care, and ongoing health management."
              },
              {
                icon: Activity,
                title: "Specialized Surgery",
                description: "Advanced surgical procedures using state-of-the-art technology."
              },
              {
                icon: Thermometer,
                title: "Pediatrics",
                description: "Comprehensive healthcare services for children of all ages."
              }
            ].map((service, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description: "Schedule your first visit for a comprehensive evaluation of your health needs."
                },
                {
                  step: "02",
                  title: "Diagnosis & Planning",
                  description: "Our specialists will create a personalized treatment plan based on your condition."
                },
                {
                  step: "03",
                  title: "Treatment",
                  description: "Receive expert care using the latest medical technologies and treatments."
                },
                {
                  step: "04",
                  title: "Follow-up Care",
                  description: "Regular follow-up visits to monitor your progress and adjust treatment as needed."
                }
              ].map((process, index) => (
                <div key={index} className="flex gap-6">
                  <div className="text-3xl font-bold text-blue-600">{process.step}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}