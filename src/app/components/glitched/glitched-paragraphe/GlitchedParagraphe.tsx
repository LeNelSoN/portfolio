"use client";

import { ReactNode } from "react";
import useGlitchEffect from "@/app/hooks/useGlitchEffect";
import { useGlitch } from "@/app/contexts/GlitchContext";

interface GlitchedParagraphProps {
    children: ReactNode;
    className?: string;
}

const GlitchedParagraph: React.FC<GlitchedParagraphProps> = ({ children, className }) => {
    const { isGlitched } = useGlitch();
    const isGlitchedEffect = useGlitchEffect();

    return (
        <p className={`${className} ${isGlitched && isGlitchedEffect ? "glitch" : ""}`}>
            {children}
        </p>
    );
};

export default GlitchedParagraph;
