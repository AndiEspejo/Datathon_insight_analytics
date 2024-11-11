import '../styles/ContextComponent.css';

const Context = () => {
  return (
    <div className='context-container'>
      <div className='context-text'>
        <h2>Conociendo Medellín: Un Contexto Necesario</h2>
        <p>
          Antes de profundizar en el análisis, es importante ofrecer una breve
          presentación de la ciudad de Medellín para contextualizar los aspectos
          que serán evaluados. A través de este recorrido, se destacarán las
          características principales de la ciudad, su transformación en los
          últimos años y los atractivos que la convierten en un destino
          turístico emergente. Este contexto permitirá comprender mejor los
          factores que influyen en el desarrollo turístico de la región y la
          relevancia de los desafíos que enfrenta.
        </p>
      </div>
      <div className='context-image'>
        <img src={'./metro.jpg'} alt='Contexto de Medellín' />
      </div>
    </div>
  );
};

export default Context;
