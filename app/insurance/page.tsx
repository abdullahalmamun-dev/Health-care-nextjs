import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, FileText, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Insurance() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
          alt="Insurance"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">Insurance & Payment Options</h1>
          <p className="text-md md:text-lg max-w-2xl mx-5 md:mx-auto">
            We work with major insurance providers to make healthcare accessible and affordable.
          </p>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-5 md:py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl font-bold mb-4">Accepted Insurance Plans</h2>
            <p className="md:text-lg text-md text-muted-foreground max-w-2xl mx-5 md:mx-auto">
              We accept most major insurance plans to ensure you receive the care you need.
            </p>
          </div>
          <div className="md:mx-10 mx-5 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Blue Cross Blue Shield",
                plans: ["PPO", "HMO", "Medicare Advantage"],
                icon: Shield
              },
              {
                name: "Aetna",
                plans: ["PPO", "HMO", "Medicare Plans"],
                icon: Shield
              },
              {
                name: "UnitedHealthcare",
                plans: ["Choice Plus", "Options PPO", "Medicare"],
                icon: Shield
              },
              {
                name: "Cigna",
                plans: ["Open Access Plus", "HMO", "Medicare"],
                icon: Shield
              },
              {
                name: "Humana",
                plans: ["PPO", "HMO", "Medicare Advantage"],
                icon: Shield
              },
              {
                name: "Medicare",
                plans: ["Part A", "Part B", "Advantage Plans"],
                icon: Shield
              }
            ].map((insurance, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <insurance.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-md md:text-xl mb-4">{insurance.name}</h3>
                  <ul className="space-y-2">
                    {insurance.plans.map((plan, planIndex) => (
                      <li key={planIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-muted-foreground">{plan}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-5 md:py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-3xl font-bold mb-4">Payment Options</h2>
            <p className="text-md md:text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer flexible payment options to make healthcare accessible to everyone.
            </p>
          </div>
          <div className="md:mx-10 mx-5 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Insurance Coverage",
                description: "We work directly with your insurance provider to process claims and minimize out-of-pocket expenses.",
                icon: Shield
              },
              {
                title: "Self-Pay Options",
                description: "Flexible payment plans and cash payment options are available for patients without insurance.",
                icon: FileText
              },
              {
                title: "Financial Assistance",
                description: "We offer financial assistance programs for qualifying patients to ensure access to care.",
                icon: Phone
              }
            ].map((option, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <option.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{option.title}</h3>
                  <p className="text-muted-foreground">{option.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5 md:py-16">
        <div className="container">
          <h2 className="md:mx-0 mx-5 text-center text-xl md:text-3xl font-bold mb-8 md:mb-12">Frequently Asked Questions</h2>
          <div className=" mx-5 grid gap-6 max-w-3xl md:mx-auto">
            {[
              {
                question: "How do I verify my insurance coverage?",
                answer: "Contact our billing department or your insurance provider with your policy information to verify coverage for specific services."
              },
              {
                question: "What if my insurance plan isn't listed?",
                answer: "We work with many insurance providers. Contact us to discuss your specific insurance plan and coverage options."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes, we offer flexible payment plans for patients who need assistance managing their healthcare costs."
              },
              {
                question: "What documents do I need to bring?",
                answer: "Please bring your insurance card, photo ID, and any relevant medical records to your appointment."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-md md:text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-xl md:text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="mb-8 text-md md:text-lg max-w-2xl mx-5 md:mx-auto">
            Our billing specialists are here to help you understand your insurance coverage and payment options.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" className="bg-white/10 hover:bg-white/20 border-white">
              <a href="tel:+15551234567">Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}