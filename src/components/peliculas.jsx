import { Navbar } from "../shared/navbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import bgSlider from "../assets/varios/bg-slider.png";
import bgPapaya from "../assets/varios/bg-papaya.jpg";
import starCard from "../assets/varios/starcard.jpg";
import cinefiloStar from "../assets/varios/cinefilo-star.jpg";
import btnMasInfo from "../assets/varios/btn-mas-info.jpg";
import btnTrailer from "../assets/varios/btn-trailer.jpg";
import imagenes from "../urlImagenes";

export const Peliculas = () => {
  const [peliculas, setPeliculas] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    const fetchPeliculas = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/peliculas/${id}`);
        const peliculasData = await response.json();
        setPeliculas(peliculasData);
      } catch {
        return "error";
      }
    };
    fetchPeliculas();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="w-100 d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <img src={bgSlider} className="slider" />
        <img src={bgPapaya} alt="" />
      </div>

      <div className="d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center align-items-lg-start">
        <div className="d-flex flex-column align-items-center mb-3">
          <img src={starCard} className="mb-3" />
          <img src={cinefiloStar} />
        </div>
        <div id="contenido-interno" className="px-4" style={{ width: "640px" }}>
          <h2 className="text-danger">Cartelera</h2>

          {peliculas &&
            peliculas.map((pelicula) => (
              <div key={pelicula.id} className="d-flex mb-4">
                <div className="px-1">
                  <p className="fw-bold" style={{ fontSize: "14px" }}>
                    {pelicula.Titulo}
                  </p>
                  <p className="">{pelicula.Sinopsis}</p>
                  <div>
                    <a href={`/pelicula/${pelicula.id}`}>
                      <img src={btnMasInfo} className="me-1" />
                    </a>
                    <a href="#" target="_blank">
                      <img src={btnTrailer} />
                    </a>
                  </div>
                </div>
                <img src={imagenes[`imgPelicula${pelicula.id}`]} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
