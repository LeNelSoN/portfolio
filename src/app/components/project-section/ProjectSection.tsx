import ProjectCard from "../project-card/ProjectCard"

interface ProjectSectionProps {
    id: string;
}

const ProjectSection: React.FC<ProjectSectionProps> = ({id}) => {
    return (
        <div className="container mx-auto w-full px-12 min-h-screen" id={id}>
            <h2 className="text-4xl font-bold text-center mt-10 text-gray-400 drop-shadow-lg">Mes projets</h2>
            <p className="text-center mt-5 md:text-2xl drop-shadow-lg text-gray-300">
                Voila mes realisations, n&apos;hesitez pas a me contacter pour plus
                d&apos;informations
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-10">
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
                    link={"https://github.com/LeNelSoN/portfolio"}
                />
            </div>
        </div>
    )
}

export default ProjectSection