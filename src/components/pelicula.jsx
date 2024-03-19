import { Navbar } from "../shared/navbar";
import bgSlider from "../assets/varios/bg-slider.png";
import bgPapaya from "../assets/varios/bg-papaya.jpg";
import starcard from "../assets/varios/starcard.jpg";
import cinefiloStar from "../assets/varios/cinefilo-star.jpg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import imagenes from "../urlImagenes";

export const Pelicula = () => {
  const [pelicula, setPelicula] = useState(null);
  let { id } = useParams();
  useEffect(() => {
    const fetchPelicula = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/pelicula/${id}`);
        const peliculaData = await response.json();
        setPelicula(peliculaData);
      } catch {
        return "error";
      }
    };
    fetchPelicula();
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
            {pelicula &&
              pelicula.map((pelicula) => (
                <div key={pelicula.id}>
                  <div className="d-flex mb-3">
                    <div className="me-1">
                      <p className="fw-bold">{pelicula.Titulo}</p>
                      <p>{pelicula.Sinopsis}</p>
                      <p className="m-1">Título Original : {pelicula.Titulo}</p>
                      <p className="m-1">Estreno : {pelicula.FechaEstrenoss}</p>
                      <p className="m-1">Género : {pelicula.Geneross}</p>
                      <p className="m-1">Director : {pelicula.Director}</p>
                      <p className="m-1">Reparto : {pelicula.Reparto}</p>
                    </div>
                    <img src={imagenes[`imgPelicula${pelicula.id}`]} />
                  </div>
                  <embed
                    src="https://www.youtube.com/v/{{ pelicula.Link }}"
                    type="application/x-shockwave-flash"
                    height="400"
                    className="w-100"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
