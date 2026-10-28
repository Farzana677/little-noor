
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import LearningCategories from "@/components/learning-categories";
import ParentSection from "@/components/parent-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffdf7]">
      <Navbar />
      <Hero />
      <LearningCategories />
      <ParentSection />
      <Footer />
    </main>
  );
}
