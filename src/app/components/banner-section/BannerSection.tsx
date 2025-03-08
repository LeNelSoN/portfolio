import Image from "next/image";
import profil from "@/app/assets/profil.png";

const BannerSection = () => {
  return (
    <div className="bg-gray-900">
    <div className="flex items-center justify-center min-h-screen bg-linear-to-b from-gray-900 from-80% to-cyan-950 rounded-b-full gap-14">
      <Image
        src={profil}
        alt="profil"
        width={400}
        height={400} 
        className="object-cover"
      />
      <div className="flex flex-col items-center justify-center text-gray-100 w-1/3">
        <h1
          className="text-4xl font-bold"
        >
          Salut, je suis <span className="text-blue-500">Valentin Nelis</span>
        </h1>
        <p className="text-gray-400 mt-4">Développeur Web | Next.js | Java/Spring</p>
        <p className="text-gray-400 mt-4 text-justify text-xl">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis commodi tenetur corrupti beatae cupiditate. Corporis maxime sequi, commodi consequatur ipsum a dolorem. Ratione beatae soluta repellendus nobis consequatur, eligendi voluptatem.</p>
      </div>
    </div>
  </div>
  )
}

export default BannerSection