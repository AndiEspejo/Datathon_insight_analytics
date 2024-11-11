import '../styles/IndicadoresEconomicos.css';

const IndicadoresEconomicos = () => {
  return (
    <section className='section-container'>
      <div className='title'>
        <h1>Indicadores Económicos y Sociales</h1>
        <h2>
          Evolución e Impacto en la Calidad de Vida de los habitantes de
          Medellín
        </h2>
      </div>
      <p className='description'>
        En esta sección se analizará la evolución de diferentes indicadores
        económicos y sociales, con el objetivo de identificar cómo ha cambiado
        la calidad de vida de los habitantes de Medellín a lo largo del tiempo.
      </p>
      <div className='images-container'>
        <img
          src={'./indicador1.jpg '}
          alt='Evolución económica'
          className='image'
        />
        <img
          src={'./indicador2.jpg'}
          alt='Indicadores sociales'
          className='image'
        />
        <img src={'./indicador3.jpg'} alt='Calidad de vida' className='image' />
      </div>
    </section>
  );
};

export default IndicadoresEconomicos;
