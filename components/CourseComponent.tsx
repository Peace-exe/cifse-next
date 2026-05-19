"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, BookOpen, GraduationCap, ChevronRight, Flame } from "lucide-react";

type Level = "Certificate" | "Diploma" | "Post Diploma" | "Degree";

interface Course {
  id: string;
  title: string;
  category: string;
  duration: string;
  intake: number;
  qualification: string;
  level: Level;
  description: string;
  tags: string[];
}

const courses: Course[] = [
  {
    id: "1",
    title: "Fire Engineering (Fire Man)",
    category: "Fire Engineering",
    duration: "6 Months",
    intake: 26,
    qualification: "10th Pass",
    level: "Certificate",
    description:
      "Foundational course in fire engineering covering fire suppression techniques, emergency response, and basic firefighting operations for aspiring firemen.",
    tags: ["Firefighting", "Emergency Response", "Safety"],
  },
  {
    id: "2",
    title: "Fire Engineering (Fire Officer)",
    category: "Fire Engineering",
    duration: "1 Year",
    intake: 30,
    qualification: "12th Pass (any stream)",
    level: "Certificate",
    description:
      "Comprehensive program for fire officers covering fire prevention, incident command, industrial fire hazards, and leadership in emergency scenarios.",
    tags: ["Fire Officer", "Incident Command", "Prevention"],
  },
  {
    id: "3",
    title: "Safety Engineering (Safety Officer)",
    category: "Safety Engineering",
    duration: "1 Year",
    intake: 30,
    qualification: "12th Pass",
    level: "Certificate",
    description:
      "Training for workplace safety officers including risk assessment, accident investigation, OSHA regulations, and safety audit methodologies.",
    tags: ["Safety Officer", "Risk Assessment", "OSHA"],
  },
  {
    id: "4",
    title: "Diploma in Fire & Safety Engineering",
    category: "Fire Engineering",
    duration: "1 Year",
    intake: 30,
    qualification: "12th Pass (any stream)",
    level: "Diploma",
    description:
      "A structured diploma program blending fire engineering fundamentals with safety management, covering industrial hazards, equipment handling, and emergency preparedness.",
    tags: ["Fire & Safety", "Industrial Hazards", "Emergency"],
  },
  {
    id: "5",
    title: "Diploma in Environmental, Health & Safety Engineering",
    category: "Safety Engineering",
    duration: "2 Years",
    intake: 30,
    qualification: "12th Pass",
    level: "Diploma",
    description:
      "In-depth two-year diploma covering environmental regulations, occupational health, industrial hygiene, and integrated health & safety management systems.",
    tags: ["Environment", "Health & Safety", "EHS"],
  },
  {
    id: "6",
    title: "Post Diploma in Fire & Safety Engineering",
    category: "Fire Engineering",
    duration: "1 Year",
    intake: 30,
    qualification: "10th / 12th / Any Graduate",
    level: "Post Diploma",
    description:
      "Advanced post-diploma program designed for working professionals seeking to upgrade skills in fire safety management, disaster planning, and industrial safety.",
    tags: ["Advanced Safety", "Disaster Management", "Industry"],
  },
  {
    id: "7",
    title: "Diploma in Construction Safety Engineering",
    category: "Safety Engineering",
    duration: "1 Year",
    intake: 30,
    qualification: "10th Pass",
    level: "Diploma",
    description:
      "Specialized diploma focusing on construction site safety, scaffolding hazards, PPE usage, height safety, and legal compliance for construction workers and supervisors.",
    tags: ["Construction", "Site Safety", "PPE"],
  },
  {
    id: "8",
    title: "Diploma in Industrial Safety Engineering",
    category: "Safety Engineering",
    duration: "1 Year",
    intake: 25,
    qualification: "12th Pass",
    level: "Diploma",
    description:
      "Industry-focused safety diploma covering machine safety, chemical hazards, ergonomics, process safety management, and legal frameworks for industrial environments.",
    tags: ["Industrial Safety", "Chemical Hazards", "Process Safety"],
  },
  {
    id: "9",
    title: "Diploma in Fire Safety & Hazard Management",
    category: "Fire Engineering",
    duration: "1 Year",
    intake: 25,
    qualification: "10th Pass",
    level: "Diploma",
    description:
      "Practical diploma training in fire safety systems, hazard identification, fire investigation techniques, and suppression system design for safety personnel.",
    tags: ["Hazard Management", "Fire Safety", "Investigation"],
  },
  {
    id: "10",
    title: "Diploma in Fire & Safety (DFS)",
    category: "Fire Engineering",
    duration: "1 Year",
    intake: 25,
    qualification: "10th Pass",
    level: "Diploma",
    description:
      "Core diploma program in fire and safety principles for entry-level candidates, covering fire behavior, extinguishing agents, rescue operations, and safety legislation.",
    tags: ["Fire Safety", "Rescue", "Legislation"],
  },
  {
    id: "11",
    title: "Certificate Course in Fire Engineering – Fireman",
    category: "Fire Engineering",
    duration: "6 Months",
    intake: 60,
    qualification: "10th / 12th / Any Graduate",
    level: "Certificate",
    description:
      "Short-term intensive certificate program preparing candidates for fireman roles with hands-on training in firefighting equipment, drills, and emergency protocols.",
    tags: ["Fireman", "Certificate", "Intensive"],
  },
];

