import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, HeartPulse, Stethoscope, Award, Star, Users, Activity, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80"
          alt="Medical professionals"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Health, Our Priority
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Experience exceptional healthcare with our team of dedicated professionals.
            We&apos;re committed to your well-being and providing personalized care.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white">
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: HeartPulse,
                title: "Expert Care",
                description: "Our team of experienced healthcare professionals ensures you receive the best care possible."
              },
              {
                icon: Calendar,
                title: "Easy Scheduling",
                description: "Book appointments easily online or by phone at your convenience."
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock emergency care and support when you need it most."
              },
              {
                icon: Stethoscope,
                title: "Modern Facilities",
                description: "State-of-the-art medical facilities and equipment for optimal treatment."
              }
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Medical Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a comprehensive range of medical services to meet all your healthcare needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
                title: "Primary Care",
                description: "Comprehensive primary care services for your entire family."
              },
              {
                image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80",
                title: "Specialized Treatment",
                description: "Advanced specialized treatments across multiple medical disciplines."
              },
              {
                image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80",
                title: "Emergency Care",
                description: "24/7 emergency medical services with rapid response times."
              }
            ].map((service, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="bg-white/10 hover:bg-white/20 border-white">
                    <Link href="/services">Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "20K+", label: "Patients Annually" },
              { number: "50+", label: "Specialists" },
              { number: "15+", label: "Years Experience" },
              { number: "99%", label: "Patient Satisfaction" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Patient Testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Read what our patients say about their experience with us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Patient",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
                quote: "The care and attention I received was exceptional. The staff was professional and caring throughout my treatment."
              },
              {
                name: "Michael Chen",
                role: "Patient",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
                quote: "Outstanding medical care and patient service. The doctors took time to explain everything thoroughly."
              },
              {
                name: "Emily Davis",
                role: "Patient",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
                quote: "I'm grateful for the excellent care I received. The facility is modern and the staff is highly professional."
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News Preview */}
      <section className="py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest Health News</h2>
            <Button asChild variant="outline">
              <Link href="/news" className="flex items-center gap-2">
                View All News <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
                title: "New Medical Technology Breakthrough",
                date: "April 15, 2024",
                excerpt: "Learn about the latest advancements in medical technology and how they're improving patient care."
              },
              {
                image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80",
                title: "Preventive Healthcare Tips",
                date: "April 12, 2024",
                excerpt: "Discover essential tips for maintaining good health and preventing common medical conditions."
              },
              {
                image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80",
                title: "Mental Health Awareness",
                date: "April 10, 2024",
                excerpt: "Understanding the importance of mental health and available support services."
              }
            ].map((news, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-2">{news.date}</p>
                  <h3 className="font-semibold text-xl mb-2">{news.title}</h3>
                  <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                  <Button asChild variant="link" className="p-0">
                    <Link href="/news" className="flex items-center gap-2">
                      Read More <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Insurance Partners</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We work with major insurance providers to ensure accessible healthcare for all.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Blue Shield", icon: Award },
              { name: "Health Plus", icon: HeartPulse },
              { name: "MediCare Pro", icon: Activity },
              { name: "Care First", icon: Star }
            ].map((partner, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <partner.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Schedule your appointment today and take the first step towards better health.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-blue-50">
              <Link href="/contact">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" className="bg-white/10 hover:bg-white/20 border-white">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}