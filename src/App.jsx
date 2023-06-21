import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./home/inicio";
import Ejercicio1 from "./ejercicio-1/page/ejercicio1";
import Ejercicio2 from "./ejercicio-2/page/ejercicio2";
import Ejercicio3 from "./ejercicio-3/page/ejercicio3";
import Ejercicio4 from "./ejercicio-4/page/ejercicio4";
import Ejercicio5 from "./ejercicio-5/page/ejercicio5";
import Ejercicio6 from "./ejercicio-6/page/ejercicio6";
import Ejercicio7 from "./ejercicio-7/page/ejercicio7";
import Ejercicio8 from "./ejercicio-8/page/ejercicio8";
import Ejercicio9 from "./ejercicio-9/page/ejercicio9";
import Ejercicio10 from "./ejercicio-10/page/ejercicio10";
import Ejercicio11 from "./ejercicio-11/page/ejercicio11";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Ejercicio1" element={<Ejercicio1 />} />
        <Route path="/Ejercicio2" element={<Ejercicio2 />} />
        <Route path="/Ejercicio3" element={<Ejercicio3 />} />
        <Route path="/Ejercicio4" element={<Ejercicio4 />} />
        <Route path="/Ejercicio5" element={<Ejercicio5 />} />
        <Route path="/Ejercicio6" element={<Ejercicio6 />} />
        <Route path="/Ejercicio7" element={<Ejercicio7 />} />
        <Route path="/Ejercicio8" element={<Ejercicio8 />} />
        <Route path="/Ejercicio9" element={<Ejercicio9 />} />
        <Route path="/Ejercicio10" element={<Ejercicio10 />} />
        <Route path="/Ejercicio11" element={<Ejercicio11 />} />
      </Routes>
    </Router>
  );
}

export default App;
