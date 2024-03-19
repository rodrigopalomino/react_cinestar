import { Route, Routes } from "react-router-dom";
import { Peliculas } from "./components/peliculas";
import { Pelicula } from "./components/pelicula";
import { Cines } from "./components/cines";
import { Cine } from "./components/cine";
import { Home } from "./components/home";

export const Routing = () => {
  return (
    <Routes>
      <Route path="" element={<Home></Home>}></Route>

      <Route path="/cines" element={<Cines></Cines>}></Route>
      <Route path="/cine/:id" element={<Cine></Cine>}></Route>

      <Route path="/peliculas/:id" element={<Peliculas></Peliculas>}></Route>
      <Route path="/pelicula/:id" element={<Pelicula></Pelicula>}></Route>

  
    </Routes>
  );
};
