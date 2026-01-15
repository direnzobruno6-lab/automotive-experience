import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Vision />
      {/* Garage moved to separate page */}
      <Gallery />
      <Contact />
    </div>
  );
}
