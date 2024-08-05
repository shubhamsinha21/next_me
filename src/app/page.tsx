import Hero from "@/components/Hero";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseMe from "@/components/WhyChooseMe";
import TestimonialCards from "@/components/TestimonialCards";

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
    </main>
  );
}
