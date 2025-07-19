import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./components/pages/Error404";
import Footer from "./components/shared/Footer";
import Menu from "./components/shared/Menu";
import Inicio from "./components/pages/Index"
import DetalleReceta from "./components/pages/DetalleReceta";
import Administrador from "./components/pages/Administrador";
import Login from "./components/pages/Login";
import { useState } from "react";

function App() {

  return (
    <>
      <BrowserRouter>
        <Menu></Menu>
        <main>
          <Routes>
            <Route path="/" element={<Inicio></Inicio>}></Route>
            <Route path="/detalle" element={<DetalleReceta></DetalleReceta>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/administrador" element={<Administrador></Administrador>}></Route>
            {/*<Route path="/administrador/crear" element={<FormularioReceta></FormularioReceta>}></Route>*/}
            {/*<Route path="/administrador/editar" element={<FormularioReceta></FormularioReceta>}></Route>*/}
            <Route path="*" element={<Error404></Error404>}></Route>
          </Routes>
        </main>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
