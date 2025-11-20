import React from 'react';
import { Star, ExternalLink, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Heloisa Salgado",
    text: "Excelentes as experiências com Luiza e tambem com o sr. Marco. Depois de conhecer o seu trabalho, de primeira, não contratei outros profissionais do ramo.",
    url: "https://maps.app.goo.gl/HUYQn1sKHfFMHyE68"
  },
  {
    id: 2,
    name: "Wladimir Soares",
    text: "Fui muito bem atendido pelo motorista Marco. Pessoa gentil, confiável e prestativo. Recomendo.",
    url: "https://maps.app.goo.gl/DVH2okmQRMEvdFxT9"
  },
  {
    id: 3,
    name: "Rafael Rocha R. Porto Bom",
    text: "Muito bom atendimento.",
    url: "https://maps.app.goo.gl/tpZUef8KsB8qUdYQ9"
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex justify-center items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={24} className="text-primary-500 fill-current" />
          ))}
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-2">
          Avaliações dos Clientes
        </h2>
        <div className="flex items-center justify-center gap-2 text-slate-500 font-medium">
          <span className="bg-white border border-slate-200 px-2 py-0.5 rounded text-sm font-bold text-slate-700">Google</span>
          <span>5.0 baseado em avaliações</span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300 relative"
          >
            <Quote className="absolute top-6 right-6 text-primary-100 h-10 w-10 -scale-x-100" />
            
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-primary-400 fill-current" />
              ))}
            </div>

            <blockquote className="flex-grow mb-6">
              <p className="text-slate-600 italic leading-relaxed">
                "{review.text}"
              </p>
            </blockquote>

            <div className="border-t border-slate-100 pt-4 mt-auto">
              <p className="font-bold text-slate-900">{review.name}</p>
              <a 
                href={review.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary-600 hover:text-primary-700 font-semibold uppercase mt-2 tracking-wide"
              >
                Ver no Google Maps
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};