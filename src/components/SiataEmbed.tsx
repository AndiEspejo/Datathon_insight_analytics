import { useEffect, useRef } from 'react';

const SiataEmbed = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        // Ajustar altura según el ancho para mantener proporción
        const width = iframeRef.current.offsetWidth;
        const height = width * 0.75; // Proporción 4:3
        iframeRef.current.style.height = `${height}px`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Ajuste inicial

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1300px',
        margin: '0 auto',
        padding: '20px 0',
      }}
    >
      <iframe
        ref={iframeRef}
        src='https://siata.gov.co/siata_nuevo/'
        title='SIATA - Sistema de Alerta Temprana'
        style={{
          width: '100%',
          border: 'none',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}
        sandbox='allow-same-origin allow-scripts allow-popups allow-forms'
        loading='lazy'
      />
    </div>
  );
};

export default SiataEmbed;
