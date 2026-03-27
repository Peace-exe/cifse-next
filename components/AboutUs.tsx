import React from "react";
import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge"

// If you're using Tailwind UI components like <Badge /> from your own library,
// You must replace it with a standard HTML tag or recreate that component.
// For now, I’ll replace it with a <span> styled like a badge.
export default function AboutSection() {
  return (
    <section id="about" className=" max-w-[90rem] mx-auto py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[400px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
        <img
          src="/cifse-logo-no-bg2.png"
          alt="Fire safety laboratory"
          className="mx-auto mt-3 w-[400px] rounded-xl object-contain"
        />



          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="outline" className="w-fit border-red-200 text-red-700 rounded-full">
                
                About Us
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Leading Fire Safety Education <span className="text-red-600">Since 2015</span>
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Central Institute of Fire and Safety Engineering has been at the forefront of fire and safety engineering education for over 10 years.
                We combine theoretical knowledge with practical training to prepare students for successful careers in
                fire prevention, safety management, and emergency response.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 ">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-red-600" />
                <span className="text-sm">COTTED Affiliated Institute</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-red-600" />
                <span className="text-sm">Industry Expert Faculty</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-red-600" />
                <span className="text-sm">State-of-art Labs</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-red-600" />
                <span className="text-sm">100% Placement Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
