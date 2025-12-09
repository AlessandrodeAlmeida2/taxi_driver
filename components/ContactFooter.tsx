import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, ArrowRight } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Transfer',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const text = `Olá, meu nome é ${formData.name}. Gostaria de informações sobre ${formData.service}. Mensagem: ${formData.message}`;
    
    // Target number: (19) 99194-4137 -> 5519991944137
    const phoneNumber = "5519991944137";
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-secondary-900 text-white pt-24 pb-12 rounded-t-[3rem] mt-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-extrabold mb-6 text-white">
              Vamos planejar sua <span className="text-primary-500">próxima viagem?</span>
            </h2>
            <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-md">
              Entre em contato agora mesmo. Nossa família está pronta para receber a sua com segurança e conforto.
            </p>
            
            <div className="space-y-8">
              <a 
                href="https://wa.me/5519991944137" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-start gap-5 group"
              >
                <div className="bg-slate-800 p-4 rounded-2xl text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 shadow-lg shadow-black/20">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-primary-400 transition-colors">WhatsApp & Telefone</h4>
                  <p className="text-slate-300 mt-1 font-mono text-xl">(19) 99194-4137</p>
                  <p className="text-slate-500 text-sm mt-1">Atendimento 24h</p>
                </div>
              </a>
              
              <div className="flex items-start gap-5">
                <div className="bg-slate-800 p-4 rounded-2xl text-primary-500 shadow-lg shadow-black/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Email</h4>
                  <p className="text-slate-300 mt-1">agostini55@hotmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-slate-800 p-4 rounded-2xl text-primary-500 shadow-lg shadow-black/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">Região de Atendimento</h4>
                  <p className="text-slate-300 mt-1">Espírito Santo do Pinhal, Santo Antônio do Jardim e toda região.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="bg-slate-800 p-4 rounded-full hover:bg-primary-600 hover:text-white transition-all text-slate-400 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-4 rounded-full hover:bg-primary-600 hover:text-white transition-all text-slate-400 hover:scale-110">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
              Orçamento Rápido <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1.5">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors placeholder:text-slate-600"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-1.5">WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors placeholder:text-slate-600"
                  placeholder="(19) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-400 mb-1.5">Serviço de Interesse</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors appearance-none"
                >
                  <option value="Transfer">Traslado Aeroporto</option>
                  <option value="WineTour">Tour de Vinícolas</option>
                  <option value="CoffeeTour">Rota do Café</option>
                  <option value="Gastronomy">Turismo Gastronômico</option>
                  <option value="CityTour">City Tour</option>
                  <option value="Intercity">Viagem Intermunicipal</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1.5">Detalhes</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none placeholder:text-slate-600"
                  placeholder="Data, horário, quantidade de pessoas..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-600/20 hover:shadow-green-500/30 flex items-center justify-center gap-3 group"
              >
                <MessageCircle size={22} className="group-hover:animate-pulse" />
                Iniciar Conversa no WhatsApp
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm gap-4">
          <p>&copy; {new Date().getFullYear()} D'Alvia Vicente Táxi & Turismo.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-400 transition-colors">Termos</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};