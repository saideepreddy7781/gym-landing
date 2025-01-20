import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Dumbbell, Heart, ArrowRight, Check, Apple, Users, Star, ChevronRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Dumbbell className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">GymFlex</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Button variant="ghost">Home</Button>
              <Button variant="ghost">Features</Button>
              <Button variant="ghost">Pricing</Button>
              <Button variant="ghost">Testimonials</Button>
              <Button variant="ghost">Contact</Button>
            </div>
            <Button className="bg-primary hover:bg-primary/90">Join Now</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-secondary">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Life with the Ultimate Method and Mind-Blowing Features
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Experience a revolutionary fitness journey with our cutting-edge gym facilities and expert guidance.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              Start Your Transformation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Apple className="h-12 w-12 text-primary" />,
                title: "Easily Track Your Diet",
                description: "Keep a record of meals, times, food selections, portion sizes, and any additional notes",
              },
              {
                icon: <Dumbbell className="h-12 w-12 text-primary" />,
                title: "Whatever Fitness",
                description: "Keep a record of meals, times, food selections, portion sizes, and any additional notes",
              },
              {
                icon: <Heart className="h-12 w-12 text-primary" />,
                title: "One Stop Health Solution",
                description: "Keep a record of meals, times, food selections, portion sizes, and any additional notes",
              },
            ].map((feature, index) => (
              <Card key={index} className="border-none shadow-none bg-card text-card-foreground">
                <CardContent className="pt-6">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-secondary py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Pricing Like Never Before</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Essential",
                price: "Rs",
                features: [
                  "Counselling for Selecting University",
                  "Counselling for Selecting Course",
                  "Application Assistance",
                  "SOP and LOR",
                  "Loan Assistance",
                  "Visa Slot Booking (on availability)",
                ],
              },
              {
                title: "Premium",
                price: "Rs",
                features: [
                  "Everything included from Essential",
                  "Affordable Flight Tickets Booking",
                  "US Credit Card",
                  "GRA guidance",
                  "CTA guidance",
                  "Academic Assignment Assistance",
                ],
                highlighted: true,
              },
              {
                title: "Elite",
                price: "Rs",
                features: [
                  "Everything from Essential Plus",
                  "Priority Processing",
                  "USA Sim card",
                  "Accommodation Assistance",
                  "Academic Excellence and Career Growth Support",
                  "Legal Assistance if required",
                  "Affordable Health Insurance",
                  "Xult Kit",
                  "Job Assistance (USA)",
                ],
              },
            ].map((plan, index) => (
              <Card key={index} className={`${plan.highlighted ? "border-primary shadow-lg" : "border"} bg-card text-card-foreground`}>
                <CardHeader>
                  <CardTitle>
                    <div className="text-2xl font-bold mb-2">{plan.title}</div>
                    <div className="text-4xl font-bold text-primary">{plan.price}</div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${plan.highlighted ? "bg-primary hover:bg-primary/90" : "bg-muted hover:bg-muted/90 text-muted-foreground"}`}
                  >
                    Buy now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Members Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Emily Wilson",
                role: "Member since 2023",
                comment: "The trainers here are amazing! I've achieved results I never thought possible.",
              },
              {
                name: "David Chen",
                role: "Member since 2022",
                comment: "Great community and modern facilities. It's more than just a gym, it's a lifestyle.",
              },
              {
                name: "Lisa Anderson",
                role: "Member since 2023",
                comment: "The variety of classes and flexible schedule makes it easy to stay committed to fitness.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-card text-card-foreground">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.comment}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8">Join GymFlex today and start your journey to a healthier, stronger you!</p>
          <Button size="lg" variant="secondary" className="text-primary bg-primary-foreground hover:bg-primary-foreground/90">
            Get Started Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Dumbbell className="h-6 w-6" />
                <span className="text-lg font-bold">GymFlex</span>
              </div>
              <p className="text-muted-foreground">Your premier fitness destination for a stronger, healthier life.</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>About Us</li>
                <li>Classes</li>
                <li>Schedule</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>123 Fitness Street</li>
                <li>Los Angeles, CA 90001</li>
                <li>info@gymflex.com</li>
                <li>(555) 123-4567</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Opening Hours</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Monday - Friday: 6am - 10pm</li>
                <li>Saturday: 7am - 8pm</li>
                <li>Sunday: 8am - 6pm</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-muted-foreground mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} GymFlex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
