import React from "react";
import { ServiceItem } from "../types";
import { Wine, Coffee, Plane, Building2, Map, Utensils } from "lucide-react";

const services: ServiceItem[] = [
  {
    id: 1,
    title: "Tour de Vinícolas",
    description:
      "Passeio guiado pelas melhores adegas de Espírito Santo do Pinhal. Degustação de vinhos de inverno sem a preocupação de dirigir.",
    icon: <Wine size={32} className="text-primary-600" />,
    imageUrl:
      "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Rota do Café",
    description:
      "Visite fazendas históricas da região, conheça o processo de colheita e deguste cafés especiais premiados direto da fonte.",
    icon: <Coffee size={32} className="text-primary-600" />,
    imageUrl:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Traslados Aeroporto",
    description:
      "Recepção no desembarque e transporte seguro até Espírito Santo do Pinhal. Pontualidade garantida.",
    icon: <Plane size={32} className="text-primary-600" />,
    imageUrl: "https://picsum.photos/seed/airport/600/400",
  },
  {
    id: 4,
    title: "Turismo Gastronômico",
    description:
      "Te levamos às melhores experiências, incluindo a famosa culinária italiana e restaurantes da região.",
    icon: <Utensils size={32} className="text-primary-600" />,
    // Imagem substituída: Restaurante rústico com parede de tijolos/adega
    imageUrl: "/img/fotos-o-restaurante-4.jpg",
  },
  {
    id: 5,
    title: "City Tour Pinhal",
    description:
      "Conheça os principais pontos turísticos, igrejas históricas e a beleza arquitetônica de Espírito Santo do Pinhal.",
    icon: <Map size={32} className="text-primary-600" />,
    // Imagem substituída: Fonte iluminada à noite em praça
    imageUrl: "/img/city-tour-noturno.jpg",
  },
  {
    id: 6,
    title: "Viagens Intermunicipais",
    description:
      "Conforto total para viagens saindo de Pinhal para cidades vizinhas ou capitais. Preços fechados e competitivos.",
    icon: <Building2 size={32} className="text-primary-600" />,
    // Imagem substituída: Estrada cênica/encantadora
    imageUrl:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop",
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm">
          Nossos Serviços
        </h2>
        <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Excelência em Mobilidade na Região
        </h3>
        <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
          Seja a negócios ou lazer, a família D'Alvia Vicente cuida do seu
          transporte para que você aproveite o melhor de Espírito Santo do
          Pinhal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 group border border-slate-100"
          >
            <div className="h-48 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10"></div>
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md z-20 backdrop-blur-sm">
                {service.icon}
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-2">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-block mt-4 text-primary-600 font-semibold hover:text-primary-700 group-hover:translate-x-1 transition-transform"
              >
                Solicitar cotação &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
