"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, BookOpen, GraduationCap, ChevronRight, Star } from "lucide-react";

interface Course {
  id: string;
  title: string;
  department: string;
  code: string;
  credits: number;
  duration: string;
  instructor: string;
  enrolled: number;
  capacity: number;
  rating: number;
  level: "Undergraduate" | "Graduate" | "Doctoral";
  description: string;
  prerequisites: string[];
  tags: string[];
}

const courses: Course[] = [
  {
    id: "1",
    title: "Introduction to Computer Science",
    department: "Computer Science",
    code: "CS 101",
    credits: 4,
    duration: "16 weeks",
    instructor: "Dr. Sarah Chen",
    enrolled: 245,
    capacity: 300,
    rating: 4.8,
    level: "Undergraduate",
    description: "A foundational course covering programming fundamentals, data structures, algorithms, and computational thinking. Students will gain hands-on experience with Python and learn to solve real-world problems.",
    prerequisites: [],
    tags: ["Programming", "Algorithms", "Python"],
  },
  {
    id: "2",
    title: "Advanced Machine Learning",
    department: "Computer Science",
    code: "CS 680",
    credits: 3,
    duration: "14 weeks",
    instructor: "Prof. James Liu",
    enrolled: 58,
    capacity: 60,
    rating: 4.9,
    level: "Graduate",
    description: "Deep dive into modern machine learning techniques including deep learning, reinforcement learning, generative models, and their applications in natural language processing and computer vision.",
    prerequisites: ["CS 480", "MATH 301"],
    tags: ["AI", "Deep Learning", "Neural Networks"],
  },
  {
    id: "3",
    title: "Organic Chemistry II",
    department: "Chemistry",
    code: "CHEM 202",
    credits: 4,
    duration: "16 weeks",
    instructor: "Dr. Maria González",
    enrolled: 120,
    capacity: 150,
    rating: 4.3,
    level: "Undergraduate",
    description: "Continuation of Organic Chemistry I, covering reaction mechanisms, spectroscopy, polymers, and biological molecules. Includes a weekly laboratory component.",
    prerequisites: ["CHEM 201"],
    tags: ["Organic", "Lab", "Spectroscopy"],
  },
  {
    id: "4",
    title: "Constitutional Law",
    department: "Political Science",
    code: "POLS 350",
    credits: 3,
    duration: "16 weeks",
    instructor: "Prof. David Park",
    enrolled: 85,
    capacity: 100,
    rating: 4.6,
    level: "Undergraduate",
    description: "Examination of the U.S. Constitution through landmark Supreme Court cases. Topics include separation of powers, federalism, civil liberties, and equal protection.",
    prerequisites: ["POLS 101"],
    tags: ["Law", "Government", "Civil Rights"],
  },
  {
    id: "5",
    title: "Quantum Field Theory",
    department: "Physics",
    code: "PHYS 720",
    credits: 3,
    duration: "14 weeks",
    instructor: "Dr. Elena Petrov",
    enrolled: 18,
    capacity: 25,
    rating: 4.7,
    level: "Doctoral",
    description: "Advanced treatment of relativistic quantum mechanics, canonical quantization, Feynman diagrams, renormalization, and the Standard Model of particle physics.",
    prerequisites: ["PHYS 601", "PHYS 610"],
    tags: ["Quantum", "Particle Physics", "Theory"],
  },
  {
    id: "6",
    title: "Microeconomics",
    department: "Economics",
    code: "ECON 201",
    credits: 3,
    duration: "16 weeks",
    instructor: "Prof. Alan Wright",
    enrolled: 200,
    capacity: 250,
    rating: 4.4,
    level: "Undergraduate",
    description: "Study of individual economic decision-making, market structures, price theory, consumer behavior, and production. Includes real-world case studies and policy analysis.",
    prerequisites: ["MATH 101"],
    tags: ["Markets", "Consumer Theory", "Policy"],
  },
  {
    id: "7",
    title: "Biomedical Engineering Seminar",
    department: "Engineering",
    code: "BME 590",
    credits: 2,
    duration: "14 weeks",
    instructor: "Dr. Aisha Rahman",
    enrolled: 32,
    capacity: 40,
    rating: 4.5,
    level: "Graduate",
    description: "Weekly seminar featuring leading researchers in biomedical engineering. Topics include tissue engineering, medical devices, bioinformatics, and translational medicine.",
    prerequisites: ["BME 301"],
    tags: ["Biomedical", "Research", "Seminar"],
  },
  {
    id: "8",
    title: "Modern World History",
    department: "History",
    code: "HIST 105",
    credits: 3,
    duration: "16 weeks",
    instructor: "Prof. Claire Dubois",
    enrolled: 175,
    capacity: 200,
    rating: 4.2,
    level: "Undergraduate",
    description: "Survey of global history from the 18th century to the present, covering revolutions, industrialization, world wars, decolonization, and globalization.",
    prerequisites: [],
    tags: ["World History", "Modern Era", "Global"],
  },
];

const departments = ["All", ...Array.from(new Set(courses.map((c) => c.department)))];

const levelColor = {
  Undergraduate: "bg-primary/10 text-primary border-primary/20",
  Graduate: "bg-accent/80 text-accent-foreground",
  Doctoral: "bg-destructive/10 text-destructive border-destructive/20",
};

const CourseComponent = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const filtered = selectedDepartment === "All"
    ? courses
    : courses.filter((c) => c.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-background mt-6 px-6 md:px-10">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-20">
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Explore Our Courses
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            Discover a wide range of academic programs designed to challenge, inspire, and prepare you for the future.
          </p>
          <div className="flex items-center gap-6 mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" /> {courses.length} Courses
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4" /> {departments.length - 1} Departments
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-10">
        <Tabs defaultValue="All" onValueChange={setSelectedDepartment}>
          <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1 mb-8">
            {departments.map((dept) => (
              <TabsTrigger key={dept} value={dept} className="text-xs sm:text-sm">
                {dept}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedDepartment} className="mt-0">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((course) => (
                <Card
                  key={course.id}
                  className="group hover:shadow-lg transition-all duration-300 border-border/60 hover:border-primary/30 cursor-pointer"
                  onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                        {course.code}
                      </span>
                      <Badge variant="outline" className={levelColor[course.level]}>
                        {course.level}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-snug group-hover:text-primary transition-colors">
                      {course.title}
                    </CardTitle>
                    <CardDescription className="text-sm">{course.department}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {course.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs font-normal">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground pt-2 border-t">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" /> {course.duration}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="h-3.5 w-3.5" /> {course.credits} Credits
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5" /> {course.enrolled}/{course.capacity}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Star className="h-3.5 w-3.5 fill-primary/60 text-primary" /> {course.rating}
                      </span>
                    </div>

                    {/* Expanded details */}
                    {expandedCourse === course.id && (
                      <div className="pt-3 border-t space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div>
                          <p className="text-xs font-semibold text-foreground mb-1">Instructor</p>
                          <p className="text-sm text-muted-foreground">{course.instructor}</p>
                        </div>
                        {course.prerequisites.length > 0 && (
                          <div>
                            <p className="text-xs font-semibold text-foreground mb-1">Prerequisites</p>
                            <div className="flex gap-1.5 flex-wrap">
                              {course.prerequisites.map((p) => (
                                <Badge key={p} variant="outline" className="text-xs">
                                  {p}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        <Button size="sm" className="w-full mt-2">
                          Enroll Now <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default CourseComponent;
