const Header = () => {
  return (
    <div
      style={{
        backgroundImage: 'url("./medellin.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '400px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      {/* Overlay oscuro para mejorar la legibilidad del texto */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      />

      <h1
        style={{
          color: 'white',
          fontSize: '3.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        Turismo Sostenible en Medellín
      </h1>
    </div>
  );
};

export default Header;
