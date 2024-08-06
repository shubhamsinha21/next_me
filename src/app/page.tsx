import Hero from "@/components/Hero";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
import MyProjects from "@/components/MyProjects";
import MyExperiences from "@/components/MyExperiences";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-black/[0.96] antialiased 
    bg-grid-white/[0.02]"
    >
      <Hero />
      <MyProjects />
      <MyExperiences />
      <TestimonialCards />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
