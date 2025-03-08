import BannerSection from "./components/banner-section/BannerSection";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import ProjectSection from "./components/project-section/ProjectSection";

export default function Home() {

  return (
    <>
      <BannerSection />
      <Hero />
      <ProjectSection />
      <Footer />
    </>
  );
}
