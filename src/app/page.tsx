import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Biography from "@/components/Biography";
import Timeline from "@/components/Timeline";
import Books from "@/components/Books";
import Articles from "@/components/Articles";
import Media from "@/components/Media";
import Party from "@/components/Party";
import Positions from "@/components/Positions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Biography />
        <Timeline />
        <Books />
        <Articles />
        <Media />
        <Party />
        <Positions />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
