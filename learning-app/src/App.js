import logo from './logo.svg'; //LOS IMPORTS VAN PRIMERO
import './App.css';

function App() {
  //LO PRIMERO ES DEFINIR VARIABLES
  //CODIGO LÓGICO DE LA VISTA VA AQUÍ
  const variable = 3.2;
  let nameAndLastName; // letra inicial minuscula, camelCase, ser diciente con los nombres
  const a = 1;
  const booleano = true; //booleans 1 verdadero - 0 false
  const bolleano2 = false; //booleans

  const stringEjemplo = 'hola mundo'; //String
  const stringHola = 'hola'; //String

  const floatEjemplo = 4.3; //Numero con decimales
  const floatEjemplo2 = 4.5;

  const integerExample = 3;
  const integerExample2 = 4;

  const humanExample = {
    nombre: 'Juan',
    apellido: 'perez',
    document: 1234984823,
    haveChildrens: true,
    perfil: {
      edad: 4,
    },
  };

  const humanExample2 = {
    nombre: 'Juan',
    apellido: 'perez',
    document: 1234984823,
    haveChildrens: true,
    perfil: {
      edad: 6,
    },
  };
  //console.log('edad1 del humano ', humanExample.perfil.edad);
  //console.log('edad 2del humano ', humanExample2.perfil.edad);
  //console.log('suma ', humanExample.perfil.edad + humanExample2.perfil.edad);
  const arrayExamples = [
    { nombre: 'juan' },
    { apellido: 'perez' },
    { document: 321421342 },
    { haveChildrens: true },
    [],
  ];

  //TENGO 5 EVENTOS
  const evento1 = {
    name: 'event1',
  };
  const evento2 = {
    name: 'event2',
  };
  const evento3 = {
    name: 'event3',
  };
  const evento4 = {
    name: 'event4',
  };

  const arrayEvents = [evento1, evento2, evento3, evento4]; //cada objeto es un evento

  //OPERACIONES
  //console.log(floatEjemplo + floatEjemplo2);

  //console.log(floatEjemplo - floatEjemplo2);

  //console.log(floatEjemplo / floatEjemplo2);

  //console.log(floatEjemplo * floatEjemplo2);

  //FUNCIONES

  //TAREA 2 , CREO FUNCIÓN QUE RECIBE UN INDICE DEL ARRAY (POSICION DEL ELEMENTO) , RETORNAR EL PERFIL QUE SE ENCUENTRE EN ESA POSICIÓN DEL ARRAY

  const cambiarValor = (e) => {
    e.preventDefault();
  };

  const ejemploSuma = [1, 2, 3, 4, 5, 6];
  //console.log(ejemploSuma[0] + ejemploSuma[1]);

  const ejemploArrayTarea = [{ nombre: 'toño' }];
  //console.log('ejemploArrayTarea :>> ', ejemploArrayTarea[0].nombre);

  // [  {} , {} , {} , {} ,{ }  ]
  let estudiantes = [
    {
      id: 1,
      nombre: 'Carlos Cardona',
      correo: 'cacardona5@gmail.com',
      perfil: { direccion: 'carrera 123', telefono: 4404035, sexo: 'masculino', edad: 1 },
    }, //0
    {
      id: 2,
      nombre: 'ANdres Chamorro',
      correo: 'chamorro5@gmail.com',
      perfil: { direccion: 'calle 123', telefono: 3335656, sexo: 'masculino', edad: 1 },
    }, //1
    {
      id: 3,
      nombre: 'Valentina Cardona',
      correo: 'valentina@gmail.com',
      perfil: { direccion: 'avenida 123', telefono: 3109999, sexo: 'femenino', edad: 1 },
    }, //2
    {
      id: 4,
      nombre: 'Fabian Chaguendo',
      correo: 'chaguendo@gmail.com',
      perfil: { direccion: 'diagonal 123', telefono: 1109090, sexo: 'masculino', edad: 10 },
    }, //3
    {
      id: 5,
      nombre: 'Socorro Gonzales',
      correo: 'socorro@gmail.com',
      perfil: { direccion: 'transversal 123', telefono: 6606060, sexo: 'masculino', edad: 1 },
    }, //4
  ];

  function agarrarPefil(indice) {
    //indice = 0
    //codigo de la funcion
    console.log(' estudiante 0 ', estudiantes[indice].perfil);
    return estudiantes[indice].perfil;
  }
  // [ {carro 1} , {carro 2} , {carro3 }                     ]
  const carros = [
    {
      marca: 'chevrolet',
      precio: 4000,
    },
    {
      marca: 'mazda',
      precio: 2000,
    },
    {
      marca: 'audi',
      precio: 20000,
    },
  ];
  return (
    <div className='App'>
      {carros.map(({ marca, precio }) => {
        return (
          <div>
            <div>{marca}</div>
          </div>
        );
      })}

      <div>SEPARACIÓN</div>
    </div>
  );
}

export default App;
