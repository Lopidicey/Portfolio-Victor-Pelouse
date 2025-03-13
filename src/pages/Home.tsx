import React, { useState, useEffect } from 'react';
import { ArrowDown, Code, Terminal, Laptop, Sparkles, Coffee } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [activeDemo, setActiveDemo] = useState(1);
  const [coffeeCount, setCoffeeCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    transform: `translateY(${scrollY * 0.5}px)`,
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="text-center z-10">
          <h1 className={`text-5xl md:text-7xl font-bold dark:text-white text-gray-900 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-emerald-500 inline-block hover:scale-105 transition-transform duration-300">
              Développeur
            </span>{' '}
            <span className="inline-block hover:scale-105 transition-transform duration-300">
              Full Stack
            </span>
          </h1>
          <p className={`text-xl dark:text-gray-300 text-gray-600 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Passionné par la création d'applications web innovantes et performantes
          </p>
          <div className={`animate-bounce absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}>
            <ArrowDown className="text-emerald-500" size={32} />
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b dark:from-gray-900 dark:to-emerald-900 from-gray-100 to-emerald-100 opacity-50"></div>
          <img
            src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80"
            alt="Background"
            className="w-full h-full object-cover transition-transform duration-700"
            style={parallaxStyle}
          />
        </div>
      </section>

      <section className="py-20 dark:bg-gray-900 bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center dark:text-white text-gray-900 mb-12">
            À propos de moi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <img
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80"
                alt="Profile"
                className="rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-emerald-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </div>
            <div className="space-y-6">
              <p className="dark:text-gray-300 text-gray-600 text-lg">
                Je suis un développeur passionné par la création d'applications web modernes
                et performantes. Mon expertise couvre aussi bien le front-end que le back-end,
                avec une attention particulière pour l'expérience utilisateur.
              </p>
              <p className="dark:text-gray-300 text-gray-600 text-lg">
                Toujours à l'affût des dernières technologies et des meilleures pratiques,
                je m'efforce de créer des solutions innovantes et efficaces pour mes clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-gray-800 bg-gray-100 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center dark:text-white text-gray-900 mb-16">
            Démonstrations Interactives
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className={`p-8 rounded-lg shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                activeDemo === 1 
                  ? 'dark:bg-emerald-700 bg-emerald-500 dark:text-white text-white' 
                  : 'dark:bg-gray-700 bg-white dark:text-gray-300 text-gray-600'
              }`}
              onClick={() => setActiveDemo(1)}
            >
              <Code className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Animation au Hover</h3>
              <p>Survolez cette carte pour voir les effets de transition</p>
            </div>

            <div 
              className={`p-8 rounded-lg shadow-lg transition-all duration-300 cursor-pointer ${
                activeDemo === 2 
                  ? 'dark:bg-emerald-700 bg-emerald-500 dark:text-white text-white scale-105' 
                  : 'dark:bg-gray-700 bg-white dark:text-gray-300 text-gray-600'
              }`}
              onClick={() => setActiveDemo(2)}
            >
              <Terminal className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Scale à la Sélection</h3>
              <p>Cliquez pour voir l'effet de mise à l'échelle</p>
            </div>

            <div 
              className={`p-8 rounded-lg shadow-lg transition-all duration-300 cursor-pointer transform hover:rotate-2 ${
                activeDemo === 3 
                  ? 'dark:bg-emerald-700 bg-emerald-500 dark:text-white text-white' 
                  : 'dark:bg-gray-700 bg-white dark:text-gray-300 text-gray-600'
              }`}
              onClick={() => setActiveDemo(3)}
            >
              <Laptop className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Rotation Subtile</h3>
              <p>Survolez pour une rotation légère</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 dark:bg-gray-900 bg-white transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center dark:text-white text-gray-900 mb-16">
            Zone Interactive
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 dark:bg-gray-800 bg-gray-100 rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold dark:text-white text-gray-900">Compteur de Café</h3>
                <Coffee className="text-emerald-500" size={24} />
              </div>
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                Combien de tasses de café pour coder ce portfolio ?
              </p>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCoffeeCount(prev => prev + 1)}
                  className="px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors duration-300"
                >
                  Ajouter une tasse
                </button>
                <span className="text-2xl font-bold dark:text-white text-gray-900">{coffeeCount}</span>
              </div>
            </div>

            <div className="p-8 dark:bg-gray-800 bg-gray-100 rounded-lg shadow-lg relative overflow-hidden group">
              <Sparkles 
                className="absolute top-4 right-4 text-emerald-500 transition-transform duration-300 group-hover:rotate-180" 
                size={24} 
              />
              <h3 className="text-xl font-bold dark:text-white text-gray-900 mb-4">
                Zone Magique
              </h3>
              <p className="dark:text-gray-300 text-gray-600 mb-4">
                Survolez cette zone pour voir la magie opérer
              </p>
              <div className="h-32 dark:bg-gray-700 bg-gray-200 rounded-lg transition-all duration-500 group-hover:bg-emerald-500 relative overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">✨ Magnifique !</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 dark:bg-gray-800 bg-gray-100 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-center">
          <a className="twitter-timeline text-white text-center color-white" href="https://twitter.com/Lopidicey?ref_src=twsrc%5Etfw">Tweets by Lopidicey</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </div>   
      </section>
    </div>
  );
}