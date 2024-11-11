import '../styles/EnvironmentalIndicators.css';

const EnvironmentalIndicators = () => {
  return (
    <div className='environmental-overview-container'>
      <div className='environmental-text'>
        <h2>Indicadores Ambientales y Climáticos</h2>
        <p>
          En esta sección se presentarán indicadores relacionados con el medio
          ambiente y el clima de Medellín. Estos incluyen datos sobre calidad
          del aire, emisiones de gases contaminantes, temperatura promedio y
          otros factores ambientales clave. El análisis de estos indicadores
          permitirá entender cómo ha evolucionado la situación ambiental de la
          ciudad y cuáles son los retos actuales para garantizar un entorno
          saludable tanto para sus habitantes como para los visitantes.
        </p>
      </div>
      <div className='environmental-image'>
        <img
          src={'./sostenibilidad-scaled-1.jpg'}
          alt='Indicadores Ambientales'
          className='circular-image'
        />
      </div>
    </div>
  );
};

export default EnvironmentalIndicators;
