"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface GlitchContextProps {
    isGlitched: boolean;
    showBattle: boolean;
    startBattle: () => void;
    stopBattle: () => void;
    endBattle: () => void;
}

const GlitchContext = createContext<GlitchContextProps>({
    isGlitched: false,
    showBattle: false,
    startBattle: () => {},
    stopBattle: () => {},
    endBattle: () => {}
});

interface GlitchProviderProps {
    children: ReactNode;
}

export const GlitchProvider: React.FC<GlitchProviderProps> = ({ children }) => {
    const [isGlitched, setIsGlitched] = useState<boolean>(false);
    const [showBattle, setShowBattle] = useState<boolean>(false);
    const [interactions, setInteractions] = useState<number>(0);
    const [lastScroll, setLastScroll] = useState<number>(0);
    const [hasDefeatedBug, setHasDefeatedBug] = useState<boolean>(false);


    const randomizeGlitch = (): boolean => {
        return Math.random() < 0.05;
    };

    const triggerGlitch = () => {
        if (hasDefeatedBug) return;
        setIsGlitched(true);
    };

    useEffect(() => {
        if (randomizeGlitch()) {
            triggerGlitch();
        }
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isGlitched && Math.random() < 0.1) { 
                triggerGlitch();
            }
        }, 30000); 

        return () => clearTimeout(timer);
    }, [isGlitched]);

    useEffect(() => {
        if (interactions >= 10 && !isGlitched && Math.random() < 0.2) { 
            triggerGlitch();
            setInteractions(0); 
        }
    }, [interactions, isGlitched]);

    useEffect(() => {
        const handleClick = () => setInteractions((prev) => prev + 0.5);

        const handleScroll = () => {
            const now = Date.now();
            if (now - lastScroll > 1000) { 
                setInteractions((prev) => prev + 1);
                setLastScroll(now);
            }
        };

        document.addEventListener("click", handleClick);
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("scroll", handleScroll);
        };
    }, [lastScroll]);

    const startBattle = () => setShowBattle(true);
    const stopBattle = () => setShowBattle(false);
    const endBattle = () => {
        setShowBattle(false);
        setIsGlitched(false);
        setHasDefeatedBug(true);
    };

    return (
        <GlitchContext.Provider value={{ isGlitched, showBattle, startBattle, stopBattle, endBattle }}>
            {children}
        </GlitchContext.Provider>
    );
};

export const useGlitch = (): GlitchContextProps => useContext(GlitchContext);
