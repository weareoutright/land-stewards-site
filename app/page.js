import Image from "next/image";
import Hero from "./components/home/Hero";
import Footer from "./components/Footer";
import CTABannerHome from "./components/home/CTABannerHome";
import HomeContent from "./components/home/HomeContent";

export default function Home() {
  return (
    <div className="Home">
      <main>
        <Hero />
        <HomeContent />
        <CTABannerHome />
      </main>
    </div>
  );
}
