import BannerSection from "./components/banner-section/BannerSection";
import Hero from "./components/hero/Hero";
import ProjectCard from "./components/project-card/ProjectCard";

export default function Home() {

  return (
    <>
      <BannerSection />
      <Hero />
      <div className="container mx-auto text-gray-600">
        <h1 className="text-3xl font-bold text-center mt-10 text-gray-800">Mes projets</h1>
        <p className="text-center mt-5">
          Voila mes realisations, n&apos;hesitez pas a me contacter pour plus
          d&apos;informations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <ProjectCard 
            title={"L'Api dont vous étes le heros"}
            imgSrc={"/assets/Api hero.png"}
            altImg={"api-hero"}
            description={`C'est une API interactive en Java qui donne vie à l'aventure des histoires "dont vous êtes le héros". 
              Les utilisateurs peuvent se lancer dans des quêtes uniques, prendre des décisions à chaque étape et créer des récits dynamiques, 
              tout en retrouvant la nostalgie des livres d'aventure classiques.`}
            link={"https://github.com/LeNelSoN/you-are-the-hero"}
          />
          <ProjectCard 
            title={"Teamoop (backend)"}
            altImg={"Teamoop Github"}
            description={`Teamoop est une plateforme collaborative qui connecte les développeurs juniors à des projets open-source. Les utilisateurs peuvent créer, publier et rejoindre des projets, filtrer par compétences ou technologies, et collaborer via des rôles définis.`}
            link={"https://github.com/LeNelSoN/teamoop-backend"}
          />
          <ProjectCard 
            title={"Portfolio"}
            altImg={"Portfolio Github"}
            description={`C'est mon portfolio, il est fait avec Next.js et TailwindCSS. Il est responsive et contient des informations sur moi, mes projets et mes compétences.`}
            link={"https://github.com/LeNelSoN"}
          />
        </div>
      </div>
    </>
  );
}
