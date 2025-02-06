import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Briefcase, Users, Heart, Award, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Careers() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1571624436279-b272aff752b5?auto=format&fit=crop&q=80"
          alt="Careers"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Build your career with us and make a difference in healthcare.
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Join HealthCare Plus?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a supportive environment where you can grow your career while making a real difference in people's lives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Meaningful Work",
                description: "Make a real difference in patients' lives through compassionate care."
              },
              {
                icon: Users,
                title: "Great Team",
                description: "Work with passionate professionals in a collaborative environment."
              },
              {
                icon: Award,
                title: "Growth Opportunities",
                description: "Continuous learning and career advancement possibilities."
              },
              {
                icon: Briefcase,
                title: "Excellent Benefits",
                description: "Comprehensive benefits package and competitive compensation."
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12">Current Openings</h2>
          <div className="grid gap-6">
            {[
              {
                title: "Senior Medical Doctor",
                department: "Primary Care",
                location: "Medical City",
                type: "Full-time"
              },
              {
                title: "Registered Nurse",
                department: "Emergency Care",
                location: "Medical City",
                type: "Full-time"
              },
              {
                title: "Medical Technologist",
                department: "Laboratory",
                location: "Medical City",
                type: "Full-time"
              },
              {
                title: "Healthcare Administrator",
                department: "Administration",
                location: "Medical City",
                type: "Full-time"
              }
            ].map((job, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="flex items-center justify-between p-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex gap-4 text-sm text-muted-foreground">
                      <span>{job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                      <span>•</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/careers/apply" className="flex items-center gap-2">
                      Apply Now <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Employee Stories */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Employee Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from our team members about their experience working at HealthCare Plus.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. James Wilson",
                role: "Senior Physician",
                image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80",
                quote: "Working here has been incredibly rewarding. The supportive environment and focus on patient care align perfectly with my values."
              },
              {
                name: "Sarah Thompson",
                role: "Head Nurse",
                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80",
                quote: "The opportunities for growth and learning are exceptional. I've developed both professionally and personally."
              },
              {
                name: "Dr. Michael Chang",
                role: "Specialist",
                image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80",
                quote: "The collaborative atmosphere and state-of-the-art facilities make this an ideal place to practice medicine."
              }
            ].map((story, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 mr-4">
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{story.name}</h3>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{story.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Benefits</h2>
            <p className="text-lg max-w-2xl mx-auto">
              We offer comprehensive benefits to support our employees' well-being and growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Competitive Salary",
              "Health Insurance",
              "Retirement Plans",
              "Paid Time Off",
              "Professional Development",
              "Work-Life Balance",
              "Career Growth",
              "Team Events"
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                <span className="text-lg">{benefit}</span> ].map((benefit, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
          <p className="mb-8 text-lg max-w-2xl mx-auto">
            Take the first step towards a rewarding career in healthcare.
          </p>
          <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
            <Link href="/careers/apply">View All Positions</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}