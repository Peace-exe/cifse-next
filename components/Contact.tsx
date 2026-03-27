import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="w-fit rounded-full border-red-200 text-red-700"
            >
              Get in Touch
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Start Your Career in Fire and Safety Today
            </h2>
            <p className="max-w-150 mx-auto text-center text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ready to join our community of fire safety professionals? Contact
              us for admissions and course information.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-sm text-gray-700">
                      123 Safety Boulevard, Fire District
                      <br />
                      New Delhi - 110001, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-700">+91 11 2345 6789</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-700">
                      admissions@firesafeinstitute.edu
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Office Hours</h4>
              <p className="text-sm text-gray-700">
                Monday - Friday: 9:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 2:00 PM
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-gray-300 shadow-xl">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription className="text-gray-700">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input
                    id="first-name"
                    placeholder="John"
                    className="border-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input
                    id="last-name"
                    placeholder="Doe"
                    className="border-gray-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="border-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className="border-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="course">Interested Course</Label>
                <Input
                  id="course"
                  placeholder="e.g., B.Tech Fire & Safety Engineering"
                  className="border-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your interest in fire safety engineering..."
                  className="border-gray-400"
                />
              </div>
              <Button className="w-full text-neutral-50 bg-red-600 hover:bg-red-700">
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;