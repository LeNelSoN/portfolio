import Image from 'next/image'
import React from 'react'

interface ProjectCardProps {
  title: string;
  imgSrc?: string;
  altImg: string;
  description: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, imgSrc = "/assets/GitHub.png", altImg, description, link }) => {
  return (
    <div className="flex flex-col items-center bg-gray-200 p-4 rounded-lg shadow-xl text-justify min-h-96 justify-between">
            <h2 className="text-3xl font-bold text-gray-800">
              {title}
            </h2>
            <Image
              src={imgSrc}
              alt={altImg}
              width={300}
              height={100}
              className="object-cover"
            />
            <p className="mt-2">
              {description}
            </p>

            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-gray-600 flex items-center"
            >
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-2"
              >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.376.201 2.393.099 2.646.64.699 1.028 1.592 1.028 2.683 0 3.842-2.337 4.687-4.563 4.937.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .267.18.577.688.479C19.135 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                clipRule="evenodd"
              />
              </svg>
              Voir le projet
            </a>
          </div>
  )
}

export default ProjectCard