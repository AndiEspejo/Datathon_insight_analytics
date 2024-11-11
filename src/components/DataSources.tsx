import '../styles/DataSourcesComponent.css';

const DataSourcesComponent = () => {
  return (
    <div className='data-sources-container'>
      <div className='data-image'>
        <img src={'./data-warehouse-graphic.png'} alt='Fuentes de Datos' />
      </div>
      <div className='data-text'>
        <h2>Fuentes de Datos</h2>
        <p>
          Para la elaboración de este informe se utilizaron múltiples fuentes de
          datos, incluyendo información proporcionada por Migración Colombia y
          la Policía Nacional, entre otras que serán detalladas más adelante.
          Todo el proceso de análisis y procesamiento de los datos está
          disponible públicamente en nuestro repositorio de GitHub:
          <a
            href='https://github.com/Insight-Analytics-Group-Datathon'
            target='_blank'
            rel='noopener noreferrer'
          >
            Insight-Analytics-Group-Datathon
          </a>
          , donde se puede acceder a los scripts y herramientas utilizadas,
          fomentando la transparencia y la replicabilidad de nuestro trabajo.
        </p>
      </div>
    </div>
  );
};

export default DataSourcesComponent;
