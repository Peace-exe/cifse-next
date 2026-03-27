import { ArrowLeft, Download, Eye, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const galleryImages = [
  { id: 1, src: "/placeholder.svg?height=300&width=400", title: "Fire Safety Training Session", date: "2024-01-15", location: "Main Campus" },
  { id: 2, src: "/placeholder.svg?height=300&width=400", title: "Fire Extinguisher Demo", date: "2024-01-12", location: "Training Ground" },
  { id: 3, src: "/placeholder.svg?height=300&width=400", title: "Graduation Ceremony 2024", date: "2024-01-10", location: "Auditorium" },
  { id: 4, src: "/placeholder.svg?height=300&width=400", title: "Safety Equipment Lab", date: "2024-01-08", location: "Lab Building" },
  { id: 5, src: "/placeholder.svg?height=300&width=400", title: "Emergency Evacuation Drill", date: "2024-01-05", location: "Campus Wide" },
  { id: 6, src: "/placeholder.svg?height=300&width=400", title: "Hazmat Safety Training", date: "2024-01-03", location: "Specialized Lab" },
  { id: 7, src: "/placeholder.svg?height=300&width=400", title: "Annual Safety Conference", date: "2023-12-20", location: "Conference Hall" },
  { id: 8, src: "/placeholder.svg?height=300&width=400", title: "Fire Simulation Training", date: "2023-12-18", location: "Simulation Center" },
  { id: 9, src: "/placeholder.svg?height=300&width=400", title: "Excellence Awards 2023", date: "2023-12-15", location: "Main Hall" },
  { id: 10, src: "/placeholder.svg?height=300&width=400", title: "Safety Workshop", date: "2023-12-10", location: "Workshop Hall" },
  { id: 11, src: "/placeholder.svg?height=300&width=400", title: "Campus Safety Tour", date: "2023-12-08", location: "Campus" },
  { id: 12, src: "/placeholder.svg?height=300&width=400", title: "Practical Examination", date: "2023-12-05", location: "Exam Center" },
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link
            href="/"
            className="flex items-center space-x-2 hover:text-red-600 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-bold text-gray-900">Photo Gallery</h1>
            <p className="text-xs text-gray-500">FireSafe Institute</p>
          </div>
          <div className="w-24" />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Journey in Fire Safety Education
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover moments that define our commitment to excellence in fire
            safety training and education.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {galleryImages.map((image) => (
            <Card
              key={image.id}
              className="group overflow-hidden bg-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
                    <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                      <Download className="h-4 w-4 mr-1" />
                      Save
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1 group-hover:text-red-600 transition-colors">
                  {image.title}
                </h3>
                <div className="space-y-1">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{new Date(image.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span className="line-clamp-1">{image.location}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-lg shadow-sm border p-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-1">1000+</div>
              <div className="text-sm text-gray-600">Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-1">10+</div>
              <div className="text-sm text-gray-600">Years</div>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-red-50 hover:text-red-600 hover:border-red-200 bg-transparent"
          >
            Load More Photos
          </Button>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-red-600 text-white py-12 mt-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Community?</h3>
          <p className="text-lg mb-6 opacity-90">
            Start your journey in fire safety education with us today.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100">
            Enroll Now
          </Button>
        </div>
      </div>
    </div>
  );
}