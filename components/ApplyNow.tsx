"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Flame,
  Phone,
  Award,
  Star,
  Shield,
  MapPin,
  Mail,
  MousePointerClick,
  FileDown,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden">
            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="text-center space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <Badge
                    variant="outline"
                    className="border-red-200 text-red-700 bg-red-50 rounded-full"
                  >
                    <Flame className="w-3 h-3 mr-1" />
                    Start Your Journey
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                    Ready to Build Your
                    <span className="text-red-600 block">
                      Career in Fire and Safety Engineering?
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Join hundreds of successful graduates who protect lives and
                    property. Start your journey with India&apos;s premier fire
                    safety institute.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600">Successful Graduates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
                    <div className="text-sm text-gray-600">Placement Assistance</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
                    <div className="text-sm text-gray-600">Years of Excellence</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="default"
                        size="lg"
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        <MousePointerClick />
                        Apply Now
                      </Button>
                    </DialogTrigger>

                    <DialogContent className="bg-neutral-50 shadow-xl border-gray-300 sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-semibold tracking-tight">
                          Application Instructions
                        </DialogTitle>
                      </DialogHeader>
                      <p className="leading-7 mt-6">
                        To get started, download the application form and submit
                        it to the address provided. You can find all the details
                        about your chosen course on our{" "}
                        <Link href="/courses">
                          <span className="text-red-600 hover:underline hover:shadow-lg">
                            Courses page
                          </span>
                        </Link>{" "}
                        — we&apos;re excited to have you join us!
                      </p>

                      <div className="mt-6 space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-red-600 mt-1" />
                          <div>
                            <p className="font-medium">Address</p>
                            <p className="text-sm text-gray-700">
                              123 Safety Boulevard, Fire District
                              <br />
                              New Delhi - 110001, India
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Phone className="h-5 w-5 text-red-600 mt-1" />
                          <div>
                            <p className="font-medium">Phone</p>
                            <p className="text-sm text-gray-700">+91 11 2345 6789</p>
                          </div>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Mail className="h-5 w-5 text-red-600 mt-1" />
                          <div>
                            <p className="font-medium">Email</p>
                            <p className="text-sm text-gray-700">
                              admissions@firesafeinstitute.edu
                            </p>
                          </div>
                        </div>
                      </div>

                      <a href="/Admission-Form.pdf" download>
                        <Button
                          variant="default"
                          className="bg-red-600 hover:bg-red-700 text-white"
                        >
                          <FileDown />
                          Download Application Form
                        </Button>
                      </a>
                    </DialogContent>
                  </Dialog>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:border-red-300 hover:text-red-600 bg-transparent"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Schedule a Call
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Award className="mr-2 h-4 w-4 text-red-500" />
                      MSME Registered
                    </div>
                    <div className="flex items-center">
                      <Star className="mr-2 h-4 w-4 text-red-500" />
                      4.8/5 Student Rating
                    </div>
                    <div className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-red-500" />
                      Industry Recognized
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}