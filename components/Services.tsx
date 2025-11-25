import React from 'react';
import { ServiceItem } from '../types';
import { FaceIcon, SparklesIcon } from './Icons';

const services: ServiceItem[] = [
  {
    title: "Rellenos con Ácido Hialurónico",
    description: "Recupera volúmenes perdidos, hidrata profundamente y define contornos como labios, pómulos y mandíbula con resultados naturales.",
    icon: <FaceIcon className="w-8 h-8" />
  },
  {
    title: "Toxina Botulínica (Botox)",
    description: "Suaviza las arrugas de expresión en frente, entrecejo y patas de gallo, logrando una mirada descansada y rejuvenecida.",
    icon: <SparklesIcon className="w-8 h-8" />
  },
  {
    title: "Mesoterapia Facial",
    description: "Cócteles de vitaminas, aminoácidos y ácido hialurónico no reticulado para revitalizar la piel y aportar luminosidad instantánea.",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
    )
  },
  {
    title: "Hilos Tensores",
    description: "Efecto lifting sin cirugía. Estimulan la producción de colágeno natural para combatir la flacidez leve y mejorar la firmeza.",
    icon: (
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        </svg>
    )
  },
  {
    title: "Medicina Regenerativa",
    description: "Tratamientos avanzados que utilizan los propios recursos del cuerpo para reparar tejidos y mejorar la calidad de la piel.",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
        </svg>
    )
  }
];

export const Services: React.FC = () => {
  return (
    <section id="tratamientos" className="py-24 bg-stone-50">
      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 w-full">
        <div className="text-center mb-16">
            <span className="text-gold-500 font-semibold uppercase tracking-widest text-sm">Procedimientos</span>
            <h2 className="text-4xl font-serif text-stone-850 mt-2">Nuestros Tratamientos</h2>
            <p className="text-stone-600 mt-4 max-w-2xl mx-auto">
                Protocolos médicos personalizados para cada necesidad, buscando siempre la armonía y la seguridad del paciente.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 group">
              <div className="w-16 h-16 bg-stone-50 rounded-full flex items-center justify-center text-stone-800 mb-6 group-hover:bg-gold-100 group-hover:text-gold-600 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-serif text-stone-850 mb-3">{service.title}</h3>
              <p className="text-stone-600 font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};