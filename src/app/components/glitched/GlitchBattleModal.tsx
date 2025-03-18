"use client";

import { useGlitch } from "@/app/contexts/GlitchContext";
import { useState } from "react";

const GlitchBattleModal = () => {
  const { showBattle, stopBattle, endBattle } = useGlitch();
  const [bugHP, setBugHP] = useState(100);
  const [playerHP, setPlayerHP] = useState(100);
  const [message, setMessage] = useState("🐛 Un Bug Sauvage apparaît !");
  
  const attacks = [
    { name: "📜 Accuser le Legacy", minDamage: 1, maxDamage: 5, playerDamage: 10,  text: "Tu cries 'C'est la faute du legacy !' 🏛️" },
    { name: "📋 Demander plus de specs", minDamage: 3, maxDamage: 10, playerDamage: 6, text: "Tu exiges une spec détaillée, le bug doute... 🤔" },
    { name: "🛠️ Refactoriser", minDamage: 10, maxDamage: 20, playerDamage: 1, text: "Tu refactores tout le code, le bug souffre ! 🔧" },
    { name: "💾 Ajouter un console.log", minDamage: 7, maxDamage: 17, playerDamage: 4, text: "Tu mets un `console.log()`, le bug panique ! 📟" },
  ];

  const attackBug = (attack: { name: string; minDamage: number; maxDamage: number; playerDamage:number; text: string }) => {
    const damage = Math.floor(Math.random() * (attack.maxDamage - attack.minDamage + 1)) + attack.minDamage;
    setBugHP((prev) => Math.max(prev - damage, 0));
    setPlayerHP((prev) => prev - attack.playerDamage)
    setMessage(`${attack.text} Le bug perd ${damage} PV ! Et tu perds ${attack.playerDamage} PV ! 😵`);

    if (playerHP <= 0 ) {
        setMessage("🦸‍♂️ Un Senior vient à ton aide !");
        setPlayerHP(100);
    }

    if (bugHP - damage <= 0) {
      setTimeout(() => {
        setMessage("🎉 Le Bug Sauvage a été vaincu !");
        setTimeout(endBattle, 2000);
      }, 1000);
    }
  };

  if (!showBattle) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
      <div className="bg-gray-600 text-white p-6 rounded-lg shadow-lg md:w-1/3 w-96 crt-effect border-4 border-gray-300">        
        <div className="flex justify-between mb-4">
          <div>
            <h2 className="pokemon-font text-yellow-300">🐛 Bug Sauvage</h2>
            <div className="w-full bg-red-500 h-3 mt-1 relative">
              <div className="bg-green-400 h-3 absolute" style={{ width: `${bugHP}%` }}></div>
            </div>
          </div>

          <div className="text-right">
            <h2 className="pokemon-font text-blue-300">💻 Toi</h2>
            <div className="w-full bg-red-500 h-3 mt-1 relative">
              <div className="bg-green-400 h-3 absolute" style={{ width: `${playerHP}%` }}></div>
            </div>
          </div>
        </div>
                <div className="bg-gray-800 p-3 border-4 border-white mb-4 pokemon-font">
          <p className="text-xs">{message}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {attacks.map((attack, index) => (
            <button
              key={index}
              onClick={() => attackBug(attack)}
              className="p-2 bg-blue-500 border-2 border-white rounded-lg pokemon-font text-xs hover:bg-blue-700 cursor-pointer"
            >
              {attack.name}
            </button>
          ))}
          <button
            onClick={stopBattle}
            className="p-2 bg-yellow-500 border-2 border-white rounded-lg pokemon-font text-xs hover:bg-yellow-700 cursor-pointer"
          >
            🏃 FUIR
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlitchBattleModal;
