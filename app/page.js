import About from "./components/About";
import Footer from "./components/Footer";
import MainIntro from "./components/MainIntro";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import RoadMap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import "./home.css";

export default function Home() {
  return (
    <section>
      <main className="flex min-h-screen flex-col items-center justify-between md:p-10 p-3 main-wrap">
        <Navbar />
        <MainIntro />
        <About />
        <RoadMap />
        <Tokenomics />
        <Partners />
      </main>
      <Footer />
    </section>
  );
}
