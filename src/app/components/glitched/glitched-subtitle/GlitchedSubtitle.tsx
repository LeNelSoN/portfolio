'use client'

import { useGlitch } from "@/app/contexts/GlitchContext";
import useGlitchEffect from "@/app/hooks/useGlitchEffect";

interface GlitchedSubTitleProps {
    className: string;
    children: React.ReactNode;
}

const GlitchedSubTitle: React.FC<GlitchedSubTitleProps> = ({ className, children }) => {
    const { isGlitched } = useGlitch();
    const isGlitchedEffect = useGlitchEffect();

    return (
        <h2 className={`${className} ${isGlitched && isGlitchedEffect ? "glitch" : ""}`}>{children}</h2>
    );
}

export default GlitchedSubTitle;