const categories = ["All", "Fire Engineering", "Safety Engineering"];

const levelConfig: Record<Level, { bg: string; text: string; border: string }> = {
  Certificate: {
    bg: "bg-orange-50 dark:bg-orange-950",
    text: "text-orange-700 dark:text-orange-300",
    border: "border-orange-200 dark:border-orange-800",
  },
  Diploma: {
    bg: "bg-red-50 dark:bg-red-950",
    text: "text-red-700 dark:text-red-300",
    border: "border-red-200 dark:border-red-800",
  },
  "Post Diploma": {
    bg: "bg-rose-50 dark:bg-rose-950",
    text: "text-rose-700 dark:text-rose-300",
    border: "border-rose-200 dark:border-rose-800",
  },
  Degree: {
    bg: "bg-purple-50 dark:bg-purple-950",
    text: "text-purple-700 dark:text-purple-300",
    border: "border-purple-200 dark:border-purple-800",
  },
};

const CourseComponent = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null);

  const filtered =
    selectedCategory === "All"
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  const totalIntake = courses.reduce((sum, c) => sum + c.intake, 0);

  return (
    <div className="min-h-screen bg-background mt-6 px-6 md:px-10">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-20">
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Fire & Safety Programmes
          </h1>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl">
            Industry-recognized fire engineering and safety programmes designed to
            produce skilled professionals for hazardous and industrial environments.
          </p>
          <div className="flex items-center gap-6 mt-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <BookOpen className="h-4 w-4" /> {courses.length} Programmes
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4" /> {totalIntake} Total Intake
            </span>
            <span className="flex items-center gap-1.5">
              <GraduationCap className="h-4 w-4" /> 2 Departments
            </span>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-6 py-10">
        <Tabs defaultValue="All" onValueChange={setSelectedCategory}>
          <TabsList className="flex flex-wrap h-auto gap-1 bg-muted/50 p-1 mb-8">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat} className="text-xs sm:text-sm">
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-0">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 items-start">
              {filtered.map((course) => {
                const lvl = levelConfig[course.level];
                return (
                  <Card
                    key={course.id}
                    className="group hover:shadow-lg transition-all duration-300 border-border/60 hover:border-red-300 cursor-pointer"
                    onClick={() =>
                      setExpandedCourse(
                        expandedCourse === course.id ? null : course.id
                      )
                    }
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-end mb-2">
                        <Badge
                          variant="outline"
                          className={`${lvl.bg} ${lvl.text} ${lvl.border}`}
                        >
                          {course.level}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg leading-snug group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                        {course.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {course.category}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {course.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {course.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs font-normal"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs text-muted-foreground pt-2 border-t">
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" /> {course.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users className="h-3.5 w-3.5" /> Intake: {course.intake}
                        </span>
                      </div>

                      {/* Expanded details */}
                      {expandedCourse === course.id && (
                        <div className="pt-3 border-t space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                          <div>
                            <p className="text-xs font-semibold text-foreground mb-1">
                              Minimum Qualification
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {course.qualification}
                            </p>
                          </div>
                          <Button
                            size="sm"
                            className="w-full mt-2 bg-red-600 hover:bg-red-700 text-white"
                          >
                            Enquire Now <ChevronRight className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default CourseComponent;