import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-stone-50">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-100 rounded-bl-[100px] transform translate-x-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-stone-200 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-8 lg:px-16 relative z-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        
        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left fade-in">
          <span className="text-gold-500 tracking-[0.2em] text-sm font-semibold uppercase">Medicina Estética Especialista</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-850 leading-tight">
            Dra. Camila <br/> <span className="text-stone-600">Rojido</span>
          </h1>
          <p className="text-lg text-stone-600 font-light max-w-lg mx-auto md:mx-0 leading-relaxed">
            Realzando tu belleza natural con tratamientos personalizados en Madrid y Lanzarote. Expertos en armonización facial y bienestar integral.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <a href="#contacto" className="px-8 py-3 bg-stone-850 text-white font-sans text-sm tracking-wider uppercase hover:bg-gold-500 transition-colors duration-300">
              Agendar Cita
            </a>
            <a href="#tratamientos" className="px-8 py-3 border border-stone-850 text-stone-850 font-sans text-sm tracking-wider uppercase hover:bg-stone-100 transition-colors duration-300">
              Ver Tratamientos
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative fade-in delay-100 flex justify-center md:justify-end">
            <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px]">
                <div className="absolute inset-0 border-2 border-gold-300 transform translate-x-4 translate-y-4"></div>
                <img 
                    src="https://i.imgur.com/dW45bpP.jpeg" 
                    alt="Dra. Camila Rojido" 
                    className="absolute inset-0 w-full h-full object-cover object-top shadow-xl grayscale-[10%] hover:grayscale-0 transition-all duration-700"
                />
            </div>
        </div>
      </div>
    </section>
  );
};