import '../styles/OdsComponent.css';

const OdsComponent = () => {
  return (
    <div className='ods-container'>
      <div className='ods-text'>
        <h2>Hacia un Desarrollo Sostenible con los ODS</h2>
        <p>
          Este proyecto tiene como objetivo evaluar los impactos del turismo en
          Medellín mediante un análisis integral de datos que abarque la
          seguridad, la movilidad, el perfil del turista y los indicadores
          sociales y económicos, con el propósito de desarrollar una herramienta
          para medir sus efectos en la ciudad. Todo ello alineado con los
          Objetivos de Desarrollo Sostenible (ODS), en particular:
        </p>
        <ul>
          <li>
            <strong>ODS 8</strong> (Trabajo Decente y Crecimiento Económico):
            Promoviendo empleos de calidad en el sector turístico y el
            crecimiento económico inclusivo.
          </li>
          <li>
            <strong>ODS 10</strong> (Reducción de las Desigualdades): Fomentando
            un turismo inclusivo y accesible, que permita reducir desigualdades
            sociales y económicas.
          </li>
          <li>
            <strong>ODS 11</strong> (Ciudades y Comunidades Sostenibles):
            Contribuyendo a la creación de entornos seguros y accesibles,
            mejorando la movilidad y fortaleciendo la cohesión social.
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
