import './../styles/welcome.css';

const WelcomeToMedellin = () => {
  return (
    <div className='container'>
      <div className='image-container'>
        <img src='/welcome.jpg' alt='Medellín' className='city-image' />
      </div>
      <div className='text-container'>
        <h1>Bienvenidos a Medellín</h1>
        <p>Ciudad de la eterna primavera</p>
        <strong>Data Analytics Group</strong>
      </div>
    </div>
  );
};

export default WelcomeToMedellin;
