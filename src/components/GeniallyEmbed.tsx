const GeniallyEmbed = () => {
  return (
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
          src='https://view.genially.com/6730422e2f24e70b43837667/guide-guia-lugares-imprescindibles'
          allowFullScreen={true}
        />
      </div>
    </div>
  );
};

export default GeniallyEmbed;
