import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Building, Crown, Mail, Phone, MapPin } from 'lucide-react';

const BruxellesFormationSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'title',
      title: 'L\'équipe Bruxelles Formation',
      subtitle: 'Plus de 700 collaborateurs au service de la formation',
      type: 'title'
    },
    {
      id: 'structure',
      title: 'Structure organisationnelle',
      type: 'structure-slide',
      components: [
        { title: 'Comité de direction', description: 'Pilotage stratégique' },
        { title: 'Directions centres', description: '20+ centres formation' },
        { title: 'Comité de gestion', description: 'Gouvernance opérationnelle' },
        { title: 'Représentants', description: 'Employeurs et employés' }
      ]
    },
    {
      id: 'governance',
      title: 'Gouvernance et direction',
      type: 'governance-slide',
      leadership: [
        { role: 'Président Comité gestion', name: 'Marlène Amand' },
        { role: 'Ministre invitée', name: 'Michel Kucherawyj' },
        { role: 'Représentants employeurs', count: '8 membres' },
        { role: 'Représentants employés', count: '6 membres' }
      ]
    },
    {
      id: 'contact',
      title: 'Bruxelles Formation',
      subtitle: 'Au service de l\'emploi et de la formation',
      type: 'contact-slide',
      contact: {
        address: 'Bruxelles, Région de Bruxelles-Capitale',
        website: 'bruxellesformation.brussels',
        mission: 'Formation professionnelle et insertion socioprofessionnelle'
      }
    }
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="flex items-center justify-center h-full text-center">
            <div className="space-y-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-6xl font-bold text-white leading-tight">
                {slide.title}
              </h1>
              <p className="text-3xl text-blue-300 font-medium">{slide.subtitle}</p>
            </div>
          </div>
        );

      case 'structure-slide':
        return (
          <div className="h-full flex flex-col">
            <div className="mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mb-4 rounded-full"></div>
              <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6">
              {slide.components.map((component, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-800/50 rounded-2xl flex items-center justify-center text-blue-300 mb-6">
                    <Building className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">{component.title}</h3>
                  <p className="text-gray-300">{component.description}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'governance-slide':
        return (
          <div className="h-full flex flex-col">
            <div className="mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mb-4 rounded-full"></div>
              <h2 className="text-4xl font-bold text-white">{slide.title}</h2>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6">
              {slide.leadership.map((leader, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-500/30">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-2xl flex items-center justify-center text-blue-300 mb-6">
                    <Crown className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{leader.role}</h3>
                  <p className="text-blue-300 font-medium">{leader.name || leader.count}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact-slide':
        return (
          <div className="flex items-center justify-center h-full text-center">
            <div className="space-y-8 max-w-4xl">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-800 to-blue-900 rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
                <Building className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-6xl font-bold text-white leading-tight">
                {slide.title}
              </h1>
              <p className="text-3xl text-blue-300 font-medium">{slide.subtitle}</p>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-500/30 text-left">
                <h3 className="text-2xl font-semibold text-white mb-4">Contact</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span>{slide.contact.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-blue-400">Site web:</span>
                    {slide.contact.website}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-medium text-blue-400">Mission:</span>
                    {slide.contact.mission}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Slide type not implemented</div>;
    }
  };

  const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden flex flex-col">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-12 overflow-hidden">
        <div
          key={currentSlide}
          className="h-full animate-fade-in"
        >
          {renderSlide(slides[currentSlide])}
        </div>
      </div>

      {/* Footer */}
      <div className="h-16 px-12 flex items-center justify-between border-t border-gray-800 bg-gray-900/80 backdrop-blur-sm">
        {/* Signature - Bottom Left */}
        <div className="flex items-center gap-3 text-gray-400">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-sm">
            BF
          </div>
          <span className="text-sm font-medium">Bruxelles Formation</span>
        </div>

        {/* Navigation - Bottom Right */}
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="w-10 h-10 bg-gray-800/80 border border-gray-700 rounded-full flex items-center justify-center text-blue-400 transition-all duration-300 hover:bg-gray-700/80 hover:border-blue-500/50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="w-10 h-10 bg-gray-800/80 border border-gray-700 rounded-full flex items-center justify-center text-blue-400 transition-all duration-300 hover:bg-gray-700/80 hover:border-blue-500/50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: slideIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default BruxellesFormationSlideshow;
