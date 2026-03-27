import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GraduationCap, Clock, BookOpen, Award } from "lucide-react";

const Courses = () => {
  return (
    <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="w-fit border-red-200 text-red-700 rounded-full">
              Our Programs
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              Comprehensive Fire & Safety Courses
            </h2>
            <p className="max-w-225 text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose from our range of specialized programs designed to meet industry demands and career aspirations.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
          {/* Degree Programs */}
          <Card className="relative overflow-hidden border-gray-300 shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge className="bg-red-600 hover:bg-red-700 rounded-full text-neutral-50">
                  Degree Programs
                </Badge>
                <GraduationCap className="h-6 w-6 text-red-600" />
              </div>
              <CardTitle className="text-2xl">Bachelor&apos;s & Master&apos;s Degrees</CardTitle>
              <CardDescription className="text-gray-600">
                Comprehensive 3-4 year programs for in-depth knowledge and research opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Available Programs:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• B.Tech in Fire & Safety Engineering (4 years)</li>
                  <li>• B.Sc in Fire & Safety Management (3 years)</li>
                  <li>• M.Tech in Fire & Safety Engineering (2 years)</li>
                  <li>• M.Sc in Industrial Safety (2 years)</li>
                </ul>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  3-4 Years
                </div>
                <div className="flex items-center">
                  <BookOpen className="mr-1 h-4 w-4" />
                  Full-time
                </div>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-neutral-50">
                Learn More
              </Button>
            </CardContent>
          </Card>

          {/* Diploma Programs */}
          <Card className="relative overflow-hidden border-gray-300 shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="bg-gray-100 rounded-full">
                  Diploma Programs
                </Badge>
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <CardTitle className="text-2xl">Professional Diplomas</CardTitle>
              <CardDescription className="text-gray-600">
                Focused 1-2 year programs for quick entry into the fire safety industry.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold">Available Programs:</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Diploma in Fire & Safety Engineering (2 years)</li>
                  <li>• Diploma in Industrial Safety (1 year)</li>
                  <li>• Advanced Diploma in Fire Prevention (1.5 years)</li>
                  <li>• Certificate in Emergency Response (6 months)</li>
                </ul>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  6 months - 2 Years
                </div>
                <div className="flex items-center">
                  <BookOpen className="mr-1 h-4 w-4" />
                  Full/Part-time
                </div>
              </div>
              <Button variant="outline" className="w-full border-gray-300">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Courses;