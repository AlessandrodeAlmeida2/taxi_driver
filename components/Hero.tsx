import React from 'react';
import { MapPin, Wine, Coffee, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] md:min-h-[700px] flex items-center overflow-hidden py-28 md:py-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
          alt="Vista da Serra em Espírito Santo do Pinhal" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability - lighter than before */}
        <div className="absolute inset-0 bg-slate-900/40"></div>
        
        {/* The requested smooth white blend at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center">
        <div className="w-full md:w-2/3 lg:w-1/2 text-left">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/60 border border-white/20 text-primary-400 text-sm font-semibold mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Disponível 24h para agendamentos
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 shadow-black/50 drop-shadow-lg">
            Explore Espírito Santo do Pinhal com a<br />
            <span className="text-primary-400">
              Família D'Alvia Vicente
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-100 mb-10 max-w-xl font-medium drop-shadow-md leading-relaxed">
            Experiências exclusivas nas melhores vinícolas, fazendas de café centenárias e turismo gastronômico da Toscana Paulista.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Button 1: Solid Primary Color (Symmetrical) */}
            <a 
              href="#contact"
              className="flex-1 sm:flex-none min-w-[220px] px-6 py-4 bg-primary-500 hover:bg-primary-400 text-slate-900 rounded-lg font-bold text-lg shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <MapPin size={22} />
              Agendar Passeio
            </a>

            {/* Button 2: Dark/Glassy (Symmetrical) */}
            <a 
              href="#planner"
              className="flex-1 sm:flex-none min-w-[220px] px-6 py-4 bg-slate-900/70 hover:bg-slate-800/80 text-white border border-white/20 rounded-lg font-bold text-lg backdrop-blur-md shadow-lg transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              <span className="flex items-center gap-2">
                <Wine size={20} />
                <Coffee size={20} />
              </span>
              Montar Roteiro
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};