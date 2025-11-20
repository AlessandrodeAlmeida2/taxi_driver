import React from 'react';
import { MapPin, Wine, Coffee } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
          alt="Vista da Serra da Mantiqueira" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
        <div className="md:w-2/3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-400/30 text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Disponível 24h para agendamentos
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
            Explore Espírito Santo do Pinhal com a<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200">
              Família D'Alvia Vicente
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl font-light leading-relaxed shadow-black/50 drop-shadow-md">
            Experiências exclusivas em vinícolas premiadas, fazendas de café centenárias e turismo gastronômico, guiados por quem tem tradição na região.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href="#contact"
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-primary-500/40 transition-all flex items-center justify-center gap-2"
            >
              <MapPin size={20} />
              Agendar Passeio
            </a>
            <a 
              href="#planner"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg font-bold text-lg backdrop-blur-sm transition-all flex items-center justify-center gap-2"
            >
              <Wine size={20} />
              <Coffee size={20} />
              Montar Roteiro
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-50 to-transparent z-10"></div>
    </div>
  );
};
