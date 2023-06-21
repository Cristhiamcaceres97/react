import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const Inicio = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-mb-30">
          <Link className="btn btn-dark w-100" to="/">
            inicio
          </Link>
          <Link className="btn btn-danger m-2" to="/ejercicio1">
            ejercicio 1
          </Link>
          <Link className="btn btn-danger m-2" to="/ejercicio2">
            ejercicio 2
          </Link>
          <Link className="btn btn-danger m-2" to="/ejercicio3">
            ejercicio 3
          </Link>
          <Link className="btn btn-danger m-2" to="/ejercicio4">
            ejercicio 4
          </Link>
          <Link className="btn btn-danger m-2" to="/ejercicio5">
            ejercicio 5
          </Link>
          <Link className="btn btn-danger m-2" to="/ejercicio6">
            ejercicio 6
          </Link>
          <Link className="btn btn-danger m-2" to="/ejercicio7">
            ejercicio 7
          </Link>
          <Link className="btn btn-danger m-2" to="/ejercicio8">
            ejercicio 8
          </Link>
          <Link className="btn btn-danger m-2" to="/ejercicio9">
            ejercicio 9
          </Link>
          <Link className="btn btn-danger m-2" to="/ejercicio10">
            ejercicio 10
          </Link>
          <Link className="btn btn-danger m-2" to="/ejercicio11">
            ejercicio 11
          </Link>
          <Link className="btn btn-danger m-2" to="/ejercicio12">
            ejercicio 12
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
