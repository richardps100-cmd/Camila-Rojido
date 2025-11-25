import React from 'react';
import { PhoneIcon, InstagramIcon, MapPinIcon } from './Icons';

export const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-stone-900 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-screen-xl mx-auto px-8 lg:px-16 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl font-serif mb-6">Agenda tu Consulta</h2>
                    <p className="text-stone-300 mb-8 font-light text-lg">
                        Da el primer paso hacia tu mejor versión. Contáctanos para una valoración personalizada donde analizaremos tus necesidades y objetivos.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="p-4 bg-stone-800 rounded-full group-hover:bg-gold-500 transition-colors">
                                <PhoneIcon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-stone-400 uppercase tracking-wider">Teléfono / WhatsApp</p>
                                <a href="tel:611812304" className="text-xl font-serif hover:text-gold-300 transition-colors">611 812 304</a>
                            </div>
                        </div>

                         <div className="flex items-center gap-4 group">
                            <div className="p-4 bg-stone-800 rounded-full group-hover:bg-gold-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm text-stone-400 uppercase tracking-wider">Email</p>
                                <a href="mailto:dracamilarojido@gmail.com" className="text-xl font-serif hover:text-gold-300 transition-colors">dracamilarojido@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group">
                             <div className="p-4 bg-stone-800 rounded-full group-hover:bg-gold-500 transition-colors">
                                <InstagramIcon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-stone-400 uppercase tracking-wider">Instagram</p>
                                <a href="https://instagram.com/dra.camilarojido" target="_blank" rel="noreferrer" className="text-xl font-serif hover:text-gold-300 transition-colors">@dra.camilarojido</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                    <h3 className="text-2xl font-serif mb-6 text-gold-300">Ubicaciones</h3>
                    
                    <div className="space-y-8">
                        <div className="flex gap-4">
                            <MapPinIcon className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="text-lg font-bold">Madrid</h4>
                                <p className="text-stone-300 font-light text-sm mt-1">
                                    Consulta privada disponible bajo cita previa.<br/>
                                    Zona céntrica y accesible.
                                </p>
                            </div>
                        </div>
                         <div className="flex gap-4">
                            <MapPinIcon className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="text-lg font-bold">Lanzarote</h4>
                                <p className="text-stone-300 font-light text-sm mt-1">
                                    Atención periódica en la isla.<br/>
                                    Consultar próximas fechas disponibles.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-center text-stone-400 italic font-serif">
                            "La belleza es cómo te sientes por dentro, y se refleja en tus ojos."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};