import '../styles/SecurityIndicators.css';

const SecurityIndicators = () => {
  return (
    <div className='security-container'>
      <div className='security-text'>
        <h2>Indicadores sociales</h2>
        <p>
          En esta sección se analizarán los indicadores sociales clave de
          Medellín, incluyendo métricas fundamentales como la esperanza de vida,
          el índice de desarrollo humano, la pobreza multidimensional y la tasa
          de desempleo. Estos datos nos permitirán comprender la evolución del
          bienestar social en la ciudad, evaluando aspectos cruciales como el
          acceso a servicios básicos, oportunidades laborales y calidad de vida
          de los habitantes. A través de este análisis, podremos entender mejor
          los avances y desafíos en el desarrollo social de Medellín y su
          impacto en la construcción de una ciudad más equitativa e inclusiva.
        </p>
      </div>
      <div className='security-image'>
        <img
          src={'./tipos-de-indicadores.jpg'}
          alt='Indicadores de Seguridad'
        />
      </div>
    </div>
  );
};

export default SecurityIndicators;
