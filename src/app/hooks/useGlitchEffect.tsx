import { useEffect, useState } from "react";

const useGlitchEffect = (): boolean => {
    const [glitch, setGlitch] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const interval = setInterval(() => {
            setGlitch((prev) => !prev);
        }, Math.random() * 500 + 50); 

        return () => clearInterval(interval);
    }, []);

    return glitch;
};

export default useGlitchEffect;
