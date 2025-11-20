import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from 'lucide-react';

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
    // In a real app, this would send to backend. 
    // Here we construct a WhatsApp URL
    const text = `Olá, meu nome é ${formData.name}. Gostaria de informações sobre ${formData.service}. Mensagem: ${formData.message}`;
    const whatsappUrl = `https://wa.me/5500000000000?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-primary-500">Fale Conosco</h2>
            <p className="text-slate-400 mb-8 text-lg">
              Estamos prontos para atendê-lo. Entre em contato para agendamentos, orçamentos ou dúvidas sobre nossos roteiros na Mantiqueira.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-primary-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Telefone / WhatsApp</h4>
                  <p className="text-slate-300 mt-1">(XX) 99999-9999</p>
                  <p className="text-slate-400 text-sm">Atendimento 24h para emergências</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-primary-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <p className="text-slate-300 mt-1">contato@dalviavicente.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-slate-800 p-3 rounded-lg text-primary-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Ponto Base</h4>
                  <p className="text-slate-300 mt-1">Praça Central, S/N - Centro</p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors text-slate-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-primary-600 hover:text-white transition-colors text-slate-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-semibold mb-6">Solicitar Orçamento Rápido</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Nome</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-1">WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                  placeholder="(XX) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-400 mb-1">Serviço de Interesse</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                >
                  <option value="Transfer">Traslado Aeroporto</option>
                  <option value="WineTour">Tour de Vinícolas</option>
                  <option value="CoffeeTour">Rota do Café</option>
                  <option value="CityTour">City Tour</option>
                  <option value="Intercity">Viagem Intermunicipal</option>
                  <option value="Other">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Detalhes (Data, Horário, Nº Pessoas)</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                  placeholder="Gostaria de um orçamento para..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2"
              >
                <MessageCircle size={20} />
                Enviar para WhatsApp
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} D'Alvia Vicente Táxi & Turismo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};