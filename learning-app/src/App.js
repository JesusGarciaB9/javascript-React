import logo from './logo.svg'; //LOS IMPORTS VAN PRIMERO
import './App.css';

function App() {
  // TENEMOS PAISES Y CIUDADES

  // ARRAY DE PAISES -ID, NOMBRE, TAMAÑO, CIUDADES (ARRAY DE OBJETOS , QUE SON SON CONFORMADOS
  // ID,NOMBRE , LATITUD, LONGITUD, POBLACION )

  const paises = [
    {
      id: 1,
      name: 'Colombia',
      size: '480000mts2',
      presidente: {
        name: 'pedro',
      },
      ciudades: [
        { id: 4, nombre: 'barranquila', latitud: 67.323, longitud: 65.333, poblacion: 2000000 },
        { id: 5, nombre: 'medellin', latitud: 69.3253, longitud: 95.333, poblacion: 3000000 },
      ],
    }, //0
    {
      id: 2,
      name: 'España',
      size: '490000mts2',
      presidente: {
        name: 'juan',
      },
      ciudades: [
        { id: 6, nombre: 'barcelona', latitud: 70.323, longitud: 4.333, poblacion: 8000000 },
        { id: 7, nombre: 'malaga', latitud: 44.3253, longitud: 93.333, poblacion: 2000000 },
      ],
    }, //1
    {
      id: 3,
      name: 'Venezuela',
      size: '500000mts2',
      presidente: {
        name: 'miguel',
      },
      ciudades: [
        { id: 8, nombre: 'caracas', latitud: 66.323, longitud: 62.333, poblacion: 880000 },
        { id: 9, nombre: 'valencia', latitud: 33.3253, longitud: 11.333, poblacion: 6600000 },
      ],
    }, //2
  ];
  return (
    <div className='App ' style={{ fontSize: '20px' }}>
      {paises.map((pais) => {
        return pais.name;
      })}
      <div>SEPARACIÓN</div>
      {paises.map((pais) => {
        return (
          <>
            {pais.name} - {pais.id} - {pais.size}
          </>
        );
      })}
      <div>SEPARACIÓN 2</div>
      {paises.map((pais) => {
        return (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>{pais.name}</div>
            <div> {pais.id}</div>
            <div>{pais.size}</div>
          </div>
        );
      })}
      <div>SEPARACIÓN 3</div>
      {paises.map((pais) => {
        return (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>{pais.name}</div>
            <div> {pais.id}</div>
            <div>{pais.size}</div>
            <div>{pais.presidente.name}</div>
          </div>
        );
      })}
      <div>SEPARACIÓN 4</div>
      {paises.map((pais) => {
        return (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>{pais.name}</div>
            <div> {pais.id}</div>
            <div>{pais.size}</div>
            <div>{pais.presidente.name}</div>
            {pais.ciudades.map((ciudad) => {
              return <div style={{ padding: '8px' }}>{ciudad.nombre}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
