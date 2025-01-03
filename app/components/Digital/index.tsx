"use client";  // Indique que ce composant utilise des hooks de React (client-side)

import { useState, useEffect } from "react";
import Getstartedform from './Getstarted';

const Digital = () => {
  const phrases = [
    "We are a consulting company,",
    "specializing in Cloud DevSecOps solutions.",
    "We build secure, scalable systems,",
    "driving efficiency and innovation.",
    "Let's achieve long-term success together."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change phrase every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="mx-2 relative">
      {/* Conteneur avec fond noir et dégradé */}
      <div className="mx-auto max-w-7xl px-4 my-40 pb-20 lg:pb-40 lg:px-8 relative rounded-3xl bg-gradient-to-r from-black via-gray-800 to-black animate-gradient-x shadow-xl overflow-hidden">
        
        {/* Cercles blancs dispersés dans l'arrière-plan */}
        <div className="absolute inset-0 z-0">
          {/* Crée plusieurs cercles avec des tailles et positions aléatoires */}
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className={`absolute bg-white rounded-full opacity-${(index % 4) * 10 + 10} animate-pulse`}
              style={{
                width: `${Math.random() * 150 + 50}px`,
                height: `${Math.random() * 150 + 50}px`,
                top: `${Math.random() * 100 + 10}%`,
                left: `${Math.random() * 100 + 10}%`,
                animationDelay: `${Math.random() * 1500}ms`
              }}
            ></div>
          ))}
        </div>

        {/* Effet de flou léger */}
        <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-md"></div>

        <div className="relative z-10 flex flex-col justify-center items-center py-24 px-6 text-center text-white space-y-6">
          <h4 className="text-4xl sm:text-6xl font-bold leading-snug max-w-4xl mx-auto">
            {/* Dynamically changing text */}
            <span className="text-white">
              {phrases[currentIndex]}
            </span>
          </h4>
        </div>
        {/* Bouton positionné en bas avec fond blanc et texte foncé */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 mb-4">
          {/* Intégration du formulaire pour l'ouverture du modal */}
          <Getstartedform />
        </div>
      </div>
    </div>
  );
};

export default Digital;
