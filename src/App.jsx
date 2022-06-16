import './App.css';
import Footer from './components/Footer/Footer';
import Imagen from './components/Imagen/Imagen';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {

  const nombre = "Alvaro";
  const nombre2 = "Santi";
  /* const interruptor = false; */
  const edadAlvaro = 45;
  const edadSanti = 22;
  const arbolChulo = "https://ep01.epimg.net/elpais/imagenes/2019/10/30/album/1572424649_614672_1572453030_noticia_normal.jpg";
  const paisanoSol = "https://neliosoftware.com/es/wp-content/uploads/sites/3/2018/07/aziz-acharki-549137-unsplash-1200x775.jpg";
  const coloresHorrible = "https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800";
  const alumnos = ["adrian", "daniel", "el otro daniel"];

  return (
    <>
      <Imagen source={arbolChulo} nombre="Julian" edad={edadSanti} alumnos={alumnos}/>
      <Imagen source={paisanoSol} nombre="Paquito"/>
      <Imagen source={coloresHorrible} nombre="Roberto"/>
      <Imagen source="https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg" nombre="Romualdo"/>
    </>
  );
}

export default App;
