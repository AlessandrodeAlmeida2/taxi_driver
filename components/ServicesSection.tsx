import React from 'react';
import { ServiceItem } from '../types';
import { Wine, Coffee, Plane, Building2, Map, Utensils, ArrowUpRight } from 'lucide-react';

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Tour de Vinícolas",
    description: "Passeio guiado pelas melhores adegas de Espírito Santo do Pinhal. Degustação de vinhos de inverno sem a preocupação de dirigir.",
    icon: <Wine size={28} className="text-white" />,
    imageUrl: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Rota do Café",
    description: "Visite fazendas históricas da região, conheça o processo de colheita e deguste cafés especiais premiados da região.",
    icon: <Coffee size={28} className="text-white" />,
    imageUrl: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Traslados Aeroporto",
    description: "Recepção no desembarque (Viracopos/Guarulhos) e transporte seguro. Monitoramento de voo e pontualidade garantida.",
    icon: <Plane size={28} className="text-white" />,
    imageUrl: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Turismo Gastronômico",
    description: "Te levamos às melhores experiências, incluindo a famosa culinária italiana e restaurantes da região.",
    icon: <Utensils size={28} className="text-white" />,
    imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "City Tour Pinhal",
    description: "Conheça os principais pontos turísticos, igrejas históricas e a beleza arquitetônica de Espírito Santo do Pinhal.",
    icon: <Map size={28} className="text-white" />,
    imageUrl: "https://images.unsplash.com/photo-1596423733638-34440632292f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Viagens Executivas",
    description: "Conforto total para viagens saindo de Pinhal para cidades vizinhas ou capitais. Carros sedã e minivans disponíveis.",
    icon: <Building2 size={28} className="text-white" />,
    imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop"
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <span className="text-primary-600 font-bold tracking-wider uppercase text-xs border border-primary-200 bg-primary-50 px-3 py-1 rounded-full">Nossos Serviços</span>
        <h3 className="mt-6 text-3xl leading-8 font-extrabold text-slate-900 sm:text-5xl">
          Experiências Personalizadas
        </h3>
        <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto font-light">
          A família D'Alvia Vicente oferece mais que transporte: oferecemos tranquilidade para você desfrutar o melhor da vida.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service) => (
          <div 
            key={service.id} 
            className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 flex flex-col"
          >
            <div className="h-56 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors z-10"></div>
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; 
                  target.src = "https://images.unsplash.com/photo-1532935296431-40e6d0431138?q=80&w=800&auto=format&fit=crop";
                }}
              />
              <div className="absolute top-4 right-4 bg-primary-500 p-3 rounded-2xl shadow-lg z-20 shadow-primary-500/20 transform group-hover:rotate-6 transition-transform">
                {service.icon}
              </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col">
              <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              
              <div className="mt-auto pt-6 border-t border-slate-100">
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 text-primary-600 font-bold text-sm uppercase tracking-wide group-hover:gap-3 transition-all"
                >
                  Solicitar Cotação
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};