import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseMe from "@/components/WhyChooseMe";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-black/[0.96] antialiased 
    bg-grid-white/[0.02]"
    >
      <Hero />
      <FeaturedCourses />
      <WhyChooseMe />
      <TestimonialCards />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
