import '../styles/TourismOverview.css';

const TourismOverview = () => {
  return (
    <div className='tourism-overview-container'>
      <div className='tourism-image'>
        <img
          src={'./provenza-scaled-1.jpg'}
          alt='Panorama Turístico'
          className='circular-image'
        />
      </div>
      <div className='tourism-text'>
        <h2>
          Panorama del Turismo en Medellín: Evolución y Perfil de los Visitantes
        </h2>
        <p>
          A continuación, se presentará un análisis del panorama turístico de
          Medellín, incluyendo las cifras más relevantes y cómo han variado a lo
          largo de los años. Este análisis busca ofrecer una comprensión
          detallada de la evolución del turismo en la ciudad, así como del
          perfil de los visitantes que llegan a Medellín. A través de estos
          datos, se podrán identificar patrones de crecimiento, cambios en la
          composición del turismo y otros factores clave que explican el
          desarrollo de la industria turística en la región.
        </p>
      </div>
    </div>
  );
};

export default TourismOverview;
