import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutUs";
import Courses from "@/components/Courses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ApplyNow from "@/components/ApplyNow";
import FAQSection from "@/components/FAQ";
import Announcements from "@/components/Announcements";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <HeroSection />
        <AboutSection />
        <Announcements/>
        <Courses />
        <WhyChooseUs />
        <ApplyNow />
        <Contact />
        <FAQSection/>
      </div>
      <Footer />
    </div>
  );
}