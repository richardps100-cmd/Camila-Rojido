import React from 'react';
import { SyringeIcon } from './Icons';

export const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 w-full">
        <div className="grid md:grid-cols-12 gap-12 items-center">
            
            <div className="md:col-span-5 relative hidden md:block">
                <div className="aspect-[3/4] bg-stone-100 overflow-hidden relative">
                     <img 
                        src="https://i.imgur.com/iHqvmSO.png" 
                        alt="Dra. Camila Rojido - Consulta" 
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="md:col-span-7 space-y-8">
                <h2 className="text-4xl font-serif text-stone-850">Sobre la Dra. Camila</h2>
                <div className="h-1 w-20 bg-gold-400"></div>
                
                <div className="text-stone-600 font-light space-y-6 leading-relaxed text-lg text-justify">
                    <p>
                        La <strong>Dra. Camila Rojido</strong> es especialista en Medicina Estética, dedicando su práctica a realzar la belleza natural mediante técnicas avanzadas y mínimamente invasivas.
                    </p>
                    <p>
                        Su formación académica de excelencia incluye el Grado en Medicina por la prestigiosa <strong>Universidad Complutense de Madrid</strong>. Posteriormente, consolidó su especialización con un Máster en Medicina Estética, Regenerativa y Antienvejecimiento, complementado con un Postgrado enfocado exclusivamente en Medicina Estética Facial.
                    </p>
                    <p>
                        La Dra. Rojido ha perfeccionado su técnica a través de diversas rotaciones de práctica clínica en instituciones reconocidas como el <strong>Hospital Clínico San Carlos de Madrid</strong>, así como en centros de Atención Primaria (CS Cea Bermúdez y Cs Lavapiés), garantizando una visión integral de la salud del paciente.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-gold-100 rounded-full text-gold-500 mt-1">
                            <SyringeIcon className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-serif text-lg text-stone-850">Expertise Técnico</h4>
                            <p className="text-sm text-stone-500 mt-1">Dominio de técnicas avanzadas en inyectables y regeneración tisular.</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-gold-100 rounded-full text-gold-500 mt-1">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-serif text-lg text-stone-850">Enfoque Humano</h4>
                            <p className="text-sm text-stone-500 mt-1">Trato cercano, personalizado y honesto con cada paciente.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};