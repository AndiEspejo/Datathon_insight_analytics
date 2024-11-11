import '../styles/OdsComponent.css';

const OdsComponent = () => {
  return (
    <div className='ods-container'>
      <div className='ods-text'>
        <h2>Hacia un Desarrollo Sostenible con los ODS</h2>
        <p>
          Este proyecto tiene como objetivo evaluar los impactos del turismo en
          Medellín mediante el análisis de datos, con el fin de desarrollar una
          herramienta que permita medir sus efectos ambientales, sociales y
          económicos. Todo esto en línea con los Objetivos de Desarrollo
          Sostenible (ODS), especialmente:
        </p>
        <ul>
          <li>
            <strong>ODS 8</strong> (Trabajo Decente y Crecimiento Económico)
          </li>
          <li>
            <strong>ODS 11</strong> (Ciudades y Comunidades Sostenibles)
          </li>
          <li>
            <strong>ODS 12</strong> (Producción y Consumo Responsables)
          </li>
          <li>
            <strong>ODS 13</strong> (Acción por el Clima)
          </li>
        </ul>
      </div>
      <div className='ods-image'>
        <img src={'./ods-1.jpg'} alt='Objetivos de Desarrollo Sostenible' />
      </div>
    </div>
  );
};

export default OdsComponent;
