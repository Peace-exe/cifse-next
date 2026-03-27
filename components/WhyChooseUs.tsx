import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, Award, BookOpen, GraduationCap, Shield } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="w-fit rounded-full border-red-200 text-red-700">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Excellence in Fire and Safety Education
            </h2>
            <p className="max-w-225 text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover what makes CIFSE the preferred choice for fire and safety engineering education.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="text-center border-gray-300 shadow-xl">
            <CardHeader>
              <Building className="mx-auto h-12 w-12 text-red-600" />
              <CardTitle>Modern Infrastructure</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                State-of-the-art laboratories, simulation centers, and modern classrooms equipped with latest technology.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-gray-300 shadow-xl">
            <CardHeader>
              <Users className="mx-auto h-12 w-12 text-red-600" />
              <CardTitle>Expert Faculty</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Learn from industry professionals and experienced academicians with years of practical experience.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-gray-300 shadow-xl">
            <CardHeader>
              <Award className="mx-auto h-12 w-12 text-red-600" />
              <CardTitle>Industry Recognition</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                COTTED approved programs with recognition from leading fire safety organizations and industries.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-gray-300 shadow-xl">
            <CardHeader>
              <BookOpen className="mx-auto h-12 w-12 text-red-600" />
              <CardTitle>Practical Training</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Hands-on training with real-world scenarios, internships, and industry project collaborations.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-gray-300 shadow-xl">
            <CardHeader>
              <GraduationCap className="mx-auto h-12 w-12 text-red-600" />
              <CardTitle>Placement Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Dedicated placement cell with 100% placement assistance and career guidance for all students.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-gray-300 shadow-xl">
            <CardHeader>
              <Shield className="mx-auto h-12 w-12 text-red-600" />
              <CardTitle>Safety First</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Comprehensive safety protocols and emergency response training integrated into all programs.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;