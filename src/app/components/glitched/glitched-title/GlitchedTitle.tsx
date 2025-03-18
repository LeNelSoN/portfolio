'use client'

import { useGlitch } from "@/app/contexts/GlitchContext";
import useGlitchEffect from "@/app/hooks/useGlitchEffect";

interface GlitchedTitleProps {
    className: string;
    children: React.ReactNode;
}

const GlitchedTitle: React.FC<GlitchedTitleProps> = ({ className, children }) => {
    const { isGlitched } = useGlitch();
    const isGlitchedEffect = useGlitchEffect();

    return (
        <h1 className={`${className} ${isGlitched && isGlitchedEffect ? "glitch" : ""}`}>{children}</h1>
    );
}

export default GlitchedTitle;