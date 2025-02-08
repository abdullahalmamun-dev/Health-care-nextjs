"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    })
  }

  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="relative md:h-[400px] h-[300px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80"
          alt="Contact us"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-2xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="md:text-lg text-md md:text-center md:mx-0 mx-5 ">
            Get in touch with our team for appointments, inquiries, or emergency care.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="md:py-16 py-5">
        <div className="container">
          <div className="md:mx-10 mx-5 grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                details: ["123 Healthcare Ave", "Medical City, MC 12345"]
              },
              {
                icon: Phone,
                title: "Call Us",
                details: ["(555) 123-4567", "Emergency: (555) 911-0000"]
              },
              {
                icon: Mail,
                title: "Email Us",
                details: ["contact@healthcareplus.com", "support@healthcareplus.com"]
              }
            ].map((contact, index) => (
              <Card key={index} className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <contact.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{contact.title}</h3>
                  {contact.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground">{detail}</p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="md:mx-10 mx-5 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="md:text-3xl text-xl font-bold mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Hours of Operation */}
            <div>
              <h2 className="md:text-3xl text-xl font-bold mb-6">Hours of Operation</h2>
              <Card className="border-none shadow-lg">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="space-y-4">
                    {[
                      { day: "Monday - Friday", hours: "8:00 AM - 8:00 PM" },
                      { day: "Saturday", hours: "9:00 AM - 5:00 PM" },
                      { day: "Sunday", hours: "10:00 AM - 2:00 PM" }
                    ].map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="font-medium">{schedule.day}</span>
                        <span className="text-muted-foreground">{schedule.hours}</span>
                      </div>
                    ))}
                    <div className="pt-4 border-t">
                      <p className="text-muted-foreground">
                        Emergency Care Available 24/7
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}