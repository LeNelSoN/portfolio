"use client"

import Image from 'next/image'
import profil from "@/app/assets/profil.png";
import virus from "@/app/assets/virus.webp";
import { useGlitch } from '@/app/contexts/GlitchContext';

const GlitchedImage = () => {
    const { isGlitched } = useGlitch();

    return (
        <>
            <Image
                src={profil}
                alt="profil"
                width={400}
                height={400} 
                className={`object-cover ${isGlitched ? "hidden" : ""}`}
                priority
            />
            <Image
                src={virus}
                alt="profil"
                width={400}
                height={400} 
                className={`object-cover ${isGlitched ? "" : "hidden"}`}
                priority
            />
        </>
    )
}

export default GlitchedImage