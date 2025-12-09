import React from 'react';
import { MapPin, Wine, Coffee, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] md:min-h-[700px] flex items-center justify-center overflow-hidden py-28 md:py-0">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2000&auto=format&fit=crop" 
          alt="Vista da Serra em Espírito Santo do Pinhal" 
          className="w-full h-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite]"
          style={{ animationDuration: '30s' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          <div className="md:w-3/4 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-200 text-sm font-semibold mb-8 backdrop-blur-md shadow-lg shadow-primary-900/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Disponível 24h para agendamentos
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              A Essência da<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-200 to-primary-400">
                Serra dos Encontros
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl font-light leading-relaxed md:mx-0 mx-auto">
              Viaje com a segurança e a hospitalidade da <strong>Família D'Alvia Vicente</strong>. Especialistas em rotas de vinhos, cafés especiais e turismo executivo na Toscana Paulista.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#contact"
                className="group w-full sm:w-auto min-w-[200px] px-8 py-4 bg-primary-500 hover:bg-primary-400 text-slate-900 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(252,164,11,0.3)] hover:shadow-[0_0_30px_rgba(252,164,11,0.5)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <MapPin size={20} className="group-hover:animate-bounce" />
                Agendar Táxi
              </a>
              <a 
                href="#planner"
                className="group w-full sm:w-auto min-w-[200px] px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/30 rounded-xl font-bold text-lg backdrop-blur-sm transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
              >
                <span className="flex items-center gap-1">
                  <Wine size={18} />
                  <Coffee size={18} />
                </span>
                Roteiros
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce text-white/50">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </div>
  );
};