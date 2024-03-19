import { Navbar } from "../shared/navbar";
import bgSlider from "../assets/varios/bg-slider.png";
import bgPapaya from "../assets/varios/bg-papaya.jpg";
import starcard from "../assets/varios/starcard.jpg";
import cinefiloStar from "../assets/varios/cinefilo-star.jpg";

export const Home = () => {
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
          ></div>
        </div>
      </div>
    </>
  );
};
