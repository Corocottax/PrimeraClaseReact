import React from 'react'
import "./Imagen.css";

const Imagen = ({source}) => {

    /* console.log("Esto es mi objeto de propiedades, lo que me llega del padre, la información que el padre me quiera pasar ");
    console.log(props);
    Hago un destructuring visto en JS al objeto, por lo tanto, me quedo en este caso con su propiedad nombre del objeto
    const {nombre} = props;
    console.log("muestro por pantalla mi variable nombre sacada con el destructuring" + nombre) */;

  return (
    <img className='imagen' src={source} alt="imagen"/>
  )
}

export default Imagen