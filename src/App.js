import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Fomulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';


function App() {
  const [mostrarFormulario,actualizarMostrar] = useState(false)
  const [colaboradores,actualizarColaboradores] = useState([{
    id: uuidv4(),
    equipo: 'Front-End',
    foto: 'https://github.com/harlandlohora.png',
    nombre: 'Harland Lohora',
    puesto:'Instructor en Alura Latam',
    fav: false
    },
    {
      id: uuidv4(),
      equipo: 'Programacion',
      foto: 'https://github.com/genesysaluralatam.png',
      nombre: 'Genesys Rondon',
      puesto:'Desarrolladora de sofware e instructora',
      fav: false
    },
    {
      id: uuidv4(),
      equipo: 'UX y Diseño',
      foto: 'https://github.com/Jeanmariealuralatam.png',
      nombre: 'Jeanmarie Quijada',
      puesto:'Instructora en Alura Latam',
      fav: false
    },
    {
      id: uuidv4(),
      equipo: 'Programacion',
      foto: 'https://github.com/christianpva.png',
      nombre: 'Christian Velazco',
      puesto:'Head de Alura e instructor',
      fav: false
    },
    {
      id: uuidv4(),
      equipo: 'Innovacion y Gestion',
      foto: 'https://github.com/JoseDarioGonzalezCha.png',
      nombre: 'Jose Gonzalez',
      puesto:'Dev FullStack',
      fav: false
    }
  
  ])

  const [equipos, actualizarEquipos] = useState ([
    {
      id: uuidv4(),
      titulo:'Programacion',
      colorPrimario:'#57c278',
      colorSecundario:'#d9f7e9'
    },
    {
      id: uuidv4(),
      titulo:'Front-End',
      colorPrimario:'#82CFFA',
      colorSecundario:'#E8F8FF'
    }, 
    {
      id: uuidv4(),
      titulo:'Data Science',
      colorPrimario:'#A6D157',
      colorSecundario:'#F0F8E2'
    },
    {
      id: uuidv4(),
      titulo:'Devops',
      colorPrimario:'#E06B69',
      colorSecundario:'#FDE7E8'
    },
    {
      id: uuidv4(),
      titulo:'UX y Diseño',
      colorPrimario:'#DB6EBF',
      colorSecundario:'#FAE9F5'
    },
    {
      id: uuidv4(),
      titulo:'Movil',
      colorPrimario:'#FFBA05',
      colorSecundario:'#FFF5D9'
    },
    {
      id: uuidv4(),
      titulo:'Innovacion y Gestion',
      colorPrimario:'#FF8A29',
      colorSecundario:'#FFEEDF'
    },
  ])

  //teniario -> condicion ? seMuestra : noseMuestra
  //condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar colaborador

  const registrarColaborador = (colaborador) => {
    console.log('Nuevo colaborador:', colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //Eliminar colaborador

  const eliminarColaborador = (id) => {
    console.log('Eliminar colaborador', id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo

  const actualizarColor = (color, id) => {
    console.log('Actualizar: ', color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
  }

  const like = (id) => {
    console.log('like', id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
        console.log(colaborador.fav)  
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div className="App">
      <Header />
      {/*{mostrarFormulario ? <Formulario /> : <></>} */}
      { 
        mostrarFormulario === true ? 
        <Formulario 
        equipos={equipos.map((equipo) => equipo.titulo)}
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        /> : <div></div> 
      }
      <MiOrg cambiarMostrar={cambiarMostrar} />      
      { 
        equipos.map((equipo)  => {
          return <Equipo 
            datos={equipo} 
            key={equipo.titulo}
            colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
            eliminarColaborador={eliminarColaborador}
            actualizarColor={actualizarColor}
            like={like}
          />
        })
      }

      <Footer />

    </div>
  );
}

export default App;
