import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Flame, GraduationCap, Users, Award, Star } from "lucide-react";
import HeroSlideshow from "@/components/Slideshow";

const HeroSection = () => {
  return (
    <section id="home" className="w-full min-h-screen relative overflow-hidden shadow-xl">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#fef9f7",
          backgroundImage: `
            radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%)
          `,
        }}
      />
      {/* Content */}
      <div className="relative mt-16 z-10 container max-w-360 mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge variant="outline" className="w-fit border-red-200 text-red-700 rounded-full">
                <Flame className="w-3 h-3 mr-1" />
                Accredited Programs
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Master Fire & Safety Engineering
              </h1>
              <p className="max-w-150 text-gray-600 md:text-xl">
                Join India&apos;s premier institute for fire and safety engineering education. Build a rewarding career
                protecting lives and property with our comprehensive degree and diploma programs.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                <GraduationCap className="mr-2 h-4 w-4" />
                View Courses
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hover:border-red-600 hover:text-red-600 transition-colors duration-300 bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-gray-600 text-sm">
              <div className="flex items-center">
                <Users className="mr-1 h-4 w-4" />
                500+ Alumni
              </div>
              <div className="flex items-center">
                <Award className="mr-1 h-4 w-4" />
                MSME Registered
              </div>
              <div className="flex items-center">
                <Star className="mr-1 h-4 w-4" />
                4.8/5 Rating
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <HeroSlideshow />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;