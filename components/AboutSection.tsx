
import React from 'react';
import { ShieldCheck, Heart, Clock } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 rounded-full opacity-50 blur-xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-secondary-900/10 rounded-full opacity-50 blur-xl"></div>
          <img 
            // Imagem atualizada para um motorista profissional
            src="https://images.unsplash.com/photo-1600320254374-ce2d293c324e?q=80&w=800&auto=format&fit=crop" 
            alt="Motorista da Família D'Alvia Vicente" 
            className="relative rounded-2xl shadow-2xl w-full object-cover h-[500px]"
          />
          <div className="absolute bottom-8 left-8 right-8 bg-white/95 p-6 rounded-xl shadow-lg backdrop-blur-sm">
            <p className="text-slate-800 italic font-medium">
              "Para nós, cada passageiro é um amigo da família. Segurança e hospitalidade são nossa herança."
            </p>
            <p className="mt-2 text-primary-600 font-bold">— Família D'Alvia Vicente</p>
          </div>
        </div>

        <div className="mt-12 lg:mt-0">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-6">
            Tradição familiar a serviço do seu conforto
          </h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Há mais de 20 anos nas estradas da Serra dos Encontros, a Família D'Alvia Vicente construiu uma reputação sólida baseada na confiança. Não somos apenas um aplicativo anônimo; somos profissionais dedicados que conhecem cada curva da estrada e cada história local.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                  <ShieldCheck size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-slate-900">Segurança Total</h3>
                <p className="mt-2 text-slate-500">
                  Veículos revisados rigorosamente e motoristas profissionais com direção defensiva.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                  <Heart size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-slate-900">Atendimento Humanizado</h3>
                <p className="mt-2 text-slate-500">
                  Tratamos idosos e crianças com carinho especial. Auxiliamos com bagagens e necessidades específicas.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-primary-600">
                  <Clock size={24} />
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-slate-900">Pontualidade Britânica</h3>
                <p className="mt-2 text-slate-500">
                  Seu tempo é precioso. Garantimos estar no local combinado com antecedência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
