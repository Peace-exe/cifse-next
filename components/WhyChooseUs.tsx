"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BuildingOfficeIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  FlaskIcon,
  GraduationCapIcon,
  SealCheckIcon,
  FireTruckIcon,
  FireExtinguisherIcon
  
} from "@phosphor-icons/react/ssr";

const duotoneStyle = {
  "--ph-duotone-opacity": 0.2,
} as React.CSSProperties;

const features = [
  {
    icon: BuildingOfficeIcon,
    title: "Modern Infrastructure",
    description:
      "State-of-the-art laboratories, simulation centers, and modern classrooms equipped with latest technology.",
  },
  {
    icon: GraduationCapIcon,
    title: "Expert Faculty",
    description:
      "Learn from industry professionals and experienced academicians with years of practical experience.",
  },
  {
    icon: SealCheckIcon,
    title: "Industry Recognition",
    description:
      "COTTED approved programs with recognition from leading fire safety organizations and industries.",
  },
  {
    icon: FireTruckIcon,
    title: "Practical Training",
    description:
      "Hands-on training with real-world scenarios, internships, and industry project collaborations.",
  },
  {
    icon: BriefcaseIcon,
    title: "Placement Support",
    description:
      "Dedicated placement cell with 100% placement assistance and career guidance for all students.",
  },
  {
    icon: FireExtinguisherIcon,
    title: "Safety First",
    description:
      "Comprehensive safety protocols and emergency response training integrated into all programs.",
  },
];

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
            <p className="max-w-2xl text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover what makes CIFSE the preferred choice for fire and safety engineering education.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="text-center border-gray-300 shadow-xl">
              <CardHeader>
                <Icon
                  size={48}
                  weight="duotone"
                  color="#dc2626"
                  style={duotoneStyle}
                  className="mx-auto"
                />
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;