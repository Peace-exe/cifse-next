"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MapPin, Phone, Mail, FileDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-gray-300 transition-all duration-300 ${
        scrolled ? "bg-white/70 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between max-w-360 mx-auto px-4">
        <div className="flex items-center space-x-2">
          <img
            src="/cifse-logo-no-bg2.png"
            alt="Logo"
            className="h-12 w-auto max-h-20"
          />
          <div>
            <h1 className="text-xl font-bold">CIFSE</h1>
            <p className="text-xs text-muted-foreground">
              Excellence in Fire & Safety Education
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-sm font-medium hover:text-red-600 transition-colors">Home</a>
          <a href="#about" className="text-sm font-medium hover:text-red-600 transition-colors">About</a>
          <a href="#courses" className="text-sm font-medium hover:text-red-600 transition-colors">Courses</a>
          <a href="#features" className="text-sm font-medium hover:text-red-600 transition-colors">Why Choose Us</a>
          <a href="#contact" className="text-sm font-medium hover:text-red-600 transition-colors">Contact</a>

          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent className="bg-neutral-50 border border-gray-300 shadow-xl">
                  <ul className="grid gap-3 p-4 w-50">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/gallery" className="block p-2 hover:bg-gray-100 rounded">
                          Gallery
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/notice" className="block p-2 hover:bg-gray-100 rounded">
                          Notice
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/faq" className="block p-2 hover:bg-gray-100 rounded">
                          FAQ
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default" className="bg-red-600 hover:bg-red-700 text-white">
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
              To get started, download the application form and submit it to the
              address provided. You can find all the details about your chosen
              course on our{" "}
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
              <Button variant="default" className="bg-red-600 hover:bg-red-700 text-white">
                <FileDown />
                Download Application Form
              </Button>
            </a>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};

export default Header;