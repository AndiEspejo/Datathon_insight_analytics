import { useEffect, useRef } from 'react';

const TableauWifi = () => {
  const vizRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vizRef.current) return;

    const divElement = vizRef.current;
    divElement.innerHTML = '';

    const vizElement = document.createElement('object');
    vizElement.className = 'tableauViz';

    Object.assign(vizElement.style, {
      display: 'block',
      width: '100%',
      height: '827px',
      margin: '0 auto',
    });

    const params = [
      { name: 'host_url', value: 'https%3A%2F%2Fpublic.tableau.com%2F' },
      { name: 'embed_code_version', value: '3' },
      { name: 'site_root', value: '' },
      {
        name: 'name',
        value: 'Zonas_wifi_Gratis_Medelln/ZonasdeWifiGratisdeMedelln',
      },
      { name: 'tabs', value: 'no' },
      { name: 'toolbar', value: 'yes' },
      {
        name: 'static_image',
        value:
          'https://public.tableau.com/static/images/Zo/Zonas_wifi_Gratis_Medelln/ZonasdeWifiGratisdeMedelln/1.png',
      },
      { name: 'animate_transition', value: 'yes' },
      { name: 'display_static_image', value: 'yes' },
      { name: 'display_spinner', value: 'yes' },
      { name: 'display_overlay', value: 'yes' },
      { name: 'display_count', value: 'yes' },
      { name: 'language', value: 'es-ES' },
    ];

    params.forEach(({ name, value }) => {
      const param = document.createElement('param');
      param.name = name;
      param.value = value;
      vizElement.appendChild(param);
    });

    divElement.appendChild(vizElement);

    // Observador para manejar cambios responsivos
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && vizElement.children.length > 0) {
          const width = divElement.offsetWidth;
          if (width > 800) {
            vizElement.style.width = '1000px';
            vizElement.style.height = '827px';
          } else if (width > 500) {
            vizElement.style.width = '1000px';
            vizElement.style.height = '827px';
          } else {
            vizElement.style.width = '100%';
            vizElement.style.height = '727px';
          }
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
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0',
      }}
    >
      <div
        ref={vizRef}
        style={{
          width: '100%',
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </div>
  );
};

export default TableauWifi;
