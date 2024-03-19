import { Navbar } from "../shared/navbar";
import bgSlider from "../assets/varios/bg-slider.png";
import bgPapaya from "../assets/varios/bg-papaya.jpg";
import starcard from "../assets/varios/starcard.jpg";
import cinefiloStar from "../assets/varios/cinefilo-star.jpg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imagenes from "../urlImagenes";

export const Cine = () => {
  const [cine, setCine] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const fetchCine = async () => {
      try {
        const cineResponse = await fetch(`http://127.0.0.1:5000/cines/${id}`);

        const cineData = await cineResponse.json();
        setCine(cineData);
      } catch {
        return "error";
      }
    };
    fetchCine;
    fetchCine();
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="body">
        <div className="w-100 d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <img src={bgSlider} className="slider" />
          <img src={bgPapaya} alt="" />
        </div>

        <div className="d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center mt-3">
          <div className="d-flex flex-column align-items-center mb-3">
            <img src={starcard} className="mb-3" />
            <img src={cinefiloStar} />
          </div>
          <div
            id="contenido-interno"
            className="px-4 mb-4"
            style={{ width: "640px" }}
          >
            {cine && (
              <div key={cine.id}>
                <h1 className="text-danger">{cine.RazonSocial}</h1>

                <div className="bg-white">
                  <p className="m-0">
                    {cine.Direccion} - {cine.Detalle}
                  </p>
                  <p className="">Teléfono: {cine.Telefonos} anexo 865</p>

                  <Tarifas></Tarifas>

                  <p className="mt-2">
                    A partir del 1ro de julio de 2016, Cinestar Multicines
                    realizará el cobro de la comisión de S/. 1.00 adicional al
                    tarifario vigente, a los usuarios que compren sus entradas
                    por el aplicativo de Cine Papaya para Cine Star Comas,
                    Excelsior, Las Américas, Benavides, Breña, San Juan, UNI,
                    Aviación, Sur, Porteño, Tumbes y Tacna.
                  </p>
                  <p>
                    Los horarios de cada función están sujetos a cambios sin
                    previo aviso.
                  </p>
                  <p className="bg-dark m-0">Peliculas Horarios</p>
                  <Peliculas></Peliculas>

                  <div className="d-flex">
                    <img src={imagenes[`cine${cine.id}1`]} />
                    <p className="">
                      Precios de los juegos: desde S/1.00 en todos los Cine
                      Star. Horario de atención de juegos es de 12:00 m hasta
                      las 10:30 pm. Visitános y diviértete con nosotros.
                      CINESTAR, siempre pensando en tí
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export const Tarifas = () => {
  const [tarifas, setTarifas] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const fetchCine = async () => {
      try {
        const tarifasResponse = await fetch(
          `http://127.0.0.1:5000/cines/${id}/tarifas`
        );
        const tarifasData = await tarifasResponse.json();

        setTarifas(tarifasData);
      } catch {
        return "error";
      }
    };
    fetchCine;
    fetchCine();
  }, [id]);

  return (
    <>
      {tarifas &&
        tarifas.map((tarifa) => (
          <div key={tarifas.Precio}>
            <p className="m-0">
              {tarifa.DiasSemana} {tarifa.Precio}
            </p>
          </div>
        ))}
    </>
  );
};

export const Peliculas = () => {
  const [peliculas, setPeliculas] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const fetchCine = async () => {
      try {
        const peliculasResponse = await fetch(
          `http://127.0.0.1:5000/cines/${id}/peliculas`
        );

        const peliculaData = await peliculasResponse.json();

        setPeliculas(peliculaData);
      } catch {
        return "error";
      }
    };
    fetchCine;
    fetchCine();
  }, [id]);

  return (
    <>
      {peliculas &&
        peliculas.map((pelicula) => (
          <div key={pelicula.Titulo}>
            <p className="m-0">
              {pelicula.Titulo} : {pelicula.Horarios}
            </p>
          </div>
        ))}
    </>
  );
};
