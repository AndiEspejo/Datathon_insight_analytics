import '../styles/SecurityIndicators.css';

const SecurityIndicators = () => {
  return (
    <div className='security-container'>
      <div className='security-text'>
        <h2>
          Indicadores sociales y de seguridad: Evolución de la Criminalidad y la
          Violencia
        </h2>
        <p>
          En esta sección se analizarán los indicadores de seguridad de
          Medellín, incluyendo estadísticas sobre hurtos, violencia sexual,
          violencia doméstica, homicidios y accidentes. Estos datos permitirán
          evaluar cómo han evolucionado estos problemas a lo largo de los años,
          proporcionando una visión integral de las condiciones de seguridad en
          la ciudad y su impacto en la calidad de vida de los habitantes y en la
          percepción de Medellín como un destino seguro para los turistas.
        </p>
      </div>
      <div className='security-image'>
        <img src={'./criminalidad-1.jpg'} alt='Indicadores de Seguridad' />
      </div>
    </div>
  );
};

export default SecurityIndicators;
