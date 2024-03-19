import { Navbar } from "../shared/navbar";
import { useState, useEffect } from "react";
import bgSlider from "../assets/varios/bg-slider.png";
import bgPapaya from "../assets/varios/bg-papaya.jpg";
import starcard from "../assets/varios/starcard.jpg";
import cinefiloStar from "../assets/varios/cinefilo-star.jpg";
import icoInfo2 from "../assets/varios/ico-info2.png";
import imagenes from "../urlImagenes";
import { Link } from "react-router-dom";

export const Cines = () => {
  const [cines, setCines] = useState(null);

  useEffect(() => {
    const fetchCines = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:5000/cines`);
        const cinesData = await response.json();
        setCines(cinesData);
      } catch {
        return "error";
      }
    };
    fetchCines();
  }, []);

  return (
    <>
      <Navbar />

      <div className="body">
        <div className="w-100 d-flex flex-column flex-lg-row justify-content-center align-items-center">
          <img src={bgSlider} className="slider" />
          <img src={bgPapaya} alt="" />
        </div>

        <div className="d-flex flex-column-reverse flex-lg-row justify-content-center align-items-center align-items-lg-start">
          <div className="d-flex flex-column align-items-center mb-3">
            <img src={starcard} className="mb-3" />
            <img src={cinefiloStar} />
          </div>
          <div
            id="contenido-interno"
            className="px-4 mb-4"
            style={{ width: "640px" }}
          >
            <div className="row">
              {cines &&
                cines.map((cine) => (
                  <div
                    key={cine.id}
                    className="col-6 mb-2 d-flex justify-content-center"
                  >
                    <div>
                      <div className="card" style={{ width: "14rem" }}>
                        <img
                          src={imagenes[`cine${cine.id}1`]}
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h5 className="fw-bold">{cine.RazonSocial}</h5>
                          <p className="card-text">
                            {cine.Direccion} - {cine.Detalle}
                          </p>
                          <p className="card-text">
                            Teléfono: {cine.Telefonos} anexo 865
                          </p>

                          <Link to={`/cine/${cine.id}`}>
                            <img src={icoInfo2} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
