import Image from "next/image";
import Hero from "./components/home/Hero";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="Home">
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
