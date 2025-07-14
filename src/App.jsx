import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./components/pages/Error404";
import Footer from "./components/shared/Footer";
import Menu from "./components/shared/Menu";
import Inicio from "./components/pages/Index"
import DetalleReceta from "./components/pages/DetalleReceta";
import Administrador from "./components/pages/Administrador";
import { useState } from "react";

function App() {

  return (
    <>
        <Menu></Menu>
        <main>
          {/*<Error404></Error404>*/}
          {/*<Inicio></Inicio>*/}
          <Administrador></Administrador>
          {/*<DetalleReceta></DetalleReceta>*/}
          {/*<FormularioReceta></FormularioReceta>*/}
        </main>
      <Footer></Footer>
    </>
  )
}

export default App
