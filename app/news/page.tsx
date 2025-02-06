import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function News() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center">
        <Image
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
          alt="Medical news"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="container relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Health News & Updates</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Stay informed about the latest healthcare news, medical breakthroughs, and wellness tips.
          </p>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {[
              {
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
                title: "New Medical Technology Breakthrough",
                date: "April 15, 2024",
                category: "Technology",
                excerpt: "Learn about the latest advancements in medical technology and how they're improving patient care. Our hospital has recently acquired state-of-the-art equipment to enhance treatment outcomes."
              },
              {
                image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80",
                title: "Preventive Healthcare Tips",
                date: "April 12, 2024",
                category: "Wellness",
                excerpt: "Discover essential tips for maintaining good health and preventing common medical conditions. Our experts share valuable insights on lifestyle modifications for better health."
              }
            ].map((news, index) => (
              <Card key={index} className="border-none shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                    <span className="text-sm text-blue-600">{news.category}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{news.title}</h2>
                  <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                  <Button asChild variant="link" className="p-0">
                    <Link href={`/news/${index + 1}`} className="flex items-center gap-2">
                      Read Full Article <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80",
                title: "Mental Health Awareness",
                date: "April 10, 2024",
                category: "Mental Health",
                excerpt: "Understanding the importance of mental health and available support services."
              },
              {
                image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80",
                title: "Nutrition for Optimal Health",
                date: "April 8, 2024",
                category: "Nutrition",
                excerpt: "Expert advice on maintaining a balanced diet for better health outcomes."
              },
              {
                image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80",
                title: "Exercise and Wellness",
                date: "April 5, 2024",
                category: "Fitness",
                excerpt: "Tips for staying active and maintaining physical wellness at any age."
              },
              {
                image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
                title: "Healthcare Innovation",
                date: "April 3, 2024",
                category: "Innovation",
                excerpt: "Exploring new developments in healthcare delivery and patient care."
              },
              {
                image: "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80",
                title: "Women's Health Guide",
                date: "April 1, 2024",
                category: "Women's Health",
                excerpt: "Comprehensive guide to women's health issues and preventive care."
              },
              {
                image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80",
                title: "Children's Health",
                date: "March 30, 2024",
                category: "Pediatrics",
                excerpt: "Essential information for parents about children's health and development."
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
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                    <span className="text-sm text-blue-600">{news.category}</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{news.title}</h3>
                  <p className="text-muted-foreground mb-4">{news.excerpt}</p>
                  <Button asChild variant="link" className="p-0">
                    <Link href={`/news/${index + 3}`} className="flex items-center gap-2">
                      Read More <ChevronRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest health news, tips, and updates.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}