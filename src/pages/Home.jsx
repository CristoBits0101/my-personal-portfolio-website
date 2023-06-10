// Dependencies.
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

// Components.
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {

  // Se crea una referencia utilizando useRef para el elemento donde se aplicará el efecto de mecanografiado.
  const typedRef = useRef(null);

  useEffect(() => {

    // En el efecto useEffect se configuran las opciones para Typed.js.
    const options = {
      strings: ['Cristo Pérez Suárez', 'UX/UI Designer', 'Web Developer', 'Technical Electrician'],  // Las cadenas de texto que se mostrarán con el efecto de mecanografiado.
      typeSpeed: 100,                                                                                   // Velocidad de escritura.
      backSpeed: 100,                                                                                   // Velocidad de retroceso.
      loop: true                                                                                        // Indica si el efecto de mecanografiado se repite en un bucle.
    };

    // Se crea una nueva instancia de Typed.js utilizando la referencia del elemento y las opciones configuradas.
    const typed = new Typed(typedRef.current, options);

    // La función de retorno del efecto se utiliza para destruir la instancia de Typed.js cuando el componente se desmonte.
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="container-fluid vh-100 p-0 m-0 text-white color-gradient">
      <Header />
      <main className="w-100 m-0 p-0">
        <div className="row m-0 p-5">
          <div className="col-6 d-flex flex-column align-items-center m-0 p-5">
            <h4 className='display-6 dancing-script mt-5'>👋 Hello, Welcome to My Portfolio!</h4>
            <h2 className='display-3 fw-normal'>I&apos;m <span className="typing" ref={typedRef}></span></h2> {/* Texto con efecto de mecanografiado */}
            <p className='text-style-one'> 
              En esencia, este portafolio fue creado para exhibir mis conocimientos en el área de programación a las empresas del sector de tecnologías de la información. 
            </p>
            <p className='text-style-one'>
              Además, les mostraré un poco de mi formación y experiencia en otras áreas, como la administración de sistemas informáticos y redes, la instalación y mantenimiento en electricidad, electrónica, telecomunicaciones, domótica, automatización y energías renovables. 
            </p>
            <p className='text-style-one'>
              También hablaré sobre el despliegue de aplicaciones web en la nube y cómo todas estas habilidades me han beneficiado en el campo de las TI, así como los aportes que pueden brindar a su empresa.
            </p>
          </div>
          <div className="col-6 m-0 p-0">
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
