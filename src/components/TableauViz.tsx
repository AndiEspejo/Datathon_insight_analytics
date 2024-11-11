import { useEffect, useRef } from 'react';

const TableauViz = () => {
  const vizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vizRef.current) return;

    const divElement = vizRef.current;
    divElement.innerHTML = '';

    const vizElement = document.createElement('object');
    vizElement.className = 'tableauViz';

    // Aplicar estilos simples de centrado
    Object.assign(vizElement.style, {
      display: 'block',
      width: '100%',
      height: '1027px',
      margin: '0 auto',
    });

    const params = [
      { name: 'host_url', value: 'https%3A%2F%2Fpublic.tableau.com%2F' },
      { name: 'embed_code_version', value: '3' },
      { name: 'site_root', value: '' },
      {
        name: 'name',
        value: 'AtractivosTuristscosdeMedelln/AtractivosTursticosdeMedelln',
      },
      { name: 'tabs', value: 'no' },
      { name: 'toolbar', value: 'yes' },
      {
        name: 'static_image',
        value:
          'https://public.tableau.com/static/images/At/AtractivosTuristscosdeMedelln/AtractivosTursticosdeMedelln/1.png',
      },
      { name: 'animate_transition', value: 'yes' },
      { name: 'display_static_image', value: 'yes' },
      { name: 'display_spinner', value: 'yes' },
      { name: 'display_overlay', value: 'yes' },
      { name: 'display_count', value: 'yes' },
      { name: 'language', value: 'en-US' },
      { name: 'filter', value: 'publish=yes' },
    ];

    params.forEach(({ name, value }) => {
      const param = document.createElement('param');
      param.name = name;
      param.value = value;
      vizElement.appendChild(param);
    });

    divElement.appendChild(vizElement);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && vizElement.children.length > 0) {
          // Re-aplicar estilos después de que Tableau haya terminado de cargar
          Object.assign(vizElement.style, {
            display: 'block',
            width: '100%',
            height: '1027px',
            margin: '0 auto',
          });
          observer.disconnect();
        }
      });
    });

    observer.observe(vizElement, { childList: true });

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode?.insertBefore(scriptElement, vizElement);

    return () => {
      observer.disconnect();
      divElement.innerHTML = '';
    };
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: '20px 0',
      }}
    >
      <div
        ref={vizRef}
        id='viz1731346514173'
        style={{
          width: '1366px', // Ancho fijo del tablero
          height: '1027px',
          margin: '0 auto',
        }}
      />
    </div>
  );
};

export default TableauViz;
