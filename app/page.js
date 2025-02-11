import Image from "next/image";
import Hero from "./components/home/Hero";
import Footer from "./components/Footer";
import CTABannerHome from "./components/CTABannerHome";

export default function Home() {
  return (
    <div className="Home">
      <main>
        <Hero />
        <CTABannerHome />
      </main>
    </div>
  );
}
