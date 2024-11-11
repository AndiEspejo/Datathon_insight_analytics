import { motion } from 'framer-motion';
import '../styles/TourismGrowth.css';

const TourismGrowth = () => {
  return (
    <motion.div
      className='tourism-container'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className='text-section'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 1 }}
      >
        <h1>Crecimiento Turístico y el Desafío de la Sostenibilidad</h1>
        <p>
          El turismo en Medellín ha crecido de manera notable en los últimos
          años, impulsado por la innovación y una visión estratégica que han
          llevado a la ciudad a nuevas alturas. Sin embargo, este crecimiento
          también presenta desafíos: es esencial fomentar un turismo sostenible
          que no solo beneficie a los visitantes, sino que también mejore la
          calidad de vida de los residentes, preservando el medio ambiente y
          protegiendo la identidad cultural que define a Medellín.
        </p>
      </motion.div>
      <motion.div
        className='images-section'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <motion.img
          src='/pueblo.jpg'
          alt='Desfile de flores'
          className='image-grid-item'
        />
        <motion.img
          src='/silleteros.jpg'
          alt='Sendero en la naturaleza'
          className='image-grid-item'
        />
        <motion.img
          src='/botero.jpg'
          alt='Pueblo antioqueño'
          className='image-grid-item'
        />
        <motion.img
          src='/valle.jpg'
          alt='Obra de Botero'
          className='image-grid-item'
        />
      </motion.div>
    </motion.div>
  );
};

export default TourismGrowth;
