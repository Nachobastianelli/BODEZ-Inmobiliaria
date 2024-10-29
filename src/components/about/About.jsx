import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      className="bg-gray-200 text-gray-800 py-16 px-4 md:px-8 lg:px-16 overflow-hidden"
      id="sobre-nosotros"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Título con animación de aparición */}
        <motion.h2
          className="text-4xl font-bold text-[#800020] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sobre Nosotros
        </motion.h2>

        {/* Descripción con animación de desvanecimiento */}
        <motion.p
          className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          En <span className="text-[#800020] font-semibold">Bodez</span> nos
          especializamos en el mercado inmobiliario en Rosario, Santa Fe,
          Argentina. Nuestra misión es ofrecer un servicio de excelencia para
          ayudarte a encontrar el hogar o inversión ideal.
        </motion.p>

        {/* Información en columnas con animación de deslizar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Bloque de Compromiso */}
          <motion.div
            className="bg-[#800020] text-white rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-2">Nuestro Compromiso</h3>
            <p className="text-sm">
              Colores: Bordo, negro y blanco, reflejan nuestra elegancia y
              seriedad en el sector.
            </p>
          </motion.div>

          {/* Bloque de Valores */}
          <motion.div
            className="bg-gray-100 text-gray-800 rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-[#800020] mb-2">
              Valores
            </h3>
            <p className="text-sm">
              Honestidad, profesionalismo y atención de calidad en cada paso.
            </p>
          </motion.div>

          {/* Bloque de Visión */}
          <motion.div
            className="bg-[#800020] text-white rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-2">Nuestra Visión</h3>
            <p className="text-sm">
              Ser la inmobiliaria líder en Rosario, innovando en servicios y
              tecnología.
            </p>
          </motion.div>
        </div>

        {/* Texto adicional */}
        <motion.p
          className="mt-12 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          En Bodez, entendemos que cada cliente tiene necesidades únicas. Por
          eso, nuestro enfoque personalizado nos permite adaptarnos a tus
          requerimientos, garantizando así que encuentres la opción que
          realmente deseas.
        </motion.p>

        <motion.p
          className="mt-4 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Nuestro equipo está compuesto por expertos del sector, listos para
          ofrecerte asesoramiento y apoyo en cada etapa del proceso. Desde la
          búsqueda inicial hasta la firma del contrato, estamos a tu lado.
        </motion.p>

        <motion.p
          className="mt-4 text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          Te invitamos a explorar nuestras opciones y a confiar en nosotros para
          hacer realidad tus sueños inmobiliarios. ¡Contáctanos hoy mismo!
        </motion.p>

        {/* Llamado a la acción final */}
        <motion.p
          className="mt-12 text-lg text-gray-700 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          Conoce más sobre{" "}
          <span className="text-[#800020] font-semibold">Bodez</span> y déjanos
          guiarte hacia el inmueble perfecto.
        </motion.p>

        <motion.h2
          className="mt-10 text-3xl  text-gray-800 font-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <span className="font-semibold pb-3">Dueños:</span>
          <br />
        </motion.h2>

        <motion.p
          className="mt-4 text-xl  text-gray-800 font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          CI Vanesa A. Dezzutto (Mat. 1921) <br /> Dr. Germán Boeri - Abogado
          (LºXXV-382)
        </motion.p>
      </div>
    </section>
  );
};

export default About;
