const AttractivesEmbed = () => {
  return (
    <div className='attractives-section'>
      <div
        className='attractives-intro'
        style={{
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '2rem 1rem',
        }}
      >
        <h2
          style={{
            fontSize: '2rem',
            marginBottom: '1rem',
          }}
        >
          Explorando Todos los Atractivos de Medellín
        </h2>
        <p
          style={{
            fontSize: '1.1rem',
            lineHeight: '1.6',
            color: '#333',
            marginBottom: '2rem',
          }}
        >
          Si bien estos son algunos de los atractivos turísticos más destacados,
          aquí podrá encontrar muchos otros que hacen de Medellín un destino
          único. Explore el mapa para descubrir todos los lugares de interés que
          la ciudad tiene para ofrecer.
        </p>
      </div>

      <div style={{ width: '100%' }}>
        <div
          style={{
            position: 'relative',
            paddingBottom: '56.25%',
            paddingTop: 0,
            height: 0,
          }}
        >
          <iframe
            frameBorder='0'
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            src='https://view.genially.com/6730e84279ffc723af253f3a/interactive-content-promocion-eventos'
            allowFullScreen={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AttractivesEmbed;
