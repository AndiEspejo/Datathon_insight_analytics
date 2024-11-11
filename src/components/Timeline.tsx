import React from 'react';

const Timeline: React.FC = () => {
  return (
    <div style={{ width: '100%' }}>
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%', // Aspect ratio 16:9
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
          src='https://view.genially.com/6730230fad490720c1a2555a/horizontal-infographic-diagrams-timeline-diagrama'
          allowFullScreen={true}
          loading='lazy'
          title='Medellín Timeline'
        />
      </div>
    </div>
  );
};

export default Timeline;